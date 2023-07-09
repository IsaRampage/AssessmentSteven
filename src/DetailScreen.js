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
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const data = require('./content.json');

const DetailScreen = ({ navigation, route }) => {
  const { item } = route.params;

  const pressGoBack = () => {
    navigation.goBack();
  };

  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

   const renderItem = ({ item }) => (
        <View style={styles.listItemContainer}>
        <View style={styles.idContainer}>
          <Text style={styles.soundID}>{item.id}</Text>
        </View>
        <View style={styles.imageContainer}>
          <Image source={{ uri: item.image }} style={styles.image} />
        </View>
        <View>
          <Text style={styles.title} numberOfLines={1} ellipsizeMode="tail">{item.title}</Text>
          <Text style={styles.artist} numberOfLines={1} ellipsizeMode="tail">{item.artist}</Text>
        </View>
        <Text style={styles.heartLike}>♡</Text>
      </View>
    );

  return (
    <SafeAreaView style={{ flex: 1, paddingHorizontal: 16 }}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={isDarkMode ? '#000000' : '#ffffff'}
      />
      <View style={styles.container}>
      <TouchableOpacity onPress={pressGoBack} style={styles.backButton}>
      </TouchableOpacity>
        <View style={styles.creditContainer}>
          <Text style={styles.creditText}>◯ 500</Text>
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.headline}>{item => item.title}</Text>
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
    backButton: {
      alignSelf: 'flex-start',
      paddingVertical: 8,
      paddingHorizontal: 12,
      backgroundColor: '#f0f0f0',
      borderRadius: 5,
      marginBottom: 16,
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

export default DetailScreen;