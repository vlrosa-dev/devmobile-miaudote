import React from 'react';
import { View, Text, TouchableOpacity, TextInput, ScrollView } from 'react-native';

import styles from './Styles'

export default function PetAdopt() {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headerTitle}> Falta pouco, precisamos de algumas informações. </Text>
        </View>
      
        <View style={styles.headerInfo}>
          <Text style={styles.info}> Sobre Você </Text>
        </View>
        <TextInput
          placeholder="Descreva bem sobre você!"
          style={styles.input}
        />

        <View style={styles.headerInfo}>
          <Text style={styles.info}> Porque você quer adota-lo? </Text>
        </View>
        <TextInput
          placeholder="Descreva bem o motivo da adoção!"
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
    </ScrollView>
  );
}
