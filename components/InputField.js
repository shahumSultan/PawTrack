import React from 'react';
import { View, TextInput } from 'react-native';

export default function InputField({
  label,
  value,
  icon,
  inputType,
  keyboardType,
  onChangeText,
}) {
  return (
    <View
      style={{
        flexDirection: 'row',
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 30,
        padding: 8,
        marginBottom: 20,
        alignItems: 'center', // Align items vertically
      }}>
      {icon && <View style={{ marginRight: 10 }}>{icon}</View>}
      <TextInput
        placeholder={label}
        value={value}
        keyboardType={keyboardType}
        style={{
          flex: 1,
          paddingVertical: 0,
        }}
        secureTextEntry={inputType === 'password'}
        onChangeText={onChangeText}
      />
    </View>
  );
}