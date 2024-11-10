
// import React,{useEffect, useState} from "react";
// import { View, ScrollView, Text, Image, TextInput, TouchableOpacity, StyleSheet, Alert, Button } from "react-native";
// import { SafeAreaView } from "react-native-safe-area-context";
// import { Link } from "expo-router";
// import {LinearGradient} from 'expo-linear-gradient'; // Import LinearGradient
// import { useGlobalContext } from '../../context/GlobalProvider';
// import { useNavigation } from '@react-navigation/native';
// import Config from 'react-native-config';
// import { router } from 'expo-router';

// import * as AuthSession from 'expo-auth-session';

// import * as WebBrowser from 'expo-web-browser';

// import { useAuthRequest, makeRedirectUri } from 'expo-auth-session';

// const CLIENT_ID = "753284500623-m3r3eq90q8jha72001v0874jvieeeiqf.apps.googleusercontent.com";
// const REDIRECT_URI = "https://auth.expo.io/@mridul51/lotus";

// import Constants from 'expo-constants';


// WebBrowser.maybeCompleteAuthSession();

// const Login = () => {
//   const { email: globalEmail, pass: globalPass, setIsLogged, setLoading } = useGlobalContext();
//   const navigation = useNavigation(); // Initialize navigation
//   const [loginData, setLoginData] = useState({
//     email: globalEmail,
//     password: globalPass,
//   });
//   const [userInfo, setUserInfo] = useState(null);
//   const [errors, setErrors] = useState({});


//   const handleChange = (name, value) => {
//     setLoginData((prev) => ({ ...prev, [name]: value }));
//     setErrors((prev) => ({ ...prev, [name]: '' })); // Clear error when input changes
//   };

//   const handleLoginSubmit = async () => {
//     try {

//       setLoading(true);

//       const headersList = {
//         Accept: '*/*',
//         'User-Agent': 'Thunder Client (https://www.thunderclient.com)',
//         'Content-Type': 'application/json',
//       };

//       const gqlBody = {
//         query: `
//           query Login($email: String!, $password: String!) {
//             login(email: $email, password: $password) {
//               userId
//               token
//               tokenExpiration
//             }
//           }
//         `,
//         variables: {
//           email: loginData.email,
//           password: loginData.password,
//         },
//       };

//       const bodyContent = JSON.stringify(gqlBody);
//       // const apiUrl = process.env.REACT_APP_API_BASE_URL;
//       const API_URL = 'https://7ae1-142-126-97-217.ngrok-free.app/graphql';


//       const response = await fetch(`${API_URL}`, {
//         method: 'POST',
//         body: bodyContent,
//         headers: headersList,
//       });
//       const data = await response.json();

//       if (response.ok) {
//         setLoading(false)
//         setIsLogged(true);
       
//         Alert.alert('Success', 'Login successful!');
//         console.log('Response Data:', data);
//         return router.replace("/b2");
//         // Handle successful login (e.g., store token, navigate)
//       } else {
//         setLoading(false)
//         setIsLogged(false);
//         throw new Error(data.errors[0]?.message || 'Something went wrong');
       
//       }
//     } catch (error) {
//       setLoading(false)
//         setIsLogged(false);
//       Alert.alert('Error', error.message);
//       console.log('Error:', error);
//     }
//   };

//   const fetchUserInfo = async (accessToken) => {
//     try {
//       const res = await fetch('https://www.googleapis.com/oauth2/v2/userinfo', {
//         headers: { Authorization: `Bearer ${accessToken}` },
//       });
//       const user = await res.json();
//       setUserInfo(user);
//     } catch (error) {
//       console.error("Error fetching user info:", error);
//     }
//   };
  

//   const discovery = {
//     authorizationEndpoint: 'https://accounts.google.com/o/oauth2/v2/auth',
//     tokenEndpoint: 'https://oauth2.googleapis.com/token',
//     revocationEndpoint: 'https://oauth2.googleapis.com/revoke',
//   };

  
//   const [request, response, promptAsync] = useAuthRequest(
//     {
//       clientId: CLIENT_ID,
//       redirectUri: makeRedirectUri({ scheme: 'lotus' }),
//       scopes: ['profile', 'email'],
//       codeChallengeMethod: '',
//       responseType: 'token',
//     },
//     discovery
//   );


