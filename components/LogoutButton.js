import { Text, TouchableOpacity, StyleSheet, View } from "react-native";
import React from "react";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";

export default function LogoutButton({ label, onPress, icon }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <View style={styles.content}>
        {icon && (
          <MaterialIcons
            name={icon}
            size={20}
            color="#EEDADC"
            style={styles.icon}
          />
        )}
        <Text style={styles.text}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    // backgroundColor: "#DD5746",
    padding: 10,
    borderRadius: 30,
    backgroundColor: '#149AA2',
    width: 150,
    alignSelf: "center",
    marginHorizontal: 5,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  icon: {
    marginRight: 10
  },
  text: {
    color: '#fff',
    fontSize: 20
  },
});
