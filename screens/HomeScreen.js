import { View, Text, StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import UserHome from './UserHome';
import UserSettings from './UserSettings';

const Tab = createMaterialBottomTabNavigator();

export default function HomeScreen({ navigation }) {
  return (
    <Tab.Navigator activeColor="#DD5746">
        <Tab.Screen name="UserHome" component={UserHome} options={{tabBarIcon: 'home', tabBarLabel: 'Home'}} />
        <Tab.Screen name="UserSettings" component={UserSettings} options={{tabBarIcon: 'cog', tabBarLabel: 'Settings', tabBarColor: '#DD5746'}} />
        {/* <Tab.Screen name="Logout" component={UserSettings} options={{ tabBarIcon: 'logout', tabBarLabel: 'Logout', tabBarColor: '#DD5746' }} /> */}
    </Tab.Navigator>
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