//   useEffect(() => {
//     if (response?.type === 'success') {
//       const { access_token } = response.params;
//       fetchUserInfo(access_token);
//     }
//   }, [response]);


  

//   return (
//     <LinearGradient // Use LinearGradient for the background
//       colors={['#CA6955', '#CA6955', '#D26187']} // Set your gradient colors here
//       style={styles.container}
//     >
//       <SafeAreaView style={styles.container}>
//         <ScrollView contentContainerStyle={styles.scrollView}>
//           {/* Top Row with Status Bar Icons */}
//           {/* <View style={styles.row}>
//           <Text style={styles.statusText}>9:41</Text>
//           <Image source={require("../../assets/images/facebook.png")} resizeMode="stretch" style={styles.icon} />
//           <Image source={require("../../assets/images/facebook.png")} resizeMode="stretch" style={styles.icon} />
//           <Image source={require("../../assets/images/facebook.png")} resizeMode="stretch" style={styles.iconLarge} />
//         </View> */}

//           {/* Main Sign-Up Content */}
//           <View style={styles.signUpContainer}>
//             {/* <Image source={require("../../assets/images/facebook.png")} resizeMode="stretch" style={styles.profileIcon} /> */}
//             <Image
//               source={require('../../assets/images/MainLogo.png')}
//               resizeMode="stretch"
//               style={styles.mainLogo}
//             />

//             <Text style={styles.labelText}>Email or Username</Text>
//             <TextInput
//               style={styles.inputBox}
//               placeholder="Enter your email or username"
//               placeholderTextColor="#757575"
//               value={loginData.email}
//               onChangeText={(text) => handleChange('email', text)}
//             />

//             <Text style={styles.labelText}>Password</Text>
//             <TextInput
//               style={styles.inputBox}
//               placeholder="Enter your password"
//               placeholderTextColor="#757575"
//               secureTextEntry
//               value={loginData.password}
//               onChangeText={(text) => handleChange('password', text)}
//             />

//             <TouchableOpacity
//               style={styles.signUpButton}
//               onPress={handleLoginSubmit}
//             >
//               <Text style={styles.signUpText}>Sign In</Text>
//             </TouchableOpacity>

//             <View style={styles.orContainer}>
//               <View style={styles.divider} />
//               <Text style={styles.orText}>OR</Text>
//               <View style={styles.divider} />
//             </View>

//             {/* Social Login Buttons */}
//             <TouchableOpacity style={styles.socialButton}>
//               <Image
//                 source={require('../../assets/images/google.png')}
//                 resizeMode="stretch"
//                 style={styles.socialIcon}
//               />
//               <Text style={styles.socialText}>Sign In with Google</Text>
//             </TouchableOpacity>

//             <TouchableOpacity style={styles.socialButton}>
//               <Image
//                 source={require('../../assets/images/facebook.png')}
//                 resizeMode="stretch"
//                 style={styles.socialIcon}
//               />
//               <Text style={styles.socialText}>Sign In with Facebook</Text>
//             </TouchableOpacity>

//             <Text style={styles.loginPrompt}>Don&apos;t Have an account?</Text>
//             <Link href="/signup" style={styles.loginLink}>
//               Sign Up
//             </Link>



//             <View>
//       {userInfo ? (
//         <Text>Welcome, {userInfo.name}</Text>
//       ) : (
//         <Button title="Sign in with Google" onPress={() => promptAsync()} />
//       )}
//     </View>
//           </View>
//         </ScrollView>
//       </SafeAreaView>
//     </LinearGradient>
//   );
// };


// export default Login;


