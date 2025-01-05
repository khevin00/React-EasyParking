import 'react-native-gesture-handler';
import { View, Text, Image, StyleSheet } from 'react-native';
import React, { useEffect, useState } from 'react';
import Logo from './components/LogoAndTitle';

/* import de screens*/
import RegisterScreen from './screens/RegisterScreen';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';

import TabNavigator from './components/TabNavigator';
import { NavigationContainer } from '@react-navigation/native';
import { UserProvider } from './context/UserContext';

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
    <UserProvider>
      <NavigationContainer>
        <TabNavigator />
      </NavigationContainer>
    </UserProvider>
  );
    
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#151A23',
    justifyContent: 'center',
    alignItems: 'center',
  },
  
});
