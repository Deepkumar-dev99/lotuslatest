import React, { useEffect, useState } from 'react';
import { View, Text, Image, StyleSheet, ScrollView, TouchableOpacity, TextInput, Alert } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useSelector } from 'react-redux';
import { Header } from '../(tabs)/header';
import { Footer } from '../(tabs)/footer';
import updateEmailProxy from '../../BackendProxy/userProxy/updateEmailProxy';
import updatePasswordProxy from '../../BackendProxy/userProxy/updatePasswordProxy';
import updateUsernameProxy from '../../BackendProxy/userProxy/updateUsernameProxy';

const AccountScreen = () => {
  const authUser = useSelector((state) => state.user); // User state from Redux
  const [userInfo, setUserInfo] = useState({
    username: '',
    email: '',
    password: '••••••••',
    profileImage: 'https://via.placeholder.com/100',
  });
  const [isEditing, setIsEditing] = useState(false);
  const [tempUserInfo, setTempUserInfo] = useState({ ...userInfo });

  useEffect(() => {
    // Assume authUser contains `_id` and basic information
    if (authUser) {
      setUserInfo({
        username: authUser.username,
        email: authUser.email,
        password: '••••••••', // Password is not fetched for security
        profileImage: authUser.profileImage || 'https://via.placeholder.com/100',
      });
      setTempUserInfo({ ...userInfo });
    }
  }, [authUser]);

  const handleSave = async () => {
    try {
      if (tempUserInfo.email !== userInfo.email) {
        await updateEmailProxy(authUser._id, tempUserInfo.email);
      }
      if (tempUserInfo.username !== userInfo.username) {
        await updateUsernameProxy(authUser._id, tempUserInfo.username);
      }
      Alert.alert('Success', 'Profile updated successfully!');
      setUserInfo(tempUserInfo);
      setIsEditing(false);
    } catch (error) {
      console.error(error);
      Alert.alert('Error', 'Failed to update profile.');
    }
  };

  return (
    <SafeAreaView style={styles.safeArea}>
      <Header />
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          {/* Profile Section */}
          <View style={styles.profileSection}>
            <Image source={{ uri: userInfo.profileImage }} style={styles.profileImage} />
            {isEditing ? (
              <TextInput
                style={styles.nameInput}
                value={tempUserInfo.username}
                onChangeText={(text) => setTempUserInfo({ ...tempUserInfo, username: text })}
              />
            ) : (
              <Text style={styles.name}>{userInfo.username}</Text>
            )}
            <Text style={styles.role}>Student/Learner</Text>
          </View>

          {/* Account Info */}
          <View style={styles.infoSection}>
            <Text style={styles.infoText}>
              <Text style={styles.label}>Email:</Text>{' '}
              {isEditing ? (
                <TextInput
                  style={styles.textInput}
                  value={tempUserInfo.email}
                  onChangeText={(text) => setTempUserInfo({ ...tempUserInfo, email: text })}
                />
              ) : (
                userInfo.email
              )}
            </Text>
            <Text style={styles.infoText}>
              <Text style={styles.label}>Password:</Text> {userInfo.password}
            </Text>
          </View>

          {/* Action Buttons */}
          <View style={styles.actionSection}>
            {isEditing ? (
              <>
                <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                  <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
                <TouchableOpacity
                  style={styles.cancelButton}
                  onPress={() => {
                    setTempUserInfo({ ...userInfo });
                    setIsEditing(false);
                  }}
                >
                  <Text style={styles.buttonText}>Cancel</Text>
                </TouchableOpacity>
              </>
            ) : (
              <TouchableOpacity style={styles.editButton} onPress={() => setIsEditing(true)}>
                <Text style={styles.buttonText}>Edit Profile</Text>
              </TouchableOpacity>
            )}
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
  container: { flex: 1, padding: 20 },
  profileSection: { alignItems: 'center', marginBottom: 20 },
  profileImage: { width: 80, height: 80, borderRadius: 40 },
  name: { fontSize: 20, fontWeight: 'bold', marginVertical: 5 },
  nameInput: { fontSize: 20, fontWeight: 'bold', marginVertical: 5, borderBottomWidth: 1 },
  role: { fontSize: 16, color: 'gray' },
  infoSection: { backgroundColor: '#fff', padding: 15, borderRadius: 10, marginBottom: 20 },
  infoText: { fontSize: 16, marginBottom: 5 },
  label: { fontWeight: 'bold' },
  textInput: { borderBottomWidth: 1, paddingVertical: 2 },
  actionSection: { alignItems: 'center', marginTop: 20 },
  editButton: { backgroundColor: '#007bff', padding: 10, borderRadius: 5 },
  saveButton: { backgroundColor: '#28a745', padding: 10, borderRadius: 5, marginBottom: 10 },
  cancelButton: { backgroundColor: '#dc3545', padding: 10, borderRadius: 5 },
  buttonText: { color: '#fff', fontWeight: 'bold' },
});

export default AccountScreen;
