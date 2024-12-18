import React from 'react';
import { View, Text, TextInput, StyleSheet } from 'react-native';

export default function ChampField(props) {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{props.titleLabel}</Text>
      <TextInput
        style={styles.input}
        placeholder={props.titleField}
        placeholderTextColor="#777"
        secureTextEntry={props.secureTextEntry || false}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: '82%',
  },
  label: {
    color: '#333',
    marginBottom: 5,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#151A23',
    borderRadius: 25,
    padding: 12,
    color: '#333',
    borderWidth: 1,
    borderColor: '#4FA3D1',
  },
});
