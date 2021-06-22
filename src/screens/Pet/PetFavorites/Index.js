import React from 'react'
import {View, Text, ScrollView} from 'react-native'

import PetCardSmall from '../../../components/Pet/PetCardSmall/Index'

import styles from './Styles'

export default function PetFavorites(){
  return(
    <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: '#fff'}}>
      <View style={{paddingHorizontal: 15}}>
        <Text style={styles.titleFavorites}> Favoritos </Text>

        <PetCardSmall
          cover={require('../../../assets/cardbig_cat01.jpg')}
          name="Polenta"
          abrigo="Animais Felizes"
          uf="Espirito Santo"
          sexo="Femea"
          caracteristica01="Apartamento"
          caracteristica02="Vermifugado"
          caracteristica03="Crianças"
        />

        <PetCardSmall
          cover={require('../../../assets/cardbig_cat02.jpg')}
          name="Zyra"
          abrigo="Abrigo Tia Lú"
          uf="São Paulo"
          sexo="Macho"
          caracteristica01="Desconhecidos"
          caracteristica02="Vacinado"
          caracteristica03="Dócil"
        />
        
        <PetCardSmall
          cover={require('../../../assets/cardbig_cat03.jpg')}
          name="Lindinha"
          abrigo="Abrigo Tia Lú"
          uf="São Paulo"
          sexo="Macho"
          caracteristica01="Castrado"
          caracteristica02="Quintal"
          caracteristica03="Sociavel"
        />
        
      </View>
    </ScrollView>
  )
}