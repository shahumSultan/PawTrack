import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// IMAGES //
const CIRCLES = require("../assets/images/Top-Circles.png");
const PETS = require("../assets/images/Pets.png");


export default function LandingPage() {
    return (
        <View style={styles.container}>
        <Image source={CIRCLES} />
            <Text style={{ fontWeight: '900', fontSize: '32', alignItems: 'center', alignSelf: 'center'}}>PawTrack</Text>
            <View>
                <Image source={PETS} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
});
