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
          cover={require('../../../assets/cardbig_cat02.jpg')}
          name="Zyra"
          abrigo="Abrigo Tia Lú"
          uf="São Paulo"
          sexo="Macho"
          caracteristica01="Desconhecidos"
          caracteristica02="Vacinado"
          caracteristica03="Dócil"
          weight="3"
          age="10"
          species="Cachorro"
          breed="Vira-lata"
          port="Pequeno"
          location="Av. Luciano das Neves, Shop. VV, ES"
          description="Polenta é plena, boazinha, carinhosa, amorosa e companheira."
        />
        
      </View>
    </ScrollView>
  )
}