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
import { Header } from '../(tabs)/header';
import { Footer } from '../(tabs)/footer';
import { LinearGradient } from 'expo-linear-gradient';
import { faBold } from '@fortawesome/free-solid-svg-icons';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from './courseGradeStyle';
import { useRouter } from 'expo-router';

export default (props) => {
  const router = useRouter();

  const navigateToScreen = (screenName) => {
    router.push(screenName); // Pushes to the specified route
  };
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollView}>
        {/* Course Intro */}
        <View style={styles.introContainer}>
          <Text style={styles.introText}>INTRODUCTION</Text>
          <Image
            source={require('../../assets/images/Mridul.png')}
            style={styles.profileImage}
          />
          <Text style={styles.courseCategory}>Course Category</Text>
          <Text style={styles.courseLesson}>Course Lesson</Text>
          {/* Progress Dots */}
          <View style={styles.progressDots}>
            <View style={styles.dot_active} />
            <View style={styles.dot} />
            <View style={styles.dot} />
            <View style={styles.dot} />
            <View style={styles.dot} />
          </View>
          {/* Badge Section */}
          <ScrollView
            horizontal
            showsHorizontalScrollIndicator={false}
            style={styles.scrollContainer}
          >
            <View style={styles.badgeSection}>
              <View style={styles.badgeBox}>
                <Icon name="shield" size={50} color="#000" />
                <Text style={styles.badgeText}>Badge Accomplishment</Text>
              </View>
              <View style={styles.badgeBox}>
                <Icon name="time-outline" size={50} color="#000" />
                <Text style={styles.badgeText}>Highest Score</Text>
              </View>
              <View style={styles.badgeBox}>
                <Text style={styles.scoreText}>9</Text>
                <Text style={styles.badgeText}>Highest Score</Text>
              </View>
              <View style={styles.badgeBox}>
                <Icon name="shield" size={50} color="#000" />
                <Text style={styles.badgeText}>Badge Accomplishment</Text>
              </View>
            </View>
          </ScrollView>
        </View>
        {/* Benefits Section */}
        <View style={styles.benefitsContainer}>
          <Text style={styles.benefitsHeader}>BENEFITS</Text>
          <View style={styles.benefitItem}>
            <Icon name="checkmark-circle" size={30} color="#34CC99" />
            <Text style={styles.benefitText}>
              Learn to express yourself clearly and concisely.
            </Text>
          </View>
          <View style={styles.benefitItem}>
            <Icon name="checkmark-circle" size={30} color="#34CC99" />
            <Text style={styles.benefitText}>
              Avoid redundancies in your writing.
            </Text>
          </View>
          <View style={styles.benefitItem}>
            <Icon name="checkmark-circle" size={30} color="#34CC99" />
            <Text style={styles.benefitText}>
              Keep your reader's attention by writing more directly.
            </Text>
          </View>
        </View>
        {/* Start Button */}
        <TouchableOpacity
          style={styles.startButton}
          onPress={() => navigateToScreen('/C51')}
        >
          <Text style={styles.startButtonText}>START</Text>
        </TouchableOpacity>
      </ScrollView>
      <Footer />
    </SafeAreaView>
  );
};
