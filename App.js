// import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar, Image } from 'react-native';
import pic_video from './assets/pictures/cleats-on-soccer-ball.jpg';

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <Text>Open up App.js to start working on your app!</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item',
  },
];

const testData = [
  {
    subtitle: "Replay Match du 19/09/22 à 14h",
    team1: {
      picture: "",
      name: "CAP D'AIL"
    },
    team2: {
      picture: "",
      name: "ANTIBES"
    },
    sport: "FOOTBALL",
    type: "REPLAY",
  }
];

const Item = ({ title }) => (
  <View style={styles.item}>
    <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Item title={item.title} />
  );

  return (
    <View style={styles.home}>
      <SafeAreaView style={styles.container}>
        <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
      </SafeAreaView>
      <View style={styles.test}>
        <Text>Test</Text>
        <Image
          style={styles.tinyLogo}
          source={pic_video}
        />
      </View>
    </View>

  );
}

const styles = StyleSheet.create({
  home: {
    backgroundColor: "#1A234D",
    flex: 1,
    paddingTop: StatusBar.currentHeight,
  },
  tinyLogo: {
    width: 400,
    height: 250,
  },
  container: {
    flex: 1,
    paddingTop: StatusBar.currentHeight,
    marginHorizontal: 16,
  },
  item: {
    // backgroundColor: "#f9c2ff",
    padding: 20,
    marginVertical: 8
  },
  header: {
    fontSize: 32,
    backgroundColor: "#fff"
  },
  title: {
    fontSize: 24
  },
  test: {
    flex: 1,
    flexDirection: "column",
    alignContent: "center",
    width: "100%"
  }
});


export default App;