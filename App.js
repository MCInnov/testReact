import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';

// Images
import pic_video from './assets/pictures/cleats-on-soccer-ball.jpg';
import pic_team1 from './assets/pictures/capdail.webp';
import pic_team2 from './assets/pictures/as fontonne foot.png';
import pic_start from './assets/jouer.png';

const testData = [
  {
    data: {
      subtitle: "Replay Match du 19/09/22 à 14h",
      team1: {
        picture: pic_team1,
        name: "CAP D'AIL"
      },
      team2: {
        picture: pic_team2,
        name: "ANTIBES"
      },
      sport: "FOOTBALL",
      type: "REPLAY",
    },
    test: "Test",
    id: 0
  },
  {
    data: {
      subtitle: "Replay Match du 19/09/22 à 14h",
      team1: {
        picture: pic_team1,
        name: "CAP D'AIL"
      },
      team2: {
        picture: pic_team2,
        name: "ANTIBES"
      },
      sport: "FOOTBALL",
      type: "REPLAY",
    },
    test: "Test",
    id: 1
  },
  {
    data: {
      subtitle: "Replay Match du 19/09/22 à 14h",
      team1: {
        picture: pic_team1,
        name: "CAP D'AIL"
      },
      team2: {
        picture: pic_team2,
        name: "ANTIBES"
      },
      sport: "FOOTBALL",
      type: "REPLAY",
    },
    test: "Test",
    id: 2
  },
];

const App = () => {
  const renderMatch = ({ item }) => (
    <View style={styles.match}>
      <View style={styles.headerView}>
        <Image source={item.data.team1.picture} style={styles.headerPic}></Image>
        <Text style={styles.textTeam}>{item.data.team1.name}</Text>
        <Text style={styles.textVS}>VS</Text>
        <Text style={styles.textTeam}>{item.data.team2.name}</Text>
        <Image source={item.data.team2.picture} style={styles.headerPic}></Image>
      </View>
      <View style={styles.playerView}>
        <Text style={styles.sport}>{item.data.sport}</Text>
        <Text style={styles.type}>{item.data.type}</Text>
        <Image
          style={[styles.player, styles.shadowProp]}
          source={pic_video}
        />
        <Image
          style={styles.startPlayer}
          source={pic_start}
        />
      </View>
      <Text style={styles.subtitle}>{item.data.subtitle}</Text>
    </View>
  );

  return (
    <View style={styles.home}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={testData}
          renderItem={renderMatch}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>

    </View >

  );
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: "#1A234D",
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  match: {
    flex: 2,
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    marginTop: 15,
    marginBottom: 15,
  },
  player: {
    borderRadius: "11px",
    width: 350,
    height: 225,
  },

  headerView: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    alignContent: "space-around",
    height: 200,
    marginBottom: 10
  },
  headerPic: {
    width: 50,
    height: 50,
    marginLeft: 10,
    marginRight: 10
  },
  textTeam: {
    marginLeft: 10,
    marginRight: 10,
    color: "#FFF",
    fontWeight: 600,
  },
  textVS: {
    marginLeft: 5,
    marginRight: 5,
    fontSize: 20,
    fontWeight: 600,
    color: "#FE0152",
  },
  subtitle: {
    color: "#ADB4DC",
    marginTop: 15
  },
  sport: {
    top: 5,
    left: 5,
    zIndex: 100,
    position: "absolute",
    backgroundColor: "linear-gradient(202deg, rgba(255, 255, 255, 0.5) 0 %, rgba(216, 216, 216, 0.5) 76.82 %)",
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: "11px",
    borderColor: "#FFF",
    borderWidth: 1,
    color: "#FFF"
  },
  type: {
    position: "absolute",
    top: 35,
    left: -10,
    zIndex: 100,
    backgroundColor: "#FE0152",
    paddingTop: 3,
    paddingBottom: 3,
    paddingLeft: 5,
    paddingRight: 5,
    borderRadius: "11px",
    color: "#FFF"
  },
  shadowProp: {
    shadowColor: '#171717',
    shadowOffset: { width: -2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  startPlayer: {
    zIndex: 100,
    position: "absolute",
    top: 75,
    left: 150,
    width: 50,
    height: 50,
  },

});


export default App;