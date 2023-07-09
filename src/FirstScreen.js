import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';

import images from "./assets/images"

const data = require('./content.json');


const FirstScreen = ({ navigation }) => {

  const pressOnItem = (item) => {
    navigation.navigate('Detail', { item });
  };

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  // const data = [
  //     { id: '1', title: 'Song 1', artist: 'Artist 1', image: require('./assets/cover/1.jpg'),  },
  //     { id: '2', title: 'Song 2', artist: 'Artist 2', image: require('./assets/cover/2.jpg'),  },
  //     { id: '3', title: 'Song 3', artist: 'Artist 3', image: require('./assets/cover/3.jpg'),  },
  //     { id: '4', title: 'Song 4', artist: 'Artist 4', image: require('./assets/cover/4.jpg'),  },
  //     { id: '5', title: 'Song 5', artist: 'Artist 5', image: require('./assets/cover/5.jpg'),  },
  //     { id: '6', title: 'Song 6', artist: 'Artist 6', image: require('./assets/cover/6.jpg'),  },
  //     { id: '7', title: 'Song 7', artist: 'Artist 7', image: require('./assets/cover/7.jpg'),  },
  //     { id: '8', title: 'Song 8', artist: 'Artist 8', image: require('./assets/cover/8.jpg'),  },
  //     { id: '9', title: 'Song 9', artist: 'Artist 9', image: require('./assets/cover/9.jpg'),  },
  //     { id: '10', title: 'Song 10', artist: 'Artist 10', image: require('./assets/cover/10.jpg'),  },
  //     // { id: '1', title: 'Song1', image: require('./assets/cover/11.jpg'),  },
  //   ];


  const renderItem = ({ item }) => (
    <TouchableOpacity
      style={styles.listItemContainer}
      onPress={() => pressOnItem(item)}
    >
      <View style={styles.idContainer}>
        <Text style={styles.soundID}>{item.id}</Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={images[item.image]} style={styles.image} />
      </View>
      <View>
        <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">
          {item.title}
        </Text>
        <Text style={styles.artist} numberOfLines={1} ellipsizeMode="tail">
          {item.artist}
        </Text>
      </View>
      <Text style={styles.heartLike}>♡</Text>
    </TouchableOpacity>
  );


  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 16 }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#000000' : '#ffffff'}
      />
      <View style={styles.container}>
        <View style={styles.creditContainer}>
          <Text style={styles.creditText}>◯ 500</Text>
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.headline}>Top 100</Text>
        </View>
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          contentContainerStyle={styles.listContainer}
        />
      </View><View style={styles.navigationContainer}></View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  headerContainer: {
    // backgroundColor: '#f0f0f0',
    justifyContent: 'flex-start',
    paddingVertical: 12,
    marginTop: 8,
  },
  headline: {
    fontSize: 32,
    fontWeight: '700',
  },
  listContainer: {
    borderRadius: 10,
    overflow: 'hidden',
    marginTop: 8,
  },
  listItemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0', // Hintergrundfarbe der Einträge
    padding: 10,
    paddingLeft: 0,
    marginBottom: 1,
  },
  imageContainer: {
    width: 50,
    height: 50,
    marginLeft: 10,
    marginRight: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
  },
  image: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: '600',
  },
  artist: {
    fontSize: 14,
    fontWeight: '400',
    marginTop: 4,
  },
  soundID: {
    fontSize: 10,
    fontWeight: '600',
    color: '#000000',
  },
  idContainer: {
    backgroundColor: '#f0f0f0',
    padding: 8,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
    shadowColor: '#000',
    shadowOpacity: 0.5,
    shadowOffset: {
      width: 2,
      height: 2,
    },
    shadowRadius: 4,
    elevation: 4,
  },
  heartLike: {
    fontSize: 25,
    fontWeight: '600',
    marginLeft: 'auto',
    marginRight: 5,
  },
  navigationContainer: {
    // backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 24,
  },
  creditContainer: {
    position: 'absolute',
    top: 0,
    right: 16,
    backgroundColor: 'red',
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 8,
    marginTop: StatusBar.currentHeight,
  },
  creditText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '700',
  },
});


export default FirstScreen;

