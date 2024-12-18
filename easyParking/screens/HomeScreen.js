import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { View, Text, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Button } from 'react-native';
import ChampField from '../components/ChampField';
import SimpleButton from '../components/Button';
import SocialButton from '../components/SocialButton';
import Logo from '../components/LogoAndTitle';
import ProfileLocationCard from '../components/ProfileLocationCard';

export default function HomeScreen() {
    const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Logo />
      <ChampField titleLabel="Email" titleField="example@example.com" />
      <ChampField titleLabel="Password" titleField="********" secureTextEntry={true} />
      <SimpleButton 
        color="#4FA3D1" title="Continuer"/>
      <SocialButton
        title="Continue with Google"
        icon="google"
      />
      <ProfileLocationCard style={styles.largeCard}
        title="Bienvenue"
        information="Jerem Nsinda Muanda"/>
        <ProfileLocationCard 
        title="Bienvenue"
        information="Jerem Nsinda Muanda 2" />
      <Button title="To RegisterSceen" onPress={() => navigation.navigate('RegisterScreen')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#151A23',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#333',
  },
  test: {
    height: 500,
  },
  largeCard: {
    width: '90%'
  },
});
