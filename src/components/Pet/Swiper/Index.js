import React from 'react'
import { View, Image} from 'react-native'
import Swiper from 'react-native-swiper'

import styles from './Styles'

export default function SwiperComponent(){
  return (
    <Swiper
        style={styles.wraper}
        dotStyle={{
        backgroundColor: '#000',
        borderColor: '#000',
        borderWidth: 1,
        width: 10,
        height: 10,
        borderRadius: 10
      }}
      activeDotColor='#fff'
      activeDotStyle={{
        borderColor: '#000',
        borderWidth: 1,
        width: 10,
        height: 10,
        borderRadius: 10
      }}
    >

        <View style={styles.slide}>
        <Image
            source={require('../../../assets/cardbig_cat01.jpg')} 
            style={{width: '100%', height: 400}}
        />
        </View>

        <View style={styles.slide}>
        <Image
            source={require('../../../assets/cardbig_cat02.jpg')} 
            style={{width: '100%', height: 400}}
        />
        </View>

        <View style={styles.slide}>
        <Image
            source={require('../../../assets/cardbig_cat03.jpg')} 
            style={{width: '100%', height: 400}}
        />
        </View>
    </Swiper>
  )
}