// const styles = StyleSheet.create({
//     container: {
//       flex: 1,
//     },
//     safeArea: {
//       flex: 1,
//     },
//     scrollView: {
//       alignItems: "center",
//       paddingVertical: 16,
//     },
//     signUpContainer: {
//       backgroundColor: "#FFFFFF",
//       borderRadius: 12,
//       paddingHorizontal: 20,
//       paddingVertical: 30,
//       width: '90%',
//       alignItems: "center",
//     },
//     mainLogo: {
//       width: "80%",       // Scales with screen width
//       height: 120,        // Fixed height for consistent appearance
//       marginBottom: 40,   // Space below the logo
//       objectFit : "contain"
//     },
//     labelText: {
//       color: "#757575",
//       fontSize: 16,
//       alignSelf: "flex-start",
//       marginBottom: 8,
//       marginLeft: 5,
//     },
//     inputBox: {
//       width: "100%",
//       height: 50,
//       backgroundColor: "#FFFFFF",
//       borderColor: "#34CC99",
//       borderRadius: 10,
//       borderWidth: 1,
//       paddingHorizontal: 15,
//       marginBottom: 20,
//       color: "#181818",
//     },
//     signUpButton: {
//       backgroundColor: "#34CC99",
//       borderRadius: 58,
//       paddingVertical: 14,
//       width: "100%",
//       alignItems: "center",
//       marginBottom: 20,
//     },
//     signUpText: {
//       color: "#FFFFFF",
//       fontSize: 18,
//       fontWeight: "bold",
//     },
//     orContainer: {
//       flexDirection: "row",
//       alignItems: "center",
//       marginVertical: 20,
//     },
//     divider: {
//       flex: 1,
//       height: 1,
//       backgroundColor: "#34CC99",
//     },
//     orText: {
//       marginHorizontal: 10,
//       color: "#34CC99",
//       fontSize: 16,
//     },
//     socialButton: {
//       flexDirection: "row",
//       alignItems: "center",
//       backgroundColor: "#FFFFFF",
//       borderColor: "#B3B3B3",
//       borderRadius: 58,
//       borderWidth: 1,
//       paddingVertical: 13,
//       paddingHorizontal: 20,
//       marginBottom: 15,
//       width: "100%",
//       justifyContent: "center",
//     },
//     socialIcon: {
//       width: 20,
//       height: 20,
//       marginRight: 10,
//     },
//     socialText: {
//       color: "#757575",
//       fontSize: 16,
//     },
//     loginPrompt: {
//       color: "#757575",
//       fontSize: 14,
//       marginTop: 20,
//       textAlign: "center",
//     },
//     loginLink: {
//       color: "#34CC99",
//       fontWeight: "bold",
//     },
//   });
  

import React, { useEffect, useState } from "react";
import { View, ScrollView, Text, Image, TextInput, TouchableOpacity, StyleSheet, Alert } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { Link } from "expo-router";
import { LinearGradient } from 'expo-linear-gradient';
import { useGlobalContext } from '../../context/GlobalProvider';
import { router } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import * as Google from 'expo-auth-session/providers/google';

const CLIENT_ID = "753284500623-m3r3eq90q8jha72001v0874jvieeeiqf.apps.googleusercontent.com";

WebBrowser.maybeCompleteAuthSession();

