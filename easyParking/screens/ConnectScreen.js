import React, { useState, useContext } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ChampField from '../components/ChampField';
import SimpleButton from '../components/Button';
import SocialButton from '../components/SocialButton';
import Logo from '../components/LogoAndTitle';
import { UserContext } from '../context/UserContext';
import { login } from '../apiCalls/login';

export default function ConnectScreen() {
  const navigation = useNavigation();
  const { setUser, setPass, setToken } = useContext(UserContext);
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async () => {
    try {
      const {success, token} = await login(username, password);
      if (success) {
        setUser(username); 
        setPass(password);
        setToken(token); 
        navigation.navigate('HomeScreen');
      } else {
        Alert.alert('Erreur', 'Identifiants incorrects');
      }
    } catch (error) {
      Alert.alert('Erreur', "Une erreur s'est produite lors de la connexion.");
    }
  };

  return (
    <View style={styles.container}>
      <Logo />
      <ChampField
        titleLabel="Utilisateur"
        titleField="***********"
        onChangeText={setUsername}
        value={username}
      />
      <ChampField
        titleLabel="Mot de passe"
        titleField="***********"
        secureTextEntry={true}
        onChangeText={setPassword}
        value={password}
      />
      <SimpleButton onPress={handleLogin} color="#4FA3D1" title="Continuer" />

      <TouchableOpacity>
        <Text style={styles.password}>Mot de passe oublié ?</Text>
      </TouchableOpacity>
      <SocialButton title="Continue with Google" icon="google" />
      <SocialButton title="Continue with Apple" icon="apple" />
      <SocialButton title="Continue with Facebook" icon="facebook" />
      <TouchableOpacity>
        <Text
          onPress={() => navigation.navigate('RegisterScreen')}
          style={styles.unforgettable}
        >
          Vous n'avez pas de compte? Inscrivez-vous
        </Text>
      </TouchableOpacity>
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
  unforgettable: {
    paddingTop: 30,
    fontSize: 12,
    color: 'grey',
  },
  password: {
    fontSize: 14,
    color: '#52889F',
    padding: 10,
    paddingBottom: 20,
  },
});
