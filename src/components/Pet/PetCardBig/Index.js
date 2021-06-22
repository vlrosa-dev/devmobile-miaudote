import React from 'react'
import { View, Text, Image } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler'
import { Icon } from 'react-native-elements'

import styles from './Styles'

export default function PetCardBig(props){

    return(
      <TouchableOpacity onPress={() => {}} style={styles.container}>
        
        <Image
          source={props.cover}
          style={styles.cover}
        />
        
        <View style={styles.header}>
          <View style={{width: '80%'}}>
            <Text style={styles.title}> {props.title} </Text>
          </View>
          <View style={{width: '20%', marginTop: 5}}>
            <Icon
              name="male-outline"
              type="ionicon"
              color="black"
            />
          </View> 
        </View>

        <View style={styles.content}>
          <Text 
            style={styles.subTitle}>{props.abrigo}
          </Text>
          <View 
            style={styles.dot}>
          </View>
          <Text 
            style={styles.subTitle}>{props.uf}
          </Text>
          <View 
            style={styles.dot}>
          </View>
          <Text 
            style={styles.subTitle}>{props.sexo}
          </Text>
        </View>

      </TouchableOpacity>
    )
}