const Login = () => {
  const { email: globalEmail, pass: globalPass, setIsLogged, setLoading } = useGlobalContext();

  const [loginData, setLoginData] = useState({
    email: globalEmail,
    password: globalPass,
  });
  
  const [userInfo, setUserInfo] = useState(null);
  const [errors, setErrors] = useState({});

  // Updated Google OAuth configuration
  const [request, response, promptAsync] = Google.useAuthRequest({
    clientId: CLIENT_ID,
    iosClientId: CLIENT_ID,
    androidClientId: CLIENT_ID,
    scopes: ['profile', 'email']
  });

  useEffect(() => {
    handleGoogleSignInResponse();
  }, [response]);

  const handleGoogleSignInResponse = async () => {
    if (response?.type === 'success') {
      try {
        const { access_token } = response.params;
        const userInfoResponse = await fetch('https://www.googleapis.com/userinfo/v2/me', {
          headers: { Authorization: `Bearer ${access_token}` }
        });
        const user = await userInfoResponse.json();
        setUserInfo(user);
        setIsLogged(true);
        router.replace("/b2");
      } catch (error) {
        console.error('Error fetching user info:', error);
        Alert.alert('Error', 'Failed to get user information');
      }
    }
  };

  const handleChange = (name, value) => {
    setLoginData((prev) => ({ ...prev, [name]: value }));
    setErrors((prev) => ({ ...prev, [name]: '' }));
  };

  const handleLoginSubmit = async () => {
    try {
      setLoading(true);
      const API_URL = 'https://f5cc-142-126-97-217.ngrok-free.app/user/login-user';

      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Accept': '*/*',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: loginData.email,
          password: loginData.password 
        }),
      });

      const data = await response.json();

      if (response.ok && !data.errors) {
        setLoading(false);
        setIsLogged(true);
        Alert.alert('Success', 'Login successful!');
        return router.replace("/b2");
      } else {
        throw new Error(data.errors?.[0]?.message || 'Login failed');
      }
    } catch (error) {
      setLoading(false);
      setIsLogged(false);
      Alert.alert('Error', error.message);
      console.error('Login error:', error);
    }
  };

  return (
    <LinearGradient
      colors={['#CA6955', '#CA6955', '#D26187']}
      style={styles.container}
    >
      <SafeAreaView style={styles.container}>
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.signUpContainer}>
            <Image
              source={require('../../assets/images/MainLogo.png')}
              resizeMode="contain"
              style={styles.mainLogo}
            />

            <Text style={styles.labelText}>Email or Username</Text>
            <TextInput
              style={styles.inputBox}
              placeholder="Enter your email or username"
              placeholderTextColor="#757575"
              value={loginData.email}
              onChangeText={(text) => handleChange('email', text)}
            />

            <Text style={styles.labelText}>Password</Text>
            <TextInput
              style={styles.inputBox}
              placeholder="Enter your password"
              placeholderTextColor="#757575"
              secureTextEntry
              value={loginData.password}
              onChangeText={(text) => handleChange('password', text)}
            />

            <TouchableOpacity
              style={styles.signUpButton}
              onPress={handleLoginSubmit}
            >
              <Text style={styles.signUpText}>Sign In</Text>
            </TouchableOpacity>

            <View style={styles.orContainer}>
              <View style={styles.divider} />
              <Text style={styles.orText}>OR</Text>
              <View style={styles.divider} />
            </View>

            <TouchableOpacity 
              style={styles.socialButton}
              onPress={() => promptAsync()}
            >
              <Image
                source={require('../../assets/images/google.png')}
                resizeMode="contain"
                style={styles.socialIcon}
              />
              <Text style={styles.socialText}>Sign In with Google</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.socialButton}>
              <Image
                source={require('../../assets/images/facebook.png')}
                resizeMode="contain"
                style={styles.socialIcon}
              />
              <Text style={styles.socialText}>Sign In with Facebook</Text>
            </TouchableOpacity>

            <Text style={styles.loginPrompt}>Don&apos;t Have an account?</Text>
            <Link href="/signup" style={styles.loginLink}>
              Sign Up
            </Link>
          </View>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    alignItems: "center",
    paddingVertical: 16,
    width: '100%',
  },
  signUpContainer: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingHorizontal: 20,
    paddingVertical: 30,
    width: '90%',
    alignItems: "center",
    marginVertical: 20,
  },
  mainLogo: {
    width: "80%",
    height: 120,
    marginBottom: 40,
  },
  labelText: {
    color: "#757575",
    fontSize: 16,
    alignSelf: "flex-start",
    marginBottom: 8,
    marginLeft: 5,
  },
  inputBox: {
    width: "100%",
    height: 50,
    backgroundColor: "#FFFFFF",
    borderColor: "#34CC99",
    borderRadius: 10,
    borderWidth: 1,
    paddingHorizontal: 15,
    marginBottom: 20,
    color: "#181818",
  },
  signUpButton: {
    backgroundColor: "#34CC99",
    borderRadius: 58,
    paddingVertical: 14,
    width: "100%",
    alignItems: "center",
    marginBottom: 20,
  },
  signUpText: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "bold",
  },
  orContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 20,
    width: "100%",
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: "#34CC99",
  },
  orText: {
    marginHorizontal: 10,
    color: "#34CC99",
    fontSize: 16,
  },
  socialButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFFFFF",
    borderColor: "#B3B3B3",
    borderRadius: 58,
    borderWidth: 1,
    paddingVertical: 13,
    paddingHorizontal: 20,
    marginBottom: 15,
    width: "100%",
    justifyContent: "center",
  },
  socialIcon: {
    width: 20,
    height: 20,
    marginRight: 10,
  },
  socialText: {
    color: "#757575",
    fontSize: 16,
  },
  loginPrompt: {
    color: "#757575",
    fontSize: 14,
    marginTop: 20,
    textAlign: "center",
  },
  loginLink: {
    color: "#34CC99",
    fontWeight: "bold",
  },
});

export default Login;