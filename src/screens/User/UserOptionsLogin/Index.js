import React from 'react';
import { Text, View, Image, TouchableOpacity } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native'
import { FontAwesome5 } from '@expo/vector-icons';

import styles from './Styles'

export default function OptionsLogin() {

  const navigation = useNavigation();

  return (
    <View style={styles.container}>

      <StatusBar translucent={false}/>

      <Image
        source={require('../../../assets/logo_miaudote.png')}
        style={styles.logo}
      />

      <View>
        <Text style={styles.welcomeText}>Bem vindo ao <Text style={styles.miauudote}>Miauudote</Text>, o maior aplicativo de adoção de pets</Text>
      </View>

      <TouchableOpacity 
        onPress={() => {navigation.navigate('UserFormRegister')}}
        style={styles.buttonNovo}
      >
        <Text style={styles.buttonJaPossui}>Sou novo (a)</Text>
      </TouchableOpacity>

      <View style={styles.forgotContainer}>
        <TouchableOpacity
          onPress={() => {navigation.navigate('UserLogin')}}
        >
          <Text style={styles.forgotText}>Já tenho Conta</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.divisor}>
        <Text>OU</Text>
      </View>

      <TouchableOpacity style={styles.facebookButton}>
        <FontAwesome5 name="facebook" size={25} color="#399fff"/>
        <Text style={styles.facebookText}>Entrar com Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity 
        style={styles.googleButton}
        >
      <FontAwesome5 
        name="google" size={25} color="#db4a39"/>
        <Text style={styles.googleText}>Entrar com Google</Text>
      </TouchableOpacity>

    </View>
  );
}
