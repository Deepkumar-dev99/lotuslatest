import React, { useState, useRef, useEffect } from 'react';
import { 
  View, 
  Text, 
  Image, 
  ScrollView, 
  TouchableOpacity, 
  SafeAreaView,
  StyleSheet,
  Dimensions,
  FlatList,
  TextInput 
} from 'react-native';
import { Footer } from '../(tabs)/footer';
import { Header } from '../(tabs)/header';
import { useSelector } from "react-redux";
import getEnrolledCourses from "../../BackendProxy/courseProxy/getEnrolledCourses";


const { width } = Dimensions.get('window');

// SearchBar Component
// const SearchBar = ({ onSearch }) => (
//   <View style={styles.searchContainer}>
//     <View style={styles.searchBar}>
//       <Search size={20} color="#34CC99" style={styles.searchIcon} />
//       <TextInput
//         style={styles.searchInput}
//         placeholder="Search courses..."
//         placeholderTextColor="#666"
//         onChangeText={onSearch}
//       />
      
//     </View>
//   </View>
// );

  // const SearchBar = ({ onSearch }) => (
  //   <View style={styles.searchContainer}>
  //     <View style={styles.searchBar}>
  //       {/* Left Search Icon */}
  //       <Search size={20} color="#34CC99" style={styles.searchIcon} />
  
  //       {/* Search Input Field */}
  //       <TextInput
  //         style={styles.searchInput}
  //         placeholder="Search"
  //         placeholderTextColor="#666"
  //         onChangeText={onSearch}
  //       />
  
  //       {/* Right Search Button */}
  //       <View style={styles.searchButton}>
  //         <Text style={styles.searchButtonText}>Search</Text>
  //       </View>
  //     </View>
  //   </View>
  // );
  
// Carousel Component
const Carousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const flatListRef = useRef(null);

  const carouselData = [
    { id: '1', image: require('../../assets/images/Mridul.png') },
    { id: '2', image: require('../../assets/images/Mridul.png') },
    { id: '3', image: require('../../assets/images/Mridul.png') },
    { id: '4', image: require('../../assets/images/Mridul.png') },
  ];

  const renderCarouselItem = ({ item }) => (
    <Image
      source={item.image}
      style={styles.carouselImage}
    />
  );

  const onScroll = (event) => {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / width);
    setActiveIndex(index);
  };

  const renderDotIndicator = () => {
    return (
      <View style={styles.dotsContainer}>
        {carouselData.map((_, index) => (
          <View
            key={index}
            style={[
              styles.dot,
              { backgroundColor: index === activeIndex ? '#E75480' : '#D3D3D3' }
            ]}
          />
        ))}
      </View>
    );
  };

  return (
    <View style={styles.carouselContainer}>
      <FlatList
        ref={flatListRef}
        data={carouselData}
        renderItem={renderCarouselItem}
        horizontal
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        onScroll={onScroll}
        scrollEventThrottle={16}
      />
      {renderDotIndicator()}
    </View>
  );
};

// Course Card Component
const CourseCard = ({ course }) => (
  <TouchableOpacity style={styles.courseCard}>
    <View style={styles.courseInfo}>
      <Text style={styles.courseTitle} numberOfLines={2}>{course.title}</Text>
      <Text style={styles.courseSubtitle} numberOfLines={1}>{course.subject}</Text>
      
    <Image 
      // source={{ uri: course.image || "https://i.imgur.com/1tMFzp8.png" }}
      source={require('../../assets/images/Maths.jpg')} 
      style={styles.courseImage}
    />
    
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueButtonText}>CONTINUE LESSON</Text>
      </TouchableOpacity>
    </View>
  </TouchableOpacity>
);

