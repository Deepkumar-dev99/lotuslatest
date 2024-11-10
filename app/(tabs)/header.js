import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

export const Header = () => {
  return (
    <LinearGradient
      start={{ x: 1, y: 0 }} // Start from the right
      end={{ x: 0, y: 0 }} // End at the left
      colors={['#CA6955', '#CF7067', '#D26187']}
      style={styles.headerContainer}
    >
      <View style={styles.logoContainer}>
        <Image
          source={require('../../assets/images/Mainwhitelogo.png')}
          resizeMode="stretch"
          style={styles.image}
        />
        <Text style={styles.text}>{'Lotus Learning'}</Text>
      </View>

      <View style={styles.iconContainer}>
        <Icon
          name="notifications-outline"
          size={24}
          color="white"
          style={styles.icon}
        />
        <Icon name="menu" size={24} color="white" style={styles.icon} />
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between', // Space between logo and icons
    paddingVertical: 16, // Adjust padding for top and bottom
    paddingHorizontal: 20, // Adjust padding for left and right
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center', // Vertically center logo and text
  },
  image: {
    width: 39,
    height: 27,
    marginRight: 10, // Spacing between logo and text
  },
  text: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500', // Slightly bolder text
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 20, // Space between the two icons
  },
});
