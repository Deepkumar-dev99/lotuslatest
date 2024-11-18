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
import styles from './gameListStyles';
import { Header } from '../(tabs)/header';
import { Footer } from '../(tabs)/footer';
const GameList= () => {
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
                source={require('../../assets/images/game.jpeg')}
                resizeMode={'stretch'}
                style={styles.image6}
              />
            </View>
            <View style={styles.column3}>
              <Image
                source={require('../../assets/images/game.jpeg')}
                resizeMode={'stretch'}
                style={styles.box4}
              />
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
                <Image
                  source={require('../../assets/images/game.jpeg')}
                  resizeMode={'stretch'}
                  style={styles.box4}
                />
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
                source={require('../../assets/images/game.jpeg')}
                resizeMode={'stretch'}
                style={styles.recentImage}
              />
            </View>
            <View style={styles.gameCard}>
              <View style={styles.cardRow}>
                <Image
                  source={require('../../assets/images/game.jpeg')}
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
                  source={require('../../assets/images/game.jpeg')}
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
export default GameList;