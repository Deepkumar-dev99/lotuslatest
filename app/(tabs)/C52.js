import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Image,
  SafeAreaView,
} from 'react-native';
import { Header } from './header';
import { Footer } from './footer';

const C52Screen = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <Header />

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        {/* Categories */}
        <View style={styles.categoriesContainer}>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Read</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Watch</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.categoryButton}>
            <Text style={styles.categoryText}>Listen</Text>
          </TouchableOpacity>
        </View>

        {/* Left-Aligned Progress Bar */}
        <View style={styles.progressContainer}>
          <View style={styles.activeProgress}></View>
          <View style={styles.inactiveProgress}></View>
          <View style={styles.inactiveProgress}></View>
          <View style={styles.inactiveProgress}></View>
        </View>

        {/* Main Content */}
        <View style={styles.mainContent}>
          {/* Lesson Image with Play Button */}
          <View style={styles.lessonImageContainer}>
            <Image
              source={{ uri: 'https://i.imgur.com/1tMFzp8.png' }}
              style={styles.lessonImage}
            />
            <TouchableOpacity style={styles.playButton}>
              <Text style={styles.playButtonText}>▶</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.lessonTitle}>TITLE OF LESSON</Text>
          <Text style={styles.lessonDescription}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore.
          </Text>

          {/* Lesson List */}
          <View style={styles.lessonList}>
            {[
              { title: 'Lesson 2', time: '1 Hour, 10 min' },
              { title: 'Lesson 3', time: '1 Hour, 10 min' },
            ].map((lesson, index) => (
              <TouchableOpacity key={index} style={styles.lessonItem}>
                <Image
                  source={{ uri: 'https://i.imgur.com/1tMFzp8.png' }}
                  style={styles.lessonThumbnail}
                />
                <View style={styles.lessonTextContainer}>
                  <Text style={styles.lessonItemTitle}>{lesson.title}</Text>
                  <Text style={styles.lessonItemTime}>{lesson.time}</Text>
                </View>
              </TouchableOpacity>
            ))}
          </View>

          {/* Next Button */}
          <TouchableOpacity style={styles.nextButton}>
            <Text style={styles.nextButtonText}>NEXT</Text>
          </TouchableOpacity>
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
  categoriesContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingLeft: 16, // Align categories to the left
  },
  categoryButton: {
    padding: 10,
    marginHorizontal: 5,
    borderColor: '#20b19b',
    borderWidth: 1,
    borderRadius: 20,
  },
  categoryText: {
    color: '#20b19b',
    fontWeight: '600',
  },
  progressContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    paddingLeft: 16, // Align progress bar to the left
  },
  activeProgress: {
    width: 40,
    height: 5,
    backgroundColor: '#20b19b',
    marginHorizontal: 2,
    borderRadius: 5,
  },
  inactiveProgress: {
    width: 40,
    height: 5,
    backgroundColor: '#ddd',
    marginHorizontal: 2,
    borderRadius: 5,
  },
  contentContainer: {
    paddingBottom: 80,
  },
  mainContent: {
    paddingHorizontal: 16,
    paddingVertical: 10,
  },
  lessonImageContainer: {
    position: 'relative',
    alignItems: 'center',
  },
  lessonImage: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
  playButton: {
    position: 'absolute',
    top: '40%',
    left: '45%',
    backgroundColor: '#20b19b',
    borderRadius: 30,
    padding: 10,
  },
  playButtonText: {
    color: '#FFFFFF',
    fontSize: 24,
  },
  lessonTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#20b19b',
    marginVertical: 10,
  },
  lessonDescription: {
    fontSize: 14,
    color: '#666',
  },
  lessonList: {
    marginVertical: 10,
  },
  lessonItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#e0f7f4',
    borderRadius: 5,
    padding: 10,
    marginVertical: 5,
  },
  lessonThumbnail: {
    width: 50,
    height: 50,
    borderRadius: 5,
    marginRight: 10,
  },
  lessonTextContainer: {
    flex: 1,
  },
  lessonItemTitle: {
    color: '#20b19b',
    fontWeight: '600',
  },
  lessonItemTime: {
    color: '#666',
    fontSize: 12,
  },
  nextButton: {
    backgroundColor: '#20b19b',
    borderRadius: 5,
    alignItems: 'center',
    padding: 15,
    marginVertical: 20,
  },
  nextButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default C52Screen;
