import React from 'react';
import { View, Text, ScrollView, Image } from 'react-native';

import styles from './Styles';

export default function UserDashboard() {
 return (
    <ScrollView 
      showsVerticalScrollIndicator={false} 
      style={{paddingHorizontal: 15, flex: 1, backgroundColor: '#fff'}}
    >
      <View style={styles.headerTitle}>
        <Text style={styles.textHeaderTitle}> Dados Informativos </Text>
      </View>
      <View style={styles.container}>
        <View style={styles.content}>
          <View style={{width: '100%', marginRight: 40}}>
            <Text style={styles.textContentMedium}> + 1000 </Text>
            <Text style={styles.textContentBold}> Gatos Adotados </Text>
          </View>
        </View>
      </View>

      <View style={styles.container}>
        <View style={styles.content}>
          <View style={{width: '100%', marginRight: 40}}>
            <Text style={styles.textContentMedium}> + 1500 </Text>
            <Text style={styles.textContentBold}> Cães Adotados </Text>
          </View>
        </View>
      </View>

      <View style={styles.description}>
        <View style={{width: '100%'}}>
          <Text style={{fontFamily: 'Montserrat_500Medium', fontSize: 26, textAlign: 'right'}}>
            Temos em nossa base <Text style={{fontWeight: 'bold'}}>+2500</Text> usuários cadastrados
          </Text>
          <Text style={{fontFamily: 'Montserrat_500Medium', fontSize: 26, marginTop: 12, textAlign: 'right'}}>
            Venha também ajudar mais um pet a ser feliz :)
          </Text>
        </View>
      </View>

      <View>

      </View>
    </ScrollView>
  );
}
