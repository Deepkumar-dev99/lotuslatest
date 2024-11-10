import React from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,  
  TouchableOpacity,
  TextInput,
} from 'react-native';
import { Header } from './header';
import { Footer } from './footer';
import { LinearGradient } from 'expo-linear-gradient';
import { faBold } from '@fortawesome/free-solid-svg-icons';
import { Ionicons } from '@expo/vector-icons';
export default (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollView}>
        <View style={styles.header}>
          <Image
            source={require('../../assets/images/photo.png')}
            style={styles.headerImage}
            resizeMode="cover"
          />
          <Image
            source={require('../../assets/images/Mridul.png')}
            style={styles.profileImage}
          />
          <View style={styles.courseDetails}>
            <Text style={styles.courseTitle}>Title of Course</Text>
            <Text style={styles.courseDescription}>Description of Course</Text>
          </View>
        </View>
        {/* Course Description */}
        <View style={styles.descriptionContainer}>
          <Text style={styles.courseLongDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
            dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
          </Text>
        </View>
        {/* Course Modules */}
        <TouchableOpacity style={styles.moduleContainer}>
          <View style={styles.module}>
            <Image source={require('../../assets/images/course1.png')} style={styles.courseImage} />
            <View style={styles.column}>
              <Text style={styles.moduleTitle}>01. Introduction</Text>
              <Text style={styles.moduleTime}>1 Hour, 10 min</Text>
            </View>
            <Ionicons  size={25} color="#F2F2F2" style={styles.lock} />
          </View>
        </TouchableOpacity>


        <View style={[styles.moduleContainer, styles.locked]}>
          <View style={styles.module}>
            <Image source={require('../../assets/images/course1.png')} style={styles.courseImage} />
            <View style={styles.column}>
              <Text style={styles.moduleTitle}>02. Lorem Ipsum</Text>
              <Text style={styles.moduleTime}>1 Hour, 10 min</Text>
            </View>
            <Ionicons name="lock-closed" size={25} color="#F2F2F2" style={styles.lock} />
          </View>
        </View>

        <View style={[styles.moduleContainer, styles.locked]}>
          <View style={styles.module}>
            <Image source={require('../../assets/images/course1.png')} style={styles.courseImage} />
            <View style={styles.column}>
              <Text style={styles.moduleTitle}>03. Lorem Ipsum</Text>
              <Text style={styles.moduleTime}>1 Hour, 10 min</Text>
            </View>
            <Ionicons name="lock-closed" size={25} color="#F2F2F2" style={styles.lock} />
          </View>
        </View>

        <View style={[styles.moduleContainer, styles.locked]}>
          <View style={styles.module}>
            <Image source={require('../../assets/images/course1.png')} style={styles.courseImage} />
            <View style={styles.column}>
              <Text style={styles.moduleTitle}>04. Lorem Ipsum</Text>
              <Text style={styles.moduleTime}>1 Hour, 10 min</Text>
            </View>
            <Ionicons name="lock-closed" size={25} color="#F2F2F2" style={styles.lock} />
          </View>
        </View>
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    position: 'relative',
    width: '100%',
    height: 200,
  },
  headerImage: {
    width: '100%',
    height: '100%',
  },
  courseDetails: {
    position: 'absolute',
    bottom: -50,
    left: 20,
  },
  courseTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  courseDescription: {
    fontSize: 14,
    color: '#666',
  },
  profileImage: {
    position: 'absolute',
    right: 20,
    bottom: -35,
    width: 70,
    height: 70,
    borderWidth: 2,
    borderColor: '#fff',
  },
  
  descriptionContainer: {
    padding: 20,
  },
  courseLongDescription: {
    fontSize: 14,
    color: '#333',
    marginTop:50,
    marginBottom: 20,
  },
  moduleContainer: {
    marginHorizontal: 20,
    marginBottom: 10,
    backgroundColor: '#82c91e',
    borderRadius: 5,
    height:50,
  },
  locked: {
    backgroundColor: '#d3d3d3',
  },
  module: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  moduleTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  courseImage:{
    width: 60,
    height: 50,
    borderRadius:5,
  },
  moduleTime: {
    fontSize: 12,
    color: '#fff',
  },
  column: {
    width: 150,
    textAlign: 'left',
  },
  lock:{
    alignContent:'center',
  },
 

});
