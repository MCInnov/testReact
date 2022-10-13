import { View, StyleSheet, Image, Text } from 'react-native';
import pic_title from '../assets/pictures/FairVision.png';

const Header = () => {

    const clickEvent = () => {
        console.log("Test du bouton !");
    };

    return (
        <View style={styles.header}>
            <View>
                <Image style={styles.headerHome} source={pic_title}></Image>
            </View>
            <View style={styles.btnsHeaderView}>
                <Text style={[styles.btnHeader, styles.shadowProp]}>LIVES</Text>
                <Text style={[styles.btnHeader, styles.shadowProp]}>REPLAYS</Text>
                <Text style={[styles.btnHeader, styles.shadowProp]}>RESUME</Text>
                <Text style={[styles.btnHeader, styles.shadowProp]}>SPORT</Text>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    headerHome: {
        width: 230,
        height: 50,
    },
    btnHeader: {
        color: "#7B89D0",
        paddingLeft: 10,
        paddingRight: 10,
        paddingBottom: 8,
        paddingTop: 8
    },
    shadowProp: {
        shadowColor: '#7B89D0',
        shadowOffset: { width: 2, height: -4 },
        shadowOpacity: 0.2,
        shadowRadius: 2,
    },
    header: {
        zIndex: 1000,
        flex: 1,
        alignItems: "center",
        flexDirection: "column",
        // height: 100,
    },
    btnsHeaderView: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "space-around",
        alignItems: "center",
    },
});

export default Header;