// Main App Component
const Home = () => {
  const authUser = useSelector((state) => state.user);
  const [courses, setCourses] = useState([]);
  const [filteredCourses, setFilteredCourses] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);

  useEffect(() => {
    fetchEnrolledCourses();
  }, []);

  const fetchEnrolledCourses = async () => {
    try {
      const res = await getEnrolledCourses(authUser._id);
      console.log('Fetched Enrollments: ', res);
      const coursesData = res.res;
      setCourses(coursesData);
      setFilteredCourses(coursesData);
    } catch (error) {
      console.error("Error fetching courses:", error);
      setErrorMessage("Failed to load courses");
    }
  };

  const handleSearch = (text) => {
    const filtered = courses.filter(course => 
      course.title.toLowerCase().includes(text.toLowerCase()) ||
      course.subject.toLowerCase().includes(text.toLowerCase())
    );
    setFilteredCourses(filtered);
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header/>
      {/* <SearchBar onSearch={handleSearch} /> */}
      <Carousel />

      <ScrollView style={styles.content}>
        {errorMessage ? (
          <Text style={styles.errorText}>{errorMessage}</Text>
        ) : (
          <>
            <View style={styles.welcomeContainer}>
              <Text style={styles.welcomeText}>Welcome Back,</Text>
              <Text style={styles.userName}>
                {authUser?.firstName} {authUser?.lastName}
              </Text>
            </View>

            <View style={styles.courseSection}>
              <Text style={styles.sectionTitle}>Discover Our Course Offerings</Text>
              {filteredCourses.length > 0 ? (
                <View style={styles.coursesGrid}>
                  {filteredCourses.map((course) => (
                    <View key={course._id} style={styles.courseCardWrapper}>
                      <CourseCard course={course} />
                    </View>
                  ))}
                </View>
              ) : (
                <Text style={styles.loadingText}>No courses found</Text>
              )}
            </View>
          </>
        )}
      </ScrollView>

      <Footer/>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
  },
  errorText: {
    color: 'red',
    textAlign: 'center',
    padding: 20,
    fontSize: 16,
  },
 

  carouselContainer: {
    height: 200,
    position: 'relative',
  },
  carouselImage: {
    width: width,
    height: 200,
    resizeMode: 'cover',
  },
  dotsContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 10,
    width: '100%',
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 4,
  },
  welcomeContainer: {
    padding: 20,
    alignItems: 'center'
  },
  welcomeText: {
    fontSize: 24,
    color: '#666',
  },
  userName: {
    fontSize: 32,
    color: '#E75480',
    fontWeight: 'bold',
  },
  courseSection: {
    padding: 16
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#333',
  },
  coursesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    padding: 8,
  },
  courseCardWrapper: {
    width: '48%',
    marginBottom: 16,
   
  },
  courseCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderColor:"#34CC99",
    borderBottomWidth:1,
    borderLeftWidth:1,
    borderRightWidth:1,
    borderStyle : "solid",
    bordertopWidth:1,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
    marginTop:50,
    //  backgroundColor : "red"
  },
  courseImage: {
    width: '100%',
    height: 120,
    borderTopLeftRadius: 12,
    
    borderTopRightRadius: 12,
  },
  courseInfo: {
    padding: 1,
    borderColor:"#34CC99",
    borderBottomWidth:1,
    bordertopWidth:1,
    borderRadius: 12,
    bordertopWidth:1,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 2,
    marginTop : 2

    // height: 20,
  },
  courseSubtitle: {
    fontSize: 12,
    color: '#666',
    marginBottom: 8,
  },
  progressContainer: {
    height: 4,
    backgroundColor: '#eee',
    borderRadius: 2,
    marginBottom: 12,
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#E75480',
    borderRadius: 2,
  },
  continueButton: {
    backgroundColor: '#E75480',
    padding: 8,
    borderRadius: 4,
    alignItems: 'right',
  },
  continueButtonText: {
    color: '#ffffff',
    fontSize: 8,
    fontWeight: 'bold',
    alignItems:'right',
  },
  loadingText: {
    textAlign: 'center',
    padding: 20,
    color: '#666',
  },
});

export default Home;