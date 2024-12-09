import React from 'react';
import { View, ScrollView, Image, Text, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { SafeAreaView } from 'react-native-safe-area-context';
import styles from './profileLibraryStyles';

const ProfileLibrary=() => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView style={styles.scrollView}>
        <LinearGradient
          start={{ x: 0, y: 0 }}
          end={{ x: 0, y: 1 }}
          colors={['#CA6955', '#CF7067', '#D26187']}
          style={styles.headerContainer}
        >
          <Image
            source={require('../../assets/images/Mainwhitelogo.png')}
            resizeMode={'stretch'}
            style={styles.logo}
          />
          <Text style={styles.headerTitle}>{'Lotus Learning'}</Text>
          <View style={styles.flexFill}></View>
          <View style={styles.iconWrapper}>
            <Image
              source={{ uri: 'https://i.imgur.com/1tMFzp8.png' }}
              resizeMode={'stretch'}
              style={styles.iconSmall}
            />
            <Image
              source={{ uri: 'https://i.imgur.com/1tMFzp8.png' }}
              resizeMode={'stretch'}
              style={styles.iconTiny}
            />
          </View>
        </LinearGradient>

        <Text style={styles.pageTitle}>{'Library'}</Text>

        <View style={styles.categoriesContainer}>
          {['Math', 'Science', 'Coding', 'Art', 'Language'].map(
            (category, index) => (
              <View
                key={index}
                style={[
                  styles.categoryBox,
                  category === 'Math'
                    ? styles.selectedCategory
                    : styles.unselectedCategory,
                ]}
              >
                <Text
                  style={[
                    styles.categoryText,
                    category === 'Math'
                      ? styles.selectedCategoryText
                      : styles.unselectedCategoryText,
                  ]}
                >
                  {category}
                </Text>
              </View>
            )
          )}
        </View>

        {[1, 2, 3].map((_, index) => (
          <View key={index} style={styles.courseCard}>
            <Image
              source={
                course.imageUrl
                  ? { uri: course.imageUrl }
                  : {
                      uri: 'https://contenthub-static.grammarly.com/blog/wp-content/uploads/2023/07/Subject-Complement.png',
                    }
              }
              resizeMode={'stretch'}
              style={styles.courseImage}
            />
            <View style={styles.courseDetails}>
              <Text style={styles.courseTitle}>{'Title of Course Name'}</Text>
              <Text style={styles.courseCategory}>{'Art History'}</Text>
              <View style={styles.progressBadge}>
                <Text style={styles.progressText}>{'100%'}</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </SafeAreaView>
  );
};
export default ProfileLibrary;