import React, { useState } from 'react';
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

const UserDetails = () => {
  const { email: globalEmail, pass: globalPass } = useGlobalContext();
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [userData, setUserData] = useState({
    firstName: '',
    lastName: '',
    email: globalEmail,
    password: globalPass,
    username: '',
    accountType: '',
    googleAuth: false,
    stateProvince: '',
    school: '',
  });

  const [errors, setErrors] = useState({});

  const handleChange = (name, value) => {
    setUserData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' })); // Clear error when user modifies the input
  };

  const validateInputs = () => {
    const newErrors = {};
    const phoneRegex = /^[0-9]{10}$/;

    // Added validations for missing fields
    if (!userData.firstName) {
      newErrors.firstName = 'First name is required.';
    }
    if (!userData.lastName) {
      newErrors.lastName = 'Last name is required.';
    }
    if (!userData.username) {
      newErrors.username = 'Username is required.';
    }
    if (!userData.stateProvince) {
      newErrors.stateProvince = 'State/Province is required.';
    }
    if (!userData.accountType) {
      newErrors.accountType = 'Account type is required.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = async () => {
    if (!validateInputs()) {
      return Alert.alert('Please fill all required fields.');
    }

    try {
      const headersList = {
        Accept: '*/*',
        'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
        'Content-Type': 'application/json',
      };

      const requestBody = {
        firstName: userData.firstName,
        lastName: userData.lastName,
        email: globalEmail,
        password: globalPass,
        username: userData.username,
        accountType: userData.accountType,
        googleAuth: false,
        stateProvince: userData.stateProvince,
        school: userData.school,
      };

      const bodyContent = JSON.stringify(requestBody);

      const API_URL = 'https://f5cc-142-126-97-217.ngrok-free.app/user/create-user';

      const response = await fetch(API_URL, {
        method: 'POST',
        body: bodyContent,
        headers: headersList,
      });

      const data = await response.json();
      saveUserCookies(userData);
      if (response.ok) {
        await dispatch(setUser(userData));
        Alert.alert('Success', 'Account created successfully!');
        console.log('Response Data:', data);
        navigation.navigate('verifyemail'); // Navigate to Verify Email page
      } else {
        throw new Error(data.errors?.[0]?.message || 'Something went wrong');
      }
    } catch (error) {
      Alert.alert('Error', error.message);
      console.log('Error:', error);
    }
  };

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
          value={userData.firstName}
          onChangeText={(value) => handleChange('firstName', value)}
        />
        {errors.firstName && (
          <Text style={styles.errorText}>{errors.firstName}</Text>
        )}

        <Text style={styles.label}>Last Name*</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter your last name"
          placeholderTextColor="#757575"
          value={userData.lastName}
          onChangeText={(value) => handleChange('lastName', value)}
        />
        {errors.lastName && (
          <Text style={styles.errorText}>{errors.lastName}</Text>
        )}

        <Text style={styles.label}>Username*</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter your username"
          placeholderTextColor="#757575"
          value={userData.username}
          onChangeText={(value) => handleChange('username', value)}
        />
        {errors.username && (
          <Text style={styles.errorText}>{errors.username}</Text>
        )}

        <Text style={styles.label}>State/Province*</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter your state/province"
          placeholderTextColor="#757575"
          value={userData.stateProvince}
          onChangeText={(value) => handleChange('stateProvince', value)}
        />
        {errors.stateProvince && (
          <Text style={styles.errorText}>{errors.stateProvince}</Text>
        )}

        <Text style={styles.label}>Account Type*</Text>
        <View style={styles.pickerContainer}>
          <Picker
            selectedValue={userData.accountType}
            onValueChange={(value) => handleChange('accountType', value)}
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

        <Text style={styles.label}>School (optional)</Text>
        <TextInput
          style={styles.inputBox}
          placeholder="Enter school name"
          placeholderTextColor="#757575"
          value={userData.school}
          onChangeText={(value) => handleChange('school', value)}
        />

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

// export default UserDetails;

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
    marginBottom: 5, // Changed to 5 for spacing with error message
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
    marginBottom: 5, // Changed to 5 for spacing with error message
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
