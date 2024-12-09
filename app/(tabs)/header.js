import React, { useState } from 'react';
import {
  View,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  Modal,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';
import { useRouter } from 'expo-router';

export const Header = () => {
  const [menuVisible, setMenuVisible] = useState(false); // State for controlling the menu
  const router = useRouter();

  const navigateToScreen = (screenName) => {
    setMenuVisible(false); // Close the menu
    router.push(screenName);
  };

  const handleLogout = () => {
    setMenuVisible(false); // Close the menu
    // Add logout logic here, e.g., clear user data from Redux or AsyncStorage
    console.log('User logged out');
    router.replace('/login'); // Redirect to the login screen
  };

  return (
    <LinearGradient
      start={{ x: 1, y: 0 }}
      end={{ x: 0, y: 0 }}
      colors={['#CA6955', '#CF7067', '#D26187']}
      style={styles.headerContainer}
    >
      {/* Logo */}
      <TouchableOpacity
        style={styles.logoContainer}
        onPress={() => navigateToScreen('/Home')}
      >
        <Image
          source={require('../../assets/images/Mainwhitelogo.png')}
          resizeMode="stretch"
          style={styles.image}
        />
        <Text style={styles.text}>Lotus Learning</Text>
      </TouchableOpacity>

      {/* Icons */}
      <View style={styles.iconContainer}>
        <TouchableOpacity
          style={styles.icon}
          onPress={() => navigateToScreen('/notification')}
        >
          <Icon
            name="notifications-outline"
            size={24}
            color="white"
            style={styles.icon}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => setMenuVisible(true)} // Open the menu
        >
          <Icon name="menu" size={24} color="white" style={styles.icon} />
        </TouchableOpacity>
      </View>

      {/* Hamburger Menu */}
      <Modal
        visible={menuVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setMenuVisible(false)} // Close menu on back press
      >
        <View style={styles.menuOverlay}>
          <View style={styles.menuContainer}>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => navigateToScreen('/accountScreen')}
            >
              <Text style={styles.menuText}>Profile</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuItem}
              onPress={() => navigateToScreen('/profileHome')}
            >
              <Text style={styles.menuText}>Settings</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.menuItem} onPress={handleLogout}>
              <Text style={[styles.menuText, styles.logoutText]}>Logout</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={styles.menuClose}
              onPress={() => setMenuVisible(false)}
            >
              <Text style={styles.closeText}>Close</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 16,
    paddingHorizontal: 20,
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 39,
    height: 27,
    marginRight: 10,
  },
  text: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '500',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginLeft: 20,
  },
  menuOverlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    justifyContent: 'flex-end',
  },
  menuContainer: {
    backgroundColor: 'white',
    padding: 20,
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  menuItem: {
    paddingVertical: 15,
  },
  menuText: {
    fontSize: 18,
    color: '#333',
  },
  logoutText: {
    color: '#E75480',
    fontWeight: 'bold',
  },
  menuClose: {
    marginTop: 20,
    alignSelf: 'center',
  },
  closeText: {
    fontSize: 16,
    color: '#888',
  },
});
