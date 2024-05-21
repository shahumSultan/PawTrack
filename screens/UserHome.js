import { View, Text, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import { StatusBar } from "expo-status-bar";

import CustomButton from "../components/CustomButton";
import LogoutButton from "../components/LogoutButton";

export default function UserHome({ navigation }) {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <Text style={{ fontWeight: "900", fontSize: 30, color: "#3F3D56" }}>
        User Home
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#FFF",
    alignItems: 'center'
  },
});
