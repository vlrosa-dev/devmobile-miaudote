import React from 'react';
import { View, Text, TouchableOpacity, TextInput } from 'react-native';

import styles from './Styles'

export default function PetAdopt() {
 return (
   <View style={styles.container}>
    <View style={styles.header}>
      <Text style={styles.headerTitle}> Falta pouco, precisamos de algumas informações. </Text>
    </View>
   
    <View style={styles.headerInfo}>
      <Text style={styles.info}> Sobre Você </Text>
    </View>
    <TextInput
      style={styles.input}
    />

    <View style={styles.headerInfo}>
      <Text style={styles.info}> Porque você quer adotar ricota? </Text>
    </View>
    <TextInput
      style={styles.input}
    />

    <View style={{width: '100%', marginTop: 220}}>
      <TouchableOpacity
        onPress={() => {}}
        style={styles.button}>
        <Text style={styles.textButton}> Enviar Solicitação </Text>
      </TouchableOpacity>
    </View>
    
   </View>
  );
}
