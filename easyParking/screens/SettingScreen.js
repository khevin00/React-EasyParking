import {React, useContext, useState} from 'react';
import { View, Text, StyleSheet, ScrollView, Alert  } from 'react-native';
import Logo from '../components/LogoAndTitle';
import { useNavigation } from '@react-navigation/native';
import ProfileLocationCard from '../components/ProfileLocationCard';
import ChampField from '../components/ChampField';
import Button from '../components/Button';
import Bar from '../components/PresentationBar';
import { UserContext } from '../context/UserContext';
import { modifyPassword } from '../apiCalls/modifyPassword';
import { logout } from '../apiCalls/login';

export default function SettingScreen(){
    const navigation = useNavigation();
     const { user, password, setUser, setPass} = useContext(UserContext);
    const [currentPassword, setCurrentPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
   

    const validatePassword = (password) => {
        const minLength = password.length >= 8;
        const hasUpperCase = /[A-Z]/.test(password);
        const hasLowerCase = /[a-z]/.test(password);
        const hasSpecialChar = /[#%!]/.test(password);
    
        return minLength && hasUpperCase && hasLowerCase && hasSpecialChar;
    };

    const handleUpdatePassword = async () => {
        if (!currentPassword.trim() || !newPassword.trim()) {
           return navigation.goBack();
        }
      
        if (!validatePassword(newPassword)) {
          return Alert.alert(
            'Erreur',
            'Le nouveau mot de passe doit contenir au moins 8 caractères, une majuscule, une minuscule et un caractère spécial (#, %, !)'
          );
        }

        if(currentPassword !== password){
            return Alert.alert('Erreur', 'Le mot de passe actuel n\'est pas correct');
        }

        if (currentPassword === newPassword) {
          return Alert.alert('Erreur', 'Le nouveau mot de passe ne doit pas être identique à l\'ancien');
        }
      
        try {
          // Appeler l'API pour modifier le mot de passe
          await modifyPassword(user, newPassword);
      
          Alert.alert('Succès', 'Mot de passe mis à jour avec succès');
          navigation.goBack(); // Revenir à l'écran précédent
        } catch (error) {
          Alert.alert('Erreur', error.message || 'Une erreur est survenue lors de la mise à jour du mot de passe');
        }
    };
      
    const handleLogout = async () => {
        try {
            await logout();
            setUser(null); 
            setPass(null); 
            navigation.replace('ConnectScreen'); 
        } catch (error) {
            Alert.alert('Erreur', 'Une erreur est survenue lors de la déconnexion.');
        }
    };
    
    return(
        <View style={styles.container}>
            <Logo/>
            <ProfileLocationCard style={styles.topSection} title="Bienvenue" information={user} icon="account" />

            <Bar title="Paramètres"/>  
            <ChampField titleLabel="Mot de passe actuel" titleField="********" secureTextEntry={true} onChangeText={setCurrentPassword} value={currentPassword} />
            <ChampField titleLabel="Nouveau mot de passe" titleField="********" secureTextEntry={true} onChangeText={setNewPassword} value={newPassword} />
            

            <Button title="Voir mes véhicules" color="#52889F" onPress={() => navigation.navigate('CarScreen')}/>
            <Button title="Mettre à jour" color="#52889F" onPress={handleUpdatePassword}/>
            <Button title="Se déconnecter" color="red" onPress={handleLogout}/>


        </View>
    );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#151A23',
    }
});