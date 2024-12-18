import { StatusBar } from 'expo-status-bar';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Button } from 'react-native';
import React, { useEffect, useState } from 'react';
import Logo from './components/LogoAndTitle';

/* import de screens*/
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

import TabNavigator from './components/TabNavigator';

import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
const Tab = createBottomTabNavigator();

export default function App() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000);
  }, []);

  if (isLoading) {
    return (
      <View style={styles.container}>
      <Logo />
    </View>
    );
  }

  return (
    <NavigationContainer>
      <Tab.Navigator initialRouteName="Tabs" screenOptions={{headerShown: false}}>
        <Tab.Screen name="Tabs" component={TabNavigator} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#151A23',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});
