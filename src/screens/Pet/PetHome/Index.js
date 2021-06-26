import React from 'react'
import {View, Text, TextInput} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'
import { Feather } from '@expo/vector-icons'

import styles from './Styles'

import PetCardBig from '../../../components/Pet/PetCardBig/Index'
import PetCardSmall from '../../../components/Pet/PetCardSmall/Index'

export default function PetHome(){

  const navigation = useNavigation();

  return(
    <ScrollView showsVerticalScrollIndicator={false} style={{backgroundColor: '#fff'}}>
      <View style={styles.header}>
        <View style={styles.inputArea}>
          <Feather
            name="search" size={24} color="black"
          />
          <TextInput
            placeholder="Encontre seu novo amigo"
            style={styles.input}
          />
        </View>
      </View>

      <View>
        <Text style={{paddingHorizontal: 15, fontFamily: 'Montserrat_700Bold'}}> Mais Relevantes </Text>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{paddingHorizontal: 15}}>
        <PetCardBig
          cover={require('../../../assets/cardbig_cat01.jpg')}
          title="Polenta"
          abrigo="Animais Felizes"
          uf="Amazonas"
          sexo="Femea"
          caracteristica01="Apartamento"
          caracteristica02="Vermifugado"
          caracteristica03="Crianças"
          weight="3"
          age="10"
          species="Cachorro"
          breed="Vira-lata"
          port="Pequeno"
          location="Av. Luciano das Neves, Shop. VV, ES"
          description="Polenta é plena, boazinha, carinhosa, amorosa e companheira."
        />

        <PetCardBig
          cover={require('../../../assets/cardbig_cat02.jpg')}
          title="Zyra"
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

        <PetCardBig
          cover={require('../../../assets/cardbig_cat03.jpg')}
          title="Lindinha"
          abrigo="Abrigo Tia Lú"
          uf="São Paulo"
          sexo="Macho"
          caracteristica01="Castrado"
          caracteristica02="Quintal"
          caracteristica03="Sociavel"
          weight="3"
          age="10"
          species="Cachorro"
          breed="Vira-lata"
          port="Pequeno"
          location="Av. Luciano das Neves, Shop. VV, ES"
          description="Polenta é plena, boazinha, carinhosa, amorosa e companheira."
        />
        
      </ScrollView>

      <View style={styles.content}>
        
        <View style={{flex: 2}}>
          <Text style={{color: '#F660AB', fontFamily: 'Montserrat_700Bold'}}> Recem Cadastrados </Text>
        </View>
        
        <View style={{flex: 1}}>
          <Text style={{color: '#F660AB', fontFamily: 'Montserrat_500Medium'}}> Cães </Text>
        </View>
        
        <View style={{flex: 1}}>
          <Text style={{color: '#F660AB', fontFamily: 'Montserrat_500Medium'}}> Gatos </Text>
        </View>
      </View>
      
      <View style={{paddingHorizontal: 15}}>

      </View>

      <View style={{paddingHorizontal: 15}}>
        <PetCardSmall
          cover={require('../../../assets/cardbig_cat01.jpg')}
          name="Polenta"
          abrigo="Animais Felizes"
          uf="Espirito Santo"
          sexo="Femea"
          caracteristica01="Apartamento"
          caracteristica02="Vermifugado"
          caracteristica03="Crianças"
          weight="3"
          age="10"
          species="Cachorro"
          breed="Vira-lata"
          port="Pequeno"
          location="Av. Luciano das Neves, Shop. VV, ES"
          description="Polenta é plena, boazinha, carinhosa, amorosa e companheira."
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
          weight="3"
          age="10"
          species="Cachorro"
          breed="Vira-lata"
          port="Pequeno"
          location="Av. Luciano das Neves, Shop. VV, ES"
          description="Polenta é plena, boazinha, carinhosa, amorosa e companheira."
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
          weight="3"
          age="10"
          species="Cachorro"
          breed="Vira-lata"
          port="Pequeno"
          location="Av. Luciano das Neves, Shop. VV, ES"
          description="Polenta é plena, boazinha, carinhosa, amorosa e companheira."
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
          weight="3"
          age="10"
          species="Cachorro"
          breed="Vira-lata"
          port="Pequeno"
          location="Av. Luciano das Neves, Shop. VV, ES"
          description="Polenta é plena, boazinha, carinhosa, amorosa e companheira."
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
  );
}