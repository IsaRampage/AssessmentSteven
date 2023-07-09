import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  Image,
  useColorScheme,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  useState
} from 'react'

import {
  Colors,
} from 'react-native/Libraries/NewAppScreen';
import Icon from 'react-native-vector-icons/Feather';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

import images from "./assets/images";
import Sound from 'react-native-sound';

const data = require('./content.json');

const DetailScreen = ({ navigation, route }) => {
  const { item } = route.params;

  const pressGoBack = () => {
    navigation.goBack();
  };

  // Sound.setCategory('Playback');

  const [isPlaying, setIsPlaying] = useState(false);

  const playSound = () => {
    if (isPlaying) {
      setIsPlaying(false)
    } else {
      // Initialisiere den Sound
      const sound = new Sound(item.sound, Sound.MAIN_BUNDLE, (error) => {
        if (error) {
          console.log('Fehler beim Laden des Sounds', error);
        } else {
          // Spiele den Sound ab
          sound.play(() => {
            // Sound ist beendet
            sound.release();
            setIsPlaying(false);
          });
        }
      });


      setIsPlaying(true);
    }

  };

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#000000' : '#ffffff'}
      />
      <View style={styles.contentContainer}>
        <TouchableOpacity onPress={pressGoBack} style={styles.backButton}></TouchableOpacity>
        <View style={styles.creditContainer}>
          <Text style={styles.creditText}>◯ 500</Text>
        </View>
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{item.title}</Text>
          <Text style={styles.artist}>{item.artist}</Text>
        </View>
        <View style={styles.cardContainer}>
          <View style={styles.imageContainer}>
            <Image source={images[item.image]} style={styles.image} />
          </View>
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.playButton}
              onPress={playSound}
            >
              <Text style={styles.playButtonText}>{isPlaying ? 'Playing...' : 'Play'}</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <View style={styles.navigationContainer}>
        {/* <FontAwesome name="search" size={24} color="black" /> */}
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
  },
  backButton: {
    position: 'absolute',
    top: 16,
    left: 16,
    width: 40,
    height: 40,
    backgroundColor: '#f0f0f0',
    borderRadius: 5,
  },
  creditContainer: {
    position: 'absolute',
    top: StatusBar.currentHeight + 16,
    right: 16,
    backgroundColor: 'red',
    borderRadius: 12,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  creditText: {
    color: 'white',
    fontSize: 12,
    fontWeight: '700',
  },
  titleContainer: {
    marginTop: 8,
    marginLeft: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: '700',
  },
  artist: {
    fontSize: 16,
    fontWeight: '400',
    marginTop: 4,
  },
  cardContainer: {
    height: 500,
    marginLeft: 16,
    marginRight: 16,
    marginTop: 8,
    backgroundColor: '#ffffff',
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
  imageContainer: {
    width: 300,
    height: 300,
    marginTop: 32,
    alignSelf: 'center',
    justifyContent: 'center',
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
    width: '100%',
    height: '100%',
    borderRadius: 10,
  },
  buttonContainer: {
    alignItems: 'center',
    marginTop: 32,
  },
  playButton: {
    backgroundColor: '#f0f0f0',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  playButtonText: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
  },
  navigationContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 24,
  },
});

export default DetailScreen;