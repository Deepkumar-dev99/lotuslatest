import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  ScrollView,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Header } from './header';
import { Footer } from './footer';
export default (props) => {
  const [activeTab, setActiveTab] = useState('Saved');
  return (
    <SafeAreaView style={styles.container}>
      <Header />
      <ScrollView style={styles.scrollView}>
        <Text style={styles.text2}>{'My Games List'}</Text>
        <View style={styles.row2}>
          <TouchableOpacity onPress={() => setActiveTab('Saved')}>
            <Text
              style={[styles.text3, activeTab === 'Saved' && styles.activeTab]}
            >
              {'Saved'}
            </Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => setActiveTab('History')}>
            <Text
              style={[
                styles.text4,
                activeTab === 'History' && styles.activeTab,
              ]}
            >
              {'History'}
            </Text>
          </TouchableOpacity>
        </View>
        <View style={styles.box2}></View>
        <View style={styles.box3}></View>
        {activeTab === 'Saved' ? (
          <View>
            <View style={styles.row3}>
              <View style={styles.view}>
                <Text style={styles.text5}>{'Puzzle'}</Text>
              </View>
              <View style={styles.view2}>
                <Text style={styles.text6}>{'Cards'}</Text>
              </View>
              <View style={styles.view3}>
                <Text style={styles.text6}>{'Educational'}</Text>
              </View>
              <View style={styles.view4}>
                <Text style={styles.text6}>{'Strategy'}</Text>
              </View>
            </View>
            <View style={styles.row4}>
              <Text style={styles.text7}>{'View by Name'}</Text>
              <Image
                source={{ uri: 'https://i.imgur.com/1tMFzp8.png' }}
                resizeMode={'stretch'}
                style={styles.image6}
              />
            </View>
            <View style={styles.column3}>
              <View style={styles.box4}></View>
              <Text style={styles.text8}>{'Title of the Game'}</Text>
              <Text style={styles.text9}>{'Author Name'}</Text>
              <Text style={styles.text10}>
                {'Description of the game written here'}
              </Text>
              <View style={styles.row5}>
                <View style={styles.view5}>
                  <Text style={styles.text11}>{'Age'}</Text>
                </View>
                <View style={styles.view6}>
                  <Text style={styles.text11}>{'Subject'}</Text>
                </View>
              </View>
            </View>
            <View style={styles.column4}>
              <View style={styles.column5}>
                <View style={styles.box4}></View>
                <Text style={styles.text8}>{'Title of the Game'}</Text>
                <Text style={styles.text9}>{'Author Name'}</Text>
                <Text style={styles.text10}>
                  {'Description of the game written here'}
                </Text>
                <View style={styles.row5}>
                  <View style={styles.box5}>
                    <Text style={styles.text11}>{'Age'}</Text>
                  </View>
                  <View style={styles.view6}>
                    <Text style={styles.text11}>{'Subject'}</Text>
                  </View>
                </View>
              </View>
            </View>
          </View>
        ) : (
          <View>
            <View style={styles.recentRow}>
              <Text style={styles.recentText}>{'Recent'}</Text>
              <Image
                source={{ uri: 'https://i.imgur.com/1tMFzp8.png' }}
                resizeMode={'stretch'}
                style={styles.recentImage}
              />
            </View>
            <View style={styles.gameCard}>
              <View style={styles.cardRow}>
                <Image
                  source={{ uri: 'https://i.imgur.com/1tMFzp8.png' }}
                  resizeMode={'stretch'}
                  style={styles.cardImage}
                />
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle}>{'Title of Game'}</Text>
                  <Text style={styles.cardCreator}>{'Name of Creator'}</Text>
                  <Text style={styles.cardCompletionDate}>
                    {'Completed: Jan 00, 20XX'}
                  </Text>
                  <Text style={styles.cardDescription}>
                    {
                      'Description of game goes here... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacus massa, hendrerit nec ex nec, commodo consectetur... '
                    }
                  </Text>
                </View>
              </View>
              <View style={styles.tagsRow}>
                <View style={styles.tag}>
                  <Text style={styles.tagText}>{'Math'}</Text>
                </View>
                <View style={styles.tag2}>
                  <Text style={styles.tagText}>{'Strategy'}</Text>
                </View>
                <View style={styles.tag3}>
                  <Text style={styles.tagText}>{'Puzzle'}</Text>
                </View>
              </View>
            </View>
            <View style={styles.gameCard}>
              <View style={styles.cardRow}>
                <Image
                  source={{ uri: 'https://i.imgur.com/1tMFzp8.png' }}
                  resizeMode={'stretch'}
                  style={styles.cardImage}
                />
                <View style={styles.cardContent}>
                  <Text style={styles.cardTitle}>{'Title of Game'}</Text>
                  <Text style={styles.cardCreator}>{'Name of Creator'}</Text>
                  <Text style={styles.cardCompletionDate}>
                    {'Completed: Jan 00, 20XX'}
                  </Text>
                  <Text style={styles.cardDescription}>
                    {
                      'Description of game goes here... Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce lacus massa, hendrerit nec ex nec, commodo consectetur... '
                    }
                  </Text>
                </View>
              </View>
              <View style={styles.tagsRow}>
                <View style={styles.tag}>
                  <Text style={styles.tagText}>{'Math'}</Text>
                </View>
                <View style={styles.tag2}>
                  <Text style={styles.tagText}>{'Strategy'}</Text>
                </View>
                <View style={styles.tag3}>
                  <Text style={styles.tagText}>{'Puzzle'}</Text>
                </View>
              </View>
            </View>
          </View>
        )}
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
  box2: {
    width: 51,
    height: 2,
    backgroundColor: '#DA69AF',
    marginHorizontal: 16,
  },
  box3: {
    height: 1,
    backgroundColor: '#E2DEDE',
    marginBottom: 24,
    marginHorizontal: 16,
  },
  box4: {
    height: 122,
    backgroundColor: '#BCE0FD',
    borderColor: '#5E27FD',
    borderWidth: 1,
    marginBottom: 21,
  },
  box5: {
    width: 56,
    height: 26,
    backgroundColor: '#34CC99',
    borderRadius: 20,
    marginRight: 8,
  },
  box6: {
    height: 122,
    backgroundColor: '#BCE0FD',
    borderColor: '#5E27FD',
    borderWidth: 1,
  },
  column: {
    width: 16,
    marginRight: 24,
  },
  column2: {
    width: 16,
  },
  column3: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E2DEDE',
    borderRadius: 8,
    borderWidth: 1,
    paddingBottom: 16,
    paddingHorizontal: 8,
    marginBottom: 16,
    marginHorizontal: 15,
  },
  column4: {
    paddingHorizontal: 15,
  },
  column5: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E2DEDE',
    borderRadius: 8,
    borderWidth: 1,
    paddingBottom: 16,
    paddingHorizontal: 8,
    marginBottom: 16,
  },
  image: {
    width: 39,
    height: 27,
    marginRight: 10,
  },
  image2: {
    height: 13,
    marginBottom: 1,
  },
  image3: {
    height: 4,
    marginHorizontal: 5,
  },
  image4: {
    height: 1,
    marginBottom: 5,
  },
  image5: {
    height: 1,
  },
  image6: {
    width: 9,
    height: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 22,
    paddingHorizontal: 16,
    marginBottom: 39,
  },
  row2: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    marginHorizontal: 16,
  },
  row3: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 19,
    marginHorizontal: 15,
  },
  row4: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 19,
    marginHorizontal: 21,
  },
  row5: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  scrollView: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  text: {
    color: '#FFFFFF',
    fontSize: 18,
  },
  text2: {
    color: '#000000',
    fontSize: 24,
    marginBottom: 26,
    marginLeft: 17,
  },
  text3: {
    color: '#DA69AF',
    fontSize: 16,
    marginRight: 75,
  },
  text4: {
    color: '#707070',
    fontSize: 16,
    flex: 1,
  },
  text5: {
    color: '#28779C',
    fontSize: 14,
  },
  text6: {
    color: '#707070',
    fontSize: 14,
  },
  text7: {
    color: '#707070',
    fontSize: 12,
  },
  text8: {
    color: '#181818',
    fontSize: 16,
    marginBottom: 7,
  },
  text9: {
    color: '#181818',
    fontSize: 12,
    marginBottom: 5,
  },
  text10: {
    color: '#707070',
    fontSize: 12,
    marginBottom: 11,
  },
  text11: {
    color: '#181818',
    fontSize: 12,
  },
  view: {
    width: 64,
    alignItems: 'center',
    backgroundColor: '#E2F6FF',
    borderColor: '#E2DEDE',
    borderRadius: 8,
    borderWidth: 1,
    paddingVertical: 14,
    marginRight: 8,
  },
  view2: {
    width: 64,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#E2DEDE',
    borderRadius: 8,
    borderWidth: 1,
    paddingVertical: 14,
    marginRight: 8,
  },
  view3: {
    width: 105,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#E2DEDE',
    borderRadius: 8,
    borderWidth: 1,
    paddingVertical: 14,
    marginRight: 8,
  },
  view4: {
    width: 82,
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    borderColor: '#E2DEDE',
    borderRadius: 8,
    borderWidth: 1,
    paddingVertical: 15,
  },
  view5: {
    width: 56,
    alignItems: 'center',
    backgroundColor: '#34CC99',
    borderRadius: 20,
    paddingVertical: 8,
    marginRight: 8,
  },
  view6: {
    width: 77,
    alignItems: 'center',
    backgroundColor: '#34CC99',
    borderRadius: 20,
    paddingVertical: 7,
  },
  view7: {
    backgroundColor: '#FFFFFF',
    borderColor: '#E2DEDE',
    borderRadius: 8,
    borderWidth: 1,
  },
  mainContainer: { flex: 1, backgroundColor: '#FFFFFF' },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 22,
    paddingHorizontal: 16,
    marginBottom: 39,
  },
  scrollContainer: { flex: 1, backgroundColor: '#FFFFFF' },
  logoImage: { width: 39, height: 27, marginRight: 10 },
  titleText: { color: '#FFFFFF', fontSize: 18 },
  headerBox: { flex: 1, alignSelf: 'stretch' },
  imageColumn: { width: 16, marginRight: 24 },
  smallImage1: { height: 13, marginBottom: 1 },
  smallImage2: { height: 4, marginHorizontal: 5 },
  imageColumn2: { width: 16 },
  smallImage3: { height: 1, marginBottom: 5 },
  smallImage4: { height: 1 },
  gamesListTitle: {
    color: '#000000',
    fontSize: 24,
    marginBottom: 26,
    marginLeft: 17,
  },
  tabsRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    marginHorizontal: 16,
  },
  savedText: { color: '#707070', fontSize: 16, marginRight: 76 },
  historyText: { color: '#DA69AF', fontSize: 16, flex: 1 },
  separatorLine1: {
    width: 58,
    height: 2,
    backgroundColor: '#DA69AF',
    marginHorizontal: 138,
  },
  separatorLine2: {
    height: 1,
    backgroundColor: '#E2DEDE',
    marginBottom: 28,
    marginHorizontal: 16,
  },
  recentRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
    marginHorizontal: 21,
  },
  recentText: { color: '#707070', fontSize: 12 },
  recentImage: { width: 9, height: 4 },
  gameCard: {
    borderColor: '#E2DEDE',
    borderRadius: 12,
    borderWidth: 1,
    paddingVertical: 12,
    paddingRight: 12,
    marginBottom: 16,
    marginHorizontal: 15,
  },
  cardRow: { flexDirection: 'row', marginBottom: 10, marginLeft: 12 },
  cardImage: { borderRadius: 8, width: 106, height: 89, marginRight: 8 },
  cardContent: { flex: 1, alignSelf: 'flex-start', marginTop: 5 },
  cardTitle: { color: '#181818', fontSize: 18, marginBottom: 8 },
  cardCreator: {
    color: '#181818',
    fontSize: 14,
    marginBottom: 7,
    marginLeft: 1,
  },
  cardCompletionDate: { color: '#707070', fontSize: 12, marginBottom: 12 },
  cardDescription: { color: '#757575', fontSize: 12, width: 220 },
  tagsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: 173,
  },
  tag: {
    width: 47,
    alignItems: 'center',
    backgroundColor: '#34CC99',
    borderRadius: 20,
    paddingVertical: 4,
  },
  tag2: {
    width: 68,
    alignItems: 'center',
    backgroundColor: '#DA69AF',
    borderRadius: 20,
    paddingVertical: 4,
  },
  tag3: {
    width: 54,
    alignItems: 'center',
    backgroundColor: '#FFB334',
    borderRadius: 20,
    paddingVertical: 4,
  },
  tagText: { color: '#FFFFFF', fontSize: 10 },
});
