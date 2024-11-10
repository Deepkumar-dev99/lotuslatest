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
        
        <View style={styles.container_shadow}>
        <LinearGradient
            colors={['#68D391', '#C6F6D5']} // Adjust these colors based on the gradient you need
            style={styles.gradient} >
          <View style={styles.searchcontainer}>
            <Ionicons name="search" size={25} color="#68D391" style={styles.icon} />
            <TextInput
              style={styles.searchinput}
            />
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
            <View style={styles.row4}>
              <View style={styles.column8}>
                <View style={styles.box4}></View>
                <Text style={styles.text9}>{'Science'}</Text>
              </View>
              <View style={styles.column8}>
                <View style={styles.box5}></View>
                <Text style={styles.text10}>{'Language'}</Text>
              </View>
              <View style={styles.column8}>
                <View style={styles.box5}></View>
                <Text style={styles.text11}>{'Math'}</Text>
              </View>
              <View style={styles.column8}>
                <View style={styles.box4}></View>
                <Text style={styles.text9}>{'Art'}</Text>
              </View>
            </View>  
          </ScrollView>
          <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scrollContainer}>
            <View style={styles.row4}>
              <View style={styles.column8}>
                <View style={styles.box4}></View>
                <Text style={styles.text9}>{'Art'}</Text>
              </View>
              <View style={styles.column8}>
                <View style={styles.box5}></View>
                <Text style={styles.text10}>{'History'}</Text>
              </View>
              <View style={styles.column8}>
                <View style={styles.box5}></View>
                <Text style={styles.text11}>{'Coding'}</Text>
              </View>
              <View style={styles.column8}>
                <View style={styles.box5}></View>
                <Text style={styles.text11}>{'Math'}</Text>
              </View>
            </View> 
          </ScrollView>
          </LinearGradient>
        </View>
        <View style={styles.container_cource}>
          <Text style={styles.popularCoursesTitle}>Popular Courses</Text>
          <View style={styles.column5}>
            <View style={styles.box3}></View>
            <View style={styles.row3}>
              <View style={styles.column6}>
                <Text style={styles.text5}>{'Title of Course'}</Text>
                <Text style={styles.text6}>{'Author Name'}</Text>
              </View>
              <View style={styles.view}>
                <Text style={styles.text7}>{'Subject'}</Text>
              </View>
              <View style={styles.view2}>
                <Text style={styles.text7}>{'Age Range'}</Text>
              </View>
            </View>
          </View>
          <View style={styles.column5}>
            <View style={styles.box3}></View>
            <View style={styles.row3}>
              <View style={styles.column6}>
                <Text style={styles.text8}>{'Title of Game'}</Text>
                <Text style={styles.text6}>{'Description of Game'}</Text>
              </View>
              <View style={styles.view}>
                <Text style={styles.text7}>{'Subject'}</Text>
              </View>
              <View style={styles.view2}>
                <Text style={styles.text7}>{'Age Range'}</Text>
              </View>
            </View>
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
  container_cource:{
    marginTop:16,
    marginBottom: 16,
  },
  scrollContainer: {
    flexDirection: 'row',
  },
  container_shadow:{
    borderRadius: 1, // Adjust to match the shape of your gradient box
    overflow: 'hidden', // Ensures shadow doesn't spill outside the border radius
    shadowColor: '#000', // Shadow color
    shadowOffset: { width: 0, height: 2 }, // Shadow offset
    shadowOpacity: 0.2, // Shadow opacity
    shadowRadius: 4, // Shadow blur
    elevation: 5, // Shadow for Android
  },
  gradient: {
    // Adjust height according to your layout
    width: '100%', // Takes the full width of its parent
  },
  box: {
    flex: 1,
    alignSelf: 'stretch',
  },
  box3: {
    height: 122,
    backgroundColor: '#BCE0FD',
    borderColor: '#5E27FD',
    borderWidth: 1,
    marginBottom: 16,
    marginLeft:10,
    marginRight:10,
    marginTop:10,
  },
  box4: {
    height: 76,
    borderColor: '#5E27FD',
    borderWidth: 1,
    marginBottom: 15,
    marginLeft:10,
    marginRight:10,
    marginTop:10,
  },
  box5: {
    height: 76,
    borderColor: '#5E27FD',
    borderWidth: 1,
    marginBottom: 16,
    marginLeft:10,
    marginRight:10,
    marginTop:10,
  },
  column: {
    width: 16,
    marginRight: 24,
  },
  column3: {
    width: 93,
    marginRight: 29,
  },
  column4: {
    flex: 1,
  },
  column5: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingBottom: 18,
    marginBottom: 12,
    marginHorizontal: 16,
    borderColor: '#68D391', // Border color
    borderWidth: 2, // Border width
    borderRadius: 8,
  },
  column6: {
    flex: 1,
    marginRight: 4,
  },
  column7: {
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingBottom: 19,
    marginBottom: 44,
    marginHorizontal: 16,
  },
  column8: {
    width: 114,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingBottom: 15,
    marginRight:5,
  },
  column9: {
    width: 114,
    backgroundColor: '#FFFFFF',
    borderRadius: 8,
    paddingBottom: 14,
  },
  profileImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    marginBottom: 10,
    width: 99,
    height: 99,
    borderColor: '#5E27FD',
    borderWidth: 1,
    marginRight: 30,
  },

  image6: {
    height: 40,
    marginBottom: 4,
    marginHorizontal: 8,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 22,
    paddingHorizontal: 16,
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#5E27FD',
    borderWidth: 1,
    paddingVertical: 18,
    paddingHorizontal: 23,
    marginBottom: 16,
  },
  row3: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: 8,
  },
  row4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
    marginHorizontal: 16,
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#FFFFFF ',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  text2: {
    color: '#181818',
    fontSize: 20,
    marginBottom: 5,
  },
  text3: {
    color: '#181818',
    fontSize: 10,
    width: 93,
  },
  text4: {
    color: '#181818',
    fontSize: 12,
  },
  text5: {
    color: '#272727',
    fontSize: 12,
    marginBottom: 7,
  },
  text6: {
    color: '#272727',
    fontSize: 12,
  },
  text7: {
    color: '#FFFFFF',
    fontSize: 12,
  },
  text8: {
    color: '#272727',
    fontSize: 12,
    marginBottom: 6,
  },
  text9: {
    color: '#272727',
    fontSize: 12,
    marginLeft: 34,
  },
  text10: {
    color: '#272727',
    fontSize: 12,
    marginLeft: 26,
  },
  text11: {
    color: '#272727',
    fontSize: 12,
    marginLeft: 42,
  },
  view: {
    width: 77,
    alignItems: 'center',
    backgroundColor: '#34CC99',
    borderRadius: 8,
    paddingVertical: 10,
    marginRight: 8,
  },
  view2: {
    width: 98,
    alignItems: 'center',
    backgroundColor: '#34CC99',
    borderRadius: 8,
    paddingVertical: 11,
  },
  logo: {
    width: 39,
    aspectRatio: 1.3,
  },
  titleContainer: {
    flexBasis: 'auto',
  },
  title: {
    fontFamily: 'Poppins-Medium',
    fontSize: 18,
    color: '#FFFFFF',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 19,
  },
  icon: {
    width: 27,
    aspectRatio: 1.04,
  },
  contentContainer: {
    minHeight: 50,
  },
  popularCoursesContainer: {
  },
  popularCoursesTitle: {
    color: '#282828',
    fontSize: 14,
    fontFamily: 'Calibri',
    fontWeight: 'bold', 
    textAlign: 'center',
  },
  popularCoursesImage: {
    aspectRatio: 1.1,
    marginTop: 10,
  },
  navigationBar: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingHorizontal: 30,
    paddingVertical: 14,
    marginTop: 10,
  },
  navigationItem: {
    alignItems: 'center',
  },
  navigationIcon: {
    width: 24,
    aspectRatio: 1.26,
  },
  navigationLabel: {
    fontFamily: 'Poppins-Regular',
    fontSize: 10,
    color: '#FFFFFF',
    textAlign: 'center',
    marginTop: 4,
  },
  searchcontainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#68D391',
    borderRadius: 8,
    paddingHorizontal: 24,
    paddingVertical: 14,
    marginTop: 10,
    marginBottom: 25,
    marginLeft:15,
    marginRight:15,
    borderColor: '#68D391', // Border color
    borderWidth: 2, // Border width
    borderRadius: 8,
  },
  searchicon: {
    width: 20,
    height: 20,
    marginRight: 8,
  },
  searchinput: {
    flex: 1,
    fontSize: 16,
    color: '#333',
  },
});
