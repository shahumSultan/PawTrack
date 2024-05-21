import { Text, TouchableOpacity, StyleSheet } from 'react-native';
import React from 'react';

export default function CustomButton({ label, onPress }) {
  return (
    <TouchableOpacity onPress={onPress} style={styles.button}>
      <Text style={styles.text}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#149AA2',
    padding: 20,
    borderRadius: 30,
    marginBottom: 30,
    width: 270,
    alignSelf: 'center',
  },
  text: {
    textAlign: 'center',
    fontWeight: '700',
    fontSize: 20,
    color: '#EEDADC',
  }
})