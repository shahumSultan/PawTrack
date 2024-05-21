import { StyleSheet, Text, View, Image } from "react-native";

// CUSTOM COMPONENTS //
import CustomButton from "../components/CustomButton";

// IMAGES //
const CIRCLES = require("../assets/images/Top-Circles.png");
const PETS = require("../assets/images/Pets.png");

export default function LandingPage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <Image source={CIRCLES} />
      </View>
      <View style={styles.headingContainer}>
        <Text style={styles.mainHeading}>Paw Track</Text>
        <Image source={PETS} style={styles.petImage} />
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.mainHeading}>Never Loose your pet</Text>
        <Text style={styles.subHeading}>
          Keep Your Furry Friend Close: Never Lose Your Pet with Our App!
        </Text>
        <CustomButton label={"Get Started"} onPress={() => navigation.navigate('Login')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: "#fff",
  },
  circleContainer: {
    flex: 0.43,
  },
  headingContainer: {
    flex: 1,
  },
  mainHeading: {
    alignSelf: "center",
    color: "#3F3D56",
    fontWeight: "900",
    fontSize: 32,
  },
  subHeading: {
    textAlign: 'center',
    fontSize: 18,
    marginBottom: 80,
  },
  petImage: {
    alignSelf: "center",
  },
  button: {
    marginTop: 90,
  },
});
