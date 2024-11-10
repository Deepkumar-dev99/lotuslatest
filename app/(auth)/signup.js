import React, { useState } from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Alert,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Link } from 'expo-router';
import { LinearGradient } from 'expo-linear-gradient';
import { useNavigation } from '@react-navigation/native';
import { useGlobalContext } from '../../context/GlobalProvider';

const SignUpScreen = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const { setEmail, setPass } = useGlobalContext();

  const [errors, setErrors] = useState({});
  const navigation = useNavigation();

  const handleInputChange = (field, value) => {
    setForm((prevForm) => ({ ...prevForm, [field]: value }));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!form.email) newErrors.email = 'Email is required';
    if (!form.password) newErrors.password = 'Password is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignUp = async () => {
    if (!validateForm()) return;

    setEmail(form?.email);
    setPass(form?.password);

    return navigation.navigate("userdetails")
  };

  return (
    <LinearGradient
      colors={['#CA6955', '#CA6955', '#D26187']}
      style={styles.container}
    >
      <SafeAreaView style={styles.safeArea}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.signUpContainer}>
            <Image
              source={require('../../assets/images/MainLogo.png')}
              resizeMode="stretch"
              style={styles.mainLogo}
            />

            <Text style={styles.labelText}>Email</Text>
            <TextInput
              style={[styles.inputBox, errors.email && styles.inputError]}
              placeholder="Enter your email"
              placeholderTextColor="#757575"
              value={form.email}
              onChangeText={(value) => handleInputChange('email', value)}
            />
            {errors.email && (
              <Text style={styles.errorText}>{errors.email}</Text>
            )}

            <Text style={styles.labelText}>Password</Text>
            <TextInput
              style={[styles.inputBox, errors.password && styles.inputError]}
              placeholder="Enter your password"
              placeholderTextColor="#757575"
              secureTextEntry
              value={form.password}
              onChangeText={(value) => handleInputChange('password', value)}
            />
            {errors.password && (
              <Text style={styles.errorText}>{errors.password}</Text>
            )}

            <TouchableOpacity
              style={styles.signUpButton}
              onPress={handleSignUp}
            >
              <Text style={styles.signUpText}>Sign Up</Text>
            </TouchableOpacity>

            {/* Social Login Buttons */}
            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require('../../assets/images/google.png')}
                resizeMode="stretch"
                style={styles.socialIcon}
              />
              <Text style={styles.socialText}>Sign up with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require('../../assets/images/facebook.png')}
                resizeMode="stretch"
                style={styles.socialIcon}
              />
              <Text style={styles.socialText}>Sign up with Facebook</Text>
            </TouchableOpacity>

            <Text style={styles.loginPrompt}>Already have an account?</Text>
            <Link href="/signin" style={styles.loginLink}>
              LogIn
            </Link>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  safeArea: {
    flex: 1,
  },
  scrollView: {
    alignItems: 'center',
    paddingVertical: 16,
  },
  signUpContainer: {
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 30,
    width: '90%',
    alignItems: 'center',
  },
  mainLogo: {
    width: '80%',
    height: 120,
    marginBottom: 40,
    objectFit: 'contain',
  },
  labelText: {
    color: '#757575',
    fontSize: 16,
    alignSelf: 'flex-start',
    marginBottom: 8,
    marginLeft: 5,
  },
  inputBox: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFFFFF',
    borderColor: '#34CC99',
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 15,
    marginBottom: 20,
    color: '#181818',
  },
  inputError: {
    borderColor: 'red',
  },
  signUpButton: {
    backgroundColor: '#34CC99',
    borderRadius: 58,
    paddingVertical: 14,
    width: '100%',
    alignItems: 'center',
    marginBottom: 20,
  },
  signUpText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    paddingVertical: 12,
    paddingHorizontal: 20,
    width: '100%',
    marginBottom: 15,
    borderColor: '#34CC99',
    borderWidth: 1,
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  socialText: {
    fontSize: 16,
    color: '#34CC99',
  },
  loginPrompt: {
    color: '#757575',
    marginTop: 20,
  },
  loginLink: {
    color: '#34CC99',
    fontWeight: 'bold',
    fontSize: 16,
  },
  errorText: {
    color: 'red',
    alignSelf: 'flex-start',
    marginLeft: 5,
    marginBottom: 10,
  },
});
