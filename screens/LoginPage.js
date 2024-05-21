import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

// CUSTOM COMPONENTS //
import CustomButton from "../components/CustomButton";
import InputField from "../components/InputField";

// IMAGES //
const CIRCLES = require("../assets/images/Top-Circles.png");
const PETS = require("../assets/images/Pets.png");

export default function LoginPage({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.circleContainer}>
        <Image source={CIRCLES} />
      </View>
      <View style={styles.petContainer}>
        <Image source={PETS} style={styles.petImage} />
      </View>
      <View style={styles.mainContainer}>
        <Text style={styles.loginText}>Login</Text>
        <KeyboardAvoidingView behavior="padding">
          <InputField
            label="Email"
            style={styles.input}
            icon={<MaterialIcons name="alternate-email" size={15} />}
          />
          <InputField
            label="Password"
            style={styles.input}
            inputType={"password"}
            icon={<MaterialIcons name="lock" size={15} />}
          />
        </KeyboardAvoidingView>
        <View style={{ alignItems: "center", marginTop: 30 }}>
          <CustomButton label={"Login"} />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 100
          }}
        >
          <Text>New to the app?</Text>
          <TouchableOpacity onPress={() => navigation.navigate("Register")}>
            <Text style={{ color: "#149AA2", fontWeight: "700" }}>
              {" "}
              Register
            </Text>
          </TouchableOpacity>
        </View>
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
    flex: 0.12,
  },
  petContainer: {
    flex: 0.55,
  },
  mainContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  loginText: {
    color: "#3F3D56",
    fontWeight: "900",
    fontSize: 32,
    marginBottom: 30,
  },
});
