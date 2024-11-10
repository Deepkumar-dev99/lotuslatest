// components/AuthScreen.tsx
import React from 'react';
import { View, Text, Button } from 'react-native';
import { useAuth } from '../context/AuthContext';

const AuthScreen = () => {
  const { login } = useAuth();

  return (
    <View>
      <Text>Please Log In</Text>
      <Button title="Log In" onPress={login} />
    </View>
  );
};

export default AuthScreen;
