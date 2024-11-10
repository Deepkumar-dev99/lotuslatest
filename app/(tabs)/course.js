import React from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
} from 'react-native';
import { Header } from './header';
import { Footer } from './footer';
export default (props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollView}>
        <View style={styles.row2}>
          <View style={styles.column3}>
            <Text style={styles.text2}>{'John Doe'}</Text>
            <Text style={styles.text3}>{'Toronto, Ontario, Canada'}</Text>
          </View>

          <Image
            source={require('../../assets/images/Mridul.png')}
            resizeMode={'cover'}
            style={styles.profileImage}
          />

          <View style={styles.column4}>
            <Image
              source={{ uri: 'https://i.imgur.com/1tMFzp8.png' }}
              resizeMode={'stretch'}
              style={styles.image6}
            />
            <Text style={styles.text4}>{'Algebra II'}</Text>
          </View>
        </View>
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
        <View style={styles.column7}>
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
        <View style={styles.row4}>
          <View style={styles.column8}>
            <View style={styles.box4}></View>
            <Text style={styles.text9}>{'Science'}</Text>
          </View>
          <View style={styles.column9}>
            <View style={styles.box5}></View>
            <Text style={styles.text10}>{'Language'}</Text>
          </View>
          <View style={styles.column9}>
            <View style={styles.box5}></View>
            <Text style={styles.text11}>{'Math'}</Text>
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
  },
  box4: {
    height: 76,
    borderColor: '#5E27FD',
    borderWidth: 1,
    marginBottom: 15,
  },
  box5: {
    height: 76,
    backgroundColor: '#BCE0FD',
    borderColor: '#5E27FD',
    borderWidth: 1,
    marginBottom: 16,
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
    backgroundColor: '#F2F2F2',
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
});
