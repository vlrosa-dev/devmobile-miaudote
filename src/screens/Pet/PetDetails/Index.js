import React from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { ScrollView } from 'react-native-gesture-handler'
import { Icon, Divider } from 'react-native-elements'

import styles from './Styles'

import SwiperComponent from '../../../components/Pet/Swiper/Index'

export default function PetDetails(){
  
  const navigation = useNavigation();

  return(
    <ScrollView style={styles.container}>
      <View style={styles.swiperContent}>
        <SwiperComponent/>
      </View>

      <View style={styles.headerContent}>
        <View style={{width: '65%'}}>
          <Text style={styles.headerTitle}> Oi, eu sou Ricota... </Text>
        </View> 
        <View style={{width: '35%'}}>
          <Icon
            name="male-outline"
            type="ionicon"
            color="black"
          />
        </View>
      </View>

      <View style={styles.content}>
        <View style={{width: '30%'}}>
          <Text style={styles.contentTitleInfo}> Peso </Text>
          <Text style={styles.contentSubTitleInfo}> 3KG </Text>
        </View> 
        <View style={{width: '30%'}}>
          <Text style={styles.contentTitleInfo}> Idade Aproximada </Text>
          <Text style={styles.contentSubTitleInfo}> 10 Anos </Text>
        </View> 
      </View>

      <View style={styles.content}>
        <View style={{width: '30%'}}>
          <Text style={styles.contentTitleInfo}> Espécie </Text>
          <Text style={styles.contentSubTitleInfo}> Cachorro </Text>
        </View> 
        <View style={{width: '30%'}}>
          <Text style={styles.contentTitleInfo}> Raça </Text>
          <Text style={styles.contentSubTitleInfo}> Vira-Lata </Text>
        </View> 
        <View style={{width: '30%'}}>
          <Text style={styles.contentTitleInfo}> Porte </Text>
          <Text style={styles.contentSubTitleInfo}> Pequeno </Text>
        </View>
      </View>

      <View style={styles.content}>
        <View style={{width: '100%'}}>
          <Text style={styles.contentTitleInfo}> Local </Text>
          <Text style={styles.contentSubTitleInfo}> Av. Luciano das Neves, Shop. VV, ES </Text>
        </View> 
      </View>

      <View style={styles.content}>
        <View style={{width: '100%'}}>
          <Text style={styles.contentTitleInfo}> Sobre </Text>
          <Text style={styles.contentSubTitleInfo}> Ricota é plena, boazinha, carinhosa, amorosa e companheira. </Text>
        </View> 
      </View>

      <View style={styles.content}>
        <View style={{width: '100%'}}>
          <Divider style={{marginTop: 20}}/>
        </View>
      </View>

      <View style={styles.content}>
        <View style={{width: '100%'}}>
          <TouchableOpacity
            onPress={() => {navigation.navigate('AdotarPet')}}
            style={styles.button}>
            <Text style={styles.textButton}> Quero Adotar </Text>
          </TouchableOpacity>
        </View>
      </View>

    </ScrollView>
  )
}