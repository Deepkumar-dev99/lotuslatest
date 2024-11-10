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
import Icon from 'react-native-vector-icons/Ionicons';
export default (props) => {
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
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
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
            <Text style={styles.benefitText}>Learn to express yourself clearly and concisely.</Text>
          </View>
          <View style={styles.benefitItem}>
            <Icon name="checkmark-circle" size={30} color="#34CC99" />
            <Text style={styles.benefitText}>Avoid redundancies in your writing.</Text>
          </View>
          <View style={styles.benefitItem}>
            <Icon name="checkmark-circle" size={30} color="#34CC99" />
            <Text style={styles.benefitText}>Keep your reader's attention by writing more directly.</Text>
          </View>
        </View>
        {/* Start Button */}
        <TouchableOpacity style={styles.startButton}>
          <Text style={styles.startButtonText}>START</Text>
        </TouchableOpacity>

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
  scrollContainer: {
    flexDirection: 'row',
  },
  introContainer: {
    backgroundColor: '#34CC99',
    alignItems: 'center',
    paddingVertical: 20,
    paddingHorizontal: 15,
    borderRadius: 10,
    margin: 10,
  },
  introText: {
    color: '#fff',
    fontSize: 14,
    fontWeight: 'bold',
  },
  profileImage: {
    width: 70,
    height: 70,
    borderRadius: 35,
    marginVertical: 10,
  },
  courseCategory: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
  },
  courseLesson: {
    fontSize: 16,
    color: '#fff',
  },
  progressDots: {
    flexDirection: 'row',
    marginVertical: 10,
  },
  dot_active: {
    width: 35,
    height: 5,
    backgroundColor: '#fff',
    marginHorizontal: 5,
    borderRadius: 10,
  },
  dot: {
    width: 50,
    height: 5,
    backgroundColor: '#DFDFDF',
    marginHorizontal: 5,
    borderRadius: 10,
  },
  badgeSection: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 15,
    marginRight:5,
  },
  badgeBox: {
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 10,
    borderRadius: 10,
    maxWidth: '30%',
    marginRight:10
  },
  badgeText: {
    fontSize: 12,
    textAlign: 'center',
  },
  scoreText: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom:15,
    marginTop:10,
  },
  benefitsContainer: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginLeft:30,
    marginRight:40,
  },
  benefitsHeader: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#34CC99',
    marginBottom: 10,
  },
  benefitItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  benefitText: {
    fontSize: 16,
    marginLeft: 5,
    color: '#808080',
  },
  startButton: {
    backgroundColor: '#34CC99',
    paddingVertical: 14,
    marginHorizontal: 20,
    borderRadius: 5,
    alignItems: 'center',
    marginTop: 10,
  },
  startButtonText: {
    color: '#fff',
    fontSize: 14,
  },

});
