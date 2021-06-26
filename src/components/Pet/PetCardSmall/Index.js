import React from 'react'
import { View, Text, Image } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { TouchableOpacity } from 'react-native-gesture-handler'

import styles from './Styles'

export default function PetCardSmall(props){
  
  const navigation = useNavigation();
  
  return(
    
    <TouchableOpacity
        onPress={() => navigation.navigate('PetDetails',
        {
          name: props.name,
          weight: props.weight,
          age: props.age,
          breed: props.breed,
          species: props.species,
          port: props.port,
          location: props.location,
          description: props.description
         })} 
        style={styles.container}>
        <View style={styles.content}>
          <Image 
            style={styles.cover}
            source={props.cover}
          />

        <View style={styles.pet}>
          <Text style={styles.titlePet}> {props.name} </Text>
          <View style={styles.infosPet}>
            <Text style={styles.titleInfosPet}> {props.abrigo} </Text>
            <Text style={styles.titleInfosPet}> {props.uf} </Text>
            <Text style={styles.titleInfosPet}> {props.sexo} </Text>
          </View>
        </View>

        <View style={styles.contentCards}>

          <View style={styles.cards}>
            <Text style={styles.titleCards}> {props.caracteristica01} </Text>
          </View>

          <View style={styles.cards}>
            <Text style={styles.titleCards}> {props.caracteristica02} </Text>
          </View>

          <View style={styles.cards}>
            <Text style={styles.titleCards}> {props.caracteristica03} </Text>
          </View>

        </View>
      
      </View>

    </TouchableOpacity>
  )
}