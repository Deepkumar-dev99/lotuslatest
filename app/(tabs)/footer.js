import React from 'react';
import { View, Text, StyleSheet,TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';

export const Footer = () => {
  const router = useRouter();

   const navigateToScreen = (screenName) => {
     navigation.navigate(screenName);
   };
  return (
    <LinearGradient
      start={{ x: 1, y: 0 }} // Start from the right
      end={{ x: 0, y: 0 }} // End at the left
      colors={['#CA6955', '#CF7067', '#D26187']}
      style={styles.footerContainer}
    >
      <TouchableOpacity
        style={styles.iconWrapper}
        onPress={() => navigateToScreen('accountScreen')} // Change 'ProfileScreen' to your actual screen name
      >
        <Icon name="person-outline" size={24} color="white" />
        <Text style={styles.iconLabel}>Profile</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconWrapper}
        onPress={() => navigateToScreen('/profileCourse')} // Change 'CoursesScreen' to your actual screen name
      >
        <Icon name="book-outline" size={24} color="white" />
        <Text style={styles.iconLabel}>Open Courses</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconWrapper}
        onPress={() => navigateToScreen('/profileHome')} // Change 'AllCoursesScreen' to your actual screen name
      >
        <Icon name="tablet-portrait-outline" size={24} color="white" />
        <Text style={styles.iconLabel}>Courses</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconWrapper}
        onPress={() => navigateToScreen('/gameList')} // Change 'GamesScreen' to your actual screen name
      >
        <Icon name="game-controller-outline" size={24} color="white" />
        <Text style={styles.iconLabel}>Games</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.iconWrapper}
        onPress={() => navigateToScreen('SearchScreen')} // Change 'SearchScreen' to your actual screen name
      >
        <Icon name="search-outline" size={24} color="white" />
        <Text style={styles.iconLabel}>Search</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  footerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around', // Space out icons evenly
    paddingVertical: 8, // Adjust vertical padding
    paddingHorizontal: 15, // Adjust horizontal padding
  },
  iconWrapper: {
    alignItems: 'center',
  },
  iconLabel: {
    color: '#FFFFFF',
    fontSize: 12,
    marginTop: 4, // Space between icon and label
  },
});
