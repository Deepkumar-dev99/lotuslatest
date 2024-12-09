import React, { useState, useEffect } from 'react';
import {
  View,
  ScrollView,
  Image,
  Text,
  TextInput,
  StyleSheet,
  Alert,
  TouchableOpacity,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { LinearGradient } from 'expo-linear-gradient';
import { Picker } from '@react-native-picker/picker';
import { useGlobalContext } from '../../context/GlobalProvider';
import { useNavigation } from '@react-navigation/native';
import { saveUserCookies } from '../../cookie-handler/cookieHandler';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/slice/user/userSlice';
import enrollStudentByInstitution from '../../BackendProxy/courseProxy/enrollStudentByInstituition';
import axios from 'axios';

const UserDetails = ({ type = 'student' }) => {
  const { email: globalEmail, pass: globalPass } = useGlobalContext();
  const [invitationCode, setInvitationCode] = useState('');
  const [haveInvitationCode, setHaveInvitationCode] = useState(true);
  const [email, setEmail] = useState(globalEmail);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [accountType, setAccountType] = useState(type);
  const [password, setPassword] = useState(globalPass);
  const [errors, setErrors] = useState({});
  const navigation = useNavigation();
  const dispatch = useDispatch();

  const validateInputs = () => {
    const newErrors = {};

    if (!firstName) {
      newErrors.firstName = 'First name is required.';
    }
    if (!lastName) {
      newErrors.lastName = 'Last name is required.';
    }
    if (!username) {
      newErrors.username = 'Username is required.';
    }
    if (!accountType) {
      newErrors.accountType = 'Account type is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async () => {
    if (!validateInputs()) {
      return Alert.alert('Please fill all required fields.');
    }

    try {
      const response = await axios.post(process.env.EXPO_PUBLIC_API_URL+ '/user/create-user', {
        firstName,
        lastName,
        email,
        accountType,
        code: invitationCode,
        linkedCode: haveInvitationCode,
        username,
        password,
      });

      console.log('Response:', response.data);

      if (response.data.success) {
        const savedUser = await saveUserCookies({ ...response.data.user });
        await dispatch(setUser(savedUser));

        if (response.data.user.accountType === 'student') {
          console.log(response.data.user._id);
          const enrollResponse = await enrollStudentByInstitution(response.data.user._id);

          if (enrollResponse.success) {
            console.log('User successfully enrolled in institution courses');
          } else {
            console.error('Enrollment failed:', enrollResponse.data.message);
          }
        }

        Alert.alert('Success', 'Account created successfully!');
        navigation.navigate('verifyemail');
      } else {
        throw new Error(response.data.errors?.[0]?.message || 'Something went wrong');
      }
    } catch (error) {
      console.log('Error:', error.message);
      Alert.alert('Error', error.message);
    }
  };

  useEffect(() => {
    if (!haveInvitationCode) {
      setInvitationCode('');
    }
  }, [haveInvitationCode]);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.profileContainer}>
          <Image
            source={require('../../assets/images/Mridul.png')}
            resizeMode={'cover'}
            style={styles.profileImage}
          />
          <Text style={styles.uploadText}>Upload Profile Photo</Text>
        </View>

        <Text style={styles.label}>First Name*</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter your first name"
          placeholderTextColor="#757575"
          value={firstName}
          onChangeText={(value) => setFirstName(value)}
        />
        {errors.firstName && (
          <Text style={styles.errorText}>{errors.firstName}</Text>
        )}

        <Text style={styles.label}>Last Name*</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter your last name"
          placeholderTextColor="#757575"
          value={lastName}
          onChangeText={(value) => setLastName(value)}
        />
        {errors.lastName && (
          <Text style={styles.errorText}>{errors.lastName}</Text>
        )}

        <Text style={styles.label}>Username*</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter your username"
          placeholderTextColor="#757575"
          value={username}
          onChangeText={(value) => setUsername(value)}
        />
        {errors.username && (
          <Text style={styles.errorText}>{errors.username}</Text>
        )}

        <Text style={styles.label}>Institution Code*</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter your Institution Code"
          placeholderTextColor="#757575"
          value={invitationCode}
          onChangeText={(value) => setInvitationCode(value)}
        />

        <Text style={styles.label}>Account Type*</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={accountType}
            onValueChange={(value) => setAccountType(value)}
            style={styles.PickerBoxInput}
          >
            <Picker.Item label="Choose account type" value="" color="#181818" />
            <Picker.Item label="Student" value="student" />
            <Picker.Item label="Instructor" value="instructor" />
            <Picker.Item label="Admin" value="admin" />
          </Picker>
        </View>
        {errors.accountType && (
          <Text style={styles.errorText}>{errors.accountType}</Text>
        )}

        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 1, y: 0 }}
          colors={['#EB7B38', '#E26662', '#E15890']}
          style={styles.createAccountButton}
        >
          <TouchableOpacity
            style={styles.buttonContainer}
            onPress={handleSubmit}
          >
            <Text style={styles.buttonText}>Create Account</Text>
          </TouchableOpacity>
        </LinearGradient>
      </ScrollView>
    </SafeAreaView>
  );
};

export default UserDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
  },
  uploadText: {
    color: '#757575',
    fontSize: 14,
  },
  label: {
    color: '#757575',
    fontSize: 16,
    alignSelf: 'flex-start',
    marginLeft: 25,
    marginBottom: 8,
    fontWeight: '900',
  },
  inputBox: {
    height: 50,
    backgroundColor: '#FFFFFF',
    borderColor: '#34CC99',
    borderRadius: 10,
    borderWidth: 1,
    marginBottom: 5,
    paddingHorizontal: 15,
    width: '90%',
    color: '#181818',
  },
  pickerContainer: {
    width: '90%',
    borderWidth: 1,
    borderColor: '#34CC99',
    borderRadius: 10,
    overflow: 'hidden',
    marginBottom: 5,
  },
  PickerBoxInput: {
    height: 50,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingHorizontal: 15,
    width: '100%',
    color: '#181818',
  },
  createAccountButton: {
    width: '90%',
    borderRadius: 50,
    paddingVertical: 15,
    alignItems: 'center',
    marginTop: 20,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '900',
  },
  errorText: {
    alignSelf: 'flex-start',
    marginLeft: 25,
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
});
