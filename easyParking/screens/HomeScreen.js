import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native';

export default function HomeScreen() {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Bienvenue sur EasyParking</Text>
      <Button title="To RegisterSceen" onPress={() => navigation.navigate('RegisterScreen')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
});
