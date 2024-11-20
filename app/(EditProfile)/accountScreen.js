import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { Header } from '../(tabs)/header';
import { Footer } from '../(tabs)/footer';
import updateEmailProxy from '../../BackendProxy/userProxy/updateEmailProxy';
import updateUsernameProxy from '../../BackendProxy/userProxy/updateUsernameProxy';
import updatePasswordProxy from '../../BackendProxy/userProxy/updatePasswordProxy';
import Icon from 'react-native-vector-icons/MaterialIcons'; // Add this for icons
import { useRouter } from 'expo-router';

const AccountScreen = () => {
  const router = useRouter();

  const navigateToScreen = (screenName) => {
    router.push(screenName); // Pushes to the specified route
  };
  const authUser = useSelector((state) => state.user);

  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
    profileImage: 'https://via.placeholder.com/100',
    phoneNumber: '',
    country: '',
    province: '',
    city: '',
  });

  const [isEditing, setIsEditing] = useState(false);
  const [tempUserInfo, setTempUserInfo] = useState({ ...userInfo });
  const [passwords, setPasswords] = useState({
    currentPassword: '',
    newPassword: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (authUser) {
      setUserInfo({
        username: authUser.username,
        email: authUser.email,
        profileImage:
          authUser.profileImage || 'https://via.placeholder.com/100',
        phoneNumber: authUser.phoneNumber || '479-663-3560',
        country: authUser.country || 'Canada',
        province: authUser.province || 'Ontario',
        city: authUser.city || 'Toronto',
      });
      setTempUserInfo({ ...authUser });
    }
  }, [authUser]);

  const handleSave = async () => {
    console.log('Save button clicked'); // Debugging line

    if (!tempUserInfo.username || !tempUserInfo.email) {
      Alert.alert('Error', 'All fields are required.');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(tempUserInfo.email)) {
      Alert.alert('Error', 'Invalid email format.');
      return;
    }

    if (passwords.newPassword && !passwords.currentPassword) {
      Alert.alert('Error', 'Current password is required to change password.');
      return;
    }

    try {
      console.log('Updating user info...');

      if (tempUserInfo.email !== userInfo.email) {
        await updateEmailProxy(authUser._id, tempUserInfo.email);
        console.log('Email updated');
      }

      if (tempUserInfo.username !== userInfo.username) {
        await updateUsernameProxy(authUser._id, tempUserInfo.username);
        console.log('Username updated');
      }

      if (passwords.newPassword) {
        await updatePasswordProxy(
          authUser._id,
          passwords.currentPassword,
          passwords.newPassword
        );
        console.log('Password updated');
        Alert.alert('Success', 'Password updated successfully!');
      }

      setUserInfo({ ...tempUserInfo });
      setPasswords({ currentPassword: '', newPassword: '' });
      setIsEditing(false);

      // Success Alert for profile update
      Alert.alert('Success', 'Profile updated successfully!');
    } catch (error) {
      console.error(error);
      Alert.alert('Error', error.message || 'Failed to update profile.');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          {/* Profile Section */}
          <View style={styles.profileSection}>
            <Image
              source={require('../../assets/images/MainLogo.png')}
              style={styles.profileImage}
            />
            {isEditing ? (
              <TextInput
                style={styles.nameInput}
                value={tempUserInfo.username}
                onChangeText={(text) =>
                  setTempUserInfo({ ...tempUserInfo, username: text })
                }
                placeholder="Enter your name"
              />
            ) : (
              <Text style={styles.name}>{userInfo.username}</Text>
            )}
            <Text style={styles.role}>Student/Learner</Text>
          </View>

          {/* Personal Information Section */}
          <View style={styles.personalInfoSection}>
            <View style={styles.headerRow}>
              <Text style={styles.sectionTitle}>Personal Information</Text>
              <TouchableOpacity
                onPress={() => (isEditing ? handleSave() : setIsEditing(true))}
              >
                <Text style={styles.editIcon}>
                  {isEditing ? '✔ Save' : '✎ Edit'}
                </Text>
              </TouchableOpacity>
            </View>

            {/* Information Fields */}
            {[
              { label: 'Email Address', key: 'email' },
              { label: 'Phone Number', key: 'phoneNumber' },
              { label: 'Country', key: 'country' },
              { label: 'Province', key: 'province' },
              { label: 'City', key: 'city' },
            ].map((field) => (
              <View key={field.key} style={styles.inputRow}>
                <Text style={styles.inputLabel}>{field.label}:</Text>
                {isEditing ? (
                  <TextInput
                    style={styles.textInput}
                    value={tempUserInfo[field.key]}
                    onChangeText={(text) =>
                      setTempUserInfo({ ...tempUserInfo, [field.key]: text })
                    }
                    placeholder={`Enter your ${field.label.toLowerCase()}`}
                  />
                ) : (
                  <Text style={styles.inputValue}>{userInfo[field.key]}</Text>
                )}
              </View>
            ))}

            {/* Password Field */}
            <View style={styles.inputRow}>
              <Text style={styles.inputLabel}>Password:</Text>
              <View style={styles.passwordContainer}>
                <Text style={styles.inputValue}>
                  {showPassword ? passwords.newPassword || '' : '******'}
                </Text>
                {isEditing && (
                  <TouchableOpacity
                    onPress={() => setShowPassword(!showPassword)}
                  >
                    <Text style={styles.toggleIcon}>
                      {showPassword ? '🙈' : '👁️'}
                    </Text>
                  </TouchableOpacity>
                )}
              </View>
            </View>

            {/* Editable Password Fields */}
            {isEditing && (
              <>
                <View style={styles.inputRow}>
                  <Text style={styles.inputLabel}>Current Password:</Text>
                  <TextInput
                    style={styles.textInput}
                    secureTextEntry
                    value={passwords.currentPassword}
                    onChangeText={(text) =>
                      setPasswords({ ...passwords, currentPassword: text })
                    }
                    placeholder="Enter current password"
                  />
                </View>
                <View style={styles.inputRow}>
                  <Text style={styles.inputLabel}>New Password:</Text>
                  <TextInput
                    style={styles.textInput}
                    secureTextEntry
                    value={passwords.newPassword}
                    onChangeText={(text) =>
                      setPasswords({ ...passwords, newPassword: text })
                    }
                    placeholder="Enter new password"
                  />
                </View>
              </>
            )}
          </View>
          {/* Privacy & Security and Help Buttons */}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.button}
              onPress={() => navigateToScreen('profilesecurity')}
            >
              <Icon name="security" size={24} color="#ffffff" />
              <Text style={styles.buttonText}>Privacy & Security</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.button}
              onPress={() => navigateToScreen('profilehelp')}
            >
              <Icon name="help-outline" size={24} color="#ffffff" />
              <Text style={styles.buttonText}>Help</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: { flex: 1, backgroundColor: '#FFFFFF' },
  scrollView: { flex: 1, backgroundColor: '#FFFFFF' },
  container: { padding: 20, backgroundColor: '#f5f5f5' },
  profileSection: { alignItems: 'center', marginBottom: 20 },
  profileImage: { width: 100, height: 100, borderRadius: 50 },
  name: { fontSize: 22, fontWeight: 'bold', marginVertical: 5 },
  nameInput: {
    fontSize: 22,
    fontWeight: 'bold',
    borderBottomWidth: 1,
    width: '80%',
  },
  role: { fontSize: 16, color: 'gray' },
  personalInfoSection: {
    backgroundColor: '#fff',
    padding: 15,
    borderRadius: 10,
    marginBottom: 20,
  },
  headerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10,
  },
  sectionTitle: { fontSize: 18, fontWeight: 'bold' },
  editIcon: { fontSize: 18, color: '#007bff' },
  inputRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  inputLabel: { fontWeight: 'bold', color: 'gray', flex: 1 },
  inputValue: { flex: 2, fontSize: 16 },
  textInput: {
    flex: 2,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    fontSize: 16,
    padding: 5,
  },
  passwordContainer: {
    flex: 2,
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleIcon: { marginLeft: 10, color: '#007bff', fontSize: 18 },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#007BFF',
    padding: 10,
    borderRadius: 5,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    marginLeft: 10,
  },
});

export default AccountScreen;
