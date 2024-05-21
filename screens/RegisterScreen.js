import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  KeyboardAvoidingView,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { collection } from "firebase/firestore";
import { FIRESTORE_DB, FIREBASE_AUTH } from "../FirebaseConfig";
import { useRef, useState } from "react";
import { createUserWithEmailAndPassword } from "firebase/auth";

// CUSTOM COMPONENTS //
import CustomButton from "../components/CustomButton";
import InputField from "../components/InputField";
import { set } from "firebase/database";

// IMAGES //
const CIRCLES = require("../assets/images/Top-Circles.png");
const PETS = require("../assets/images/Pets.png");

export default function RegisterScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const confirmPasswordRef = useRef(null);

  const auth = FIREBASE_AUTH;

  const signUp = async () => {
    try {
      if (password !== confirmPassword) {
        alert("Password Don't Match");
        return;
      }
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      const user = userCredential.user;
      console.log("User registered successfully:", user);
      alert("Check Your Email!!");
      navigation.navigate("Login");
    } catch (error) {
      console.log("ERROR", error);
      alert("Registration Failed", error);
    }
  };

  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <View style={{ flex: 0.12 }}>
        <Image source={CIRCLES} />
      </View>
      <View style={{ flex: 0.5, alignSelf: "center" }}>
        <Image source={PETS} />
      </View>
      <View style={{ flex: 1, paddingHorizontal: 10 }}>
        <Text style={styles.heading}>Register</Text>
        <KeyboardAvoidingView behavior="padding">
          <InputField
            label={"Email"}
            value={email}
            autoCapitalize={"none"}
            autoComplete={"email"}
            keyboardType={"email-address"}
            onChangeText={(text) => setEmail(text)}
            icon={<MaterialIcons name="alternate-email" size={15} />}
            returnKeyType="next"
            onSubmitEditing={() => passwordRef.current.focus()}
            ref={emailRef}
          />
          <InputField
            label={"Password"}
            value={password}
            onChangeText={(text) => setPassword(text)}
            icon={<MaterialIcons name="lock-outline" size={15} />}
            returnKeyType="next"
            onSubmitEditing={() => confirmPasswordRef.current.focus()}
            ref={passwordRef}
          />
          <InputField
            label={"Re-Type Password"}
            value={confirmPassword}
            onChangeText={(text) => setConfirmPassword(text)}
            icon={<MaterialIcons name="lock-outline" size={15} />}
            returnKeyType="done"
            ref={confirmPasswordRef}
          />
        </KeyboardAvoidingView>
        <View style={{ alignItems: "center", marginTop: 30 }}>
          {/* <CustomButton label={"Register"} onPress={() => signUp()} /> */}
          <CustomButton label={"Register"} onPress={() => navigation.navigate("HomeScreen")} />
        </View>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "center",
            marginTop: 100,
          }}
        >
          <Text>Already Registered?</Text>
          <TouchableOpacity>
            <Text style={{ color: "#149AA2", fontWeight: "700" }}>
              {" "}
              Login Here
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
    justifyContent: "center",
    backgroundColor: "#FFF",
  },
  heading: {
    color: "#3F3D56",
    fontWeight: "900",
    fontSize: 32,
    marginBottom: 30,
  },
});
