import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image } from 'react-native';


export default function UserDashboard() {
 return (
    <ScrollView showsVerticalScrollIndicator={false} style={{paddingHorizontal: 15, flex: 1}}>
        
        <View style={styles.container}>
            
            <View style={styles.content}>

              <View style={{width: '50%'}}>
                <Image 
                  source={require('../../../assets/icon_cat.jpg')}
                  style={{
                    width: 80,
                    height: 80,
                  }}
                />
              </View>

              <View style={{width: '50%'}}>
                <Text style={{fontFamily: 'Montserrat_700Bold', fontSize: 38, color: '#fff'}}> + 1000 </Text>
                <Text style={{fontFamily: 'Montserrat_500Medium', fontSize: 18, color: '#fff'}}> Gatos Adotados </Text>
              </View>

            </View>

        </View>

        <View style={styles.container}>
            
            <View style={styles.content}>

              <View style={{width: '50%'}}>
                <Image 
                  source={require('../../../assets/icon_dog.jpg')}
                  style={{
                    width: 80,
                    height: 80,
                  }}
                />
              </View>

              <View style={{width: '50%'}}>
                <Text style={{fontFamily: 'Montserrat_700Bold', fontSize: 38, color: '#fff'}}> 
                  + 1500 
                </Text>
                <Text style={{fontFamily: 'Montserrat_500Medium', fontSize: 18, color: '#fff'}}> 
                  Cães Adotados 
                </Text>
              </View>

            </View>

        </View>

        <View style={styles.description}>
          
          <View style={{width: '75%'}}>
            <Text style={{fontFamily: 'Montserrat_700Bold', fontSize: 22}}>
              Temos em nossa base +2500 usuários cadastrados
            </Text>

            <Text style={{fontFamily: 'Montserrat_700Bold', fontSize: 22, marginTop: 10}}>
              Venha também ajudar mais um pet a ser feliz :)
            </Text>
          </View>

        </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60,
    backgroundColor: '#F660AB',
    height: 150,
    width: '100%',
    elevation: 2,
    borderRadius: 10,
    marginRight: 30,
    marginLeft: 2,
    marginBottom: 5,
  },

  content: {
    flexDirection: 'row',
    justifyContent: 'center',
    width: '100%',
    marginTop: 40,
    marginLeft: 20
  },

  description: {
    marginTop: 40,
    flexDirection: 'row',
    width: '100%',
  }
})