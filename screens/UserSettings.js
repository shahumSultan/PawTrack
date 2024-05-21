import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";


export default function UserSettings({ navigation }) {
  return (
    <View style={styles.container}>
        <StatusBar style="auto" />
        <Text style={{fontWeight: '900', fontSize: 30, color: '#3F3D56'}}>User Settings</Text>
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
