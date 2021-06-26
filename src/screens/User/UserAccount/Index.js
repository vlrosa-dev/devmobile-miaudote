import React from 'react';
import { View, Text, ScrollView, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { Icon } from 'react-native-elements';

import styles from './Styles';

export default function UserAccount() {
 return (
    <ScrollView showsHorizontalScrollIndicator={false} style={{backgroundColor: '#fff'}}>
      <View style={styles.container}>
        
        <View style={{flexDirection: 'row', width: '100%'}}>
          <View style={{width: '80%'}}>
            <Text style={{fontFamily: 'Montserrat_700Bold', fontSize: 24, marginTop: 20}}>
              Perfil
            </Text>
          </View>
          <View style={{width: '20%', alignItems: 'flex-end'}}>
              <TouchableOpacity style={{marginTop: 20}}>
                <Image 
                  source={require('../../../assets/icon_brasil.png')}
                  style={{
                    width: 30,
                    height: 30
                  }}
                />
              </TouchableOpacity>
          </View>
        </View>
        
        <View style={styles.contentHeader}>

          <View style={{width: '20%'}}>
            <Image 
              source={require('../../../assets/cardbig_cat01.jpg')}
              style={{
                width: 65,
                height: 65,
                borderRadius: 40
              }}
            />
          </View>
        
          <View style={{width: '80%', marginTop: 10, marginLeft: 10}}>
            <Text style={{fontFamily: 'Montserrat_700Bold', fontSize: 20}}> 
              Patty Farias 
            </Text>
            <Text style={{fontFamily: 'Montserrat_400Regular', marginTop: 3, fontSize: 18}}> 
              Membro desde setembro 2018 
            </Text>
          </View>
        </View>

        <View style={styles.titleInfosHeader}>
            <View style={{width: '30%', alignItems: 'center'}}>
              <Text style={{fontFamily: 'Montserrat_700Bold', color: '#F660AB'}}> Informações </Text>
            </View>
            <View style={{width: '50%', alignItems: 'center'}}>
              <Text style={{fontFamily: 'Montserrat_700Bold'}}> Solicitações Enviadas </Text>
            </View>
        </View>   

        <View style={styles.formUser}>
              
            <View style={{width: '100%'}}>
              <View style={{width: '80%', flexDirection: 'row'}}>
                <View style={{width: '55%', alignItems: 'flex-start'}}>
                  
                  <Text style={{fontFamily: 'Montserrat_500Medium', fontSize: 16}}>Informações Pessoais</Text>
               
                </View>
                <View style={{width: '10%', alignItems: 'flex-start'}}>   
                  <Icon 
                    name="caret-down" 
                    type="ionicon" 
                    color="black"
                    style={{
                      width: 20,
                      height: 20
                    }}
                  />
                
                </View> 
              </View>
            </View>

            <View style={styles.contentForm}>

              <View style={styles.contentFields}>
                <Text style={styles.textTitle}> Nome </Text>
                <Text style={styles.textSubTitle}> Patty Farias </Text>
              </View>

              <View style={styles.contentFields}>
                <Text style={styles.textTitle}> Email </Text>
                <Text style={styles.textSubTitle}> pattyfarias@hotmail.com </Text>
              </View>

              <View style={styles.contentFields}>
                <Text style={styles.textTitle}> Senha </Text>
                <Text style={styles.textSubTitle}> ************ </Text>
              </View>

              <View style={styles.contentFields}>
                <Text style={styles.textTitle}> Endereço </Text>
                <Text style={styles.textSubTitle}> Av. Desembargador Antônio José Miguel Feu Rosa </Text>
              </View>
              
              <View style={styles.contentFields}>
                <Text style={styles.textTitle}> Cidade </Text>
                <Text style={styles.textSubTitle}> Vila Velha </Text>
              </View>

              <View style={styles.contentFields}>
                <Text style={styles.textTitle}> Bairro </Text>
                <Text style={styles.textSubTitle}> Jardim Marilândia </Text>
              </View>

              <View style={styles.contentFields}>
                <Text style={styles.textTitle}> Estado </Text>
                <Text style={styles.textSubTitle}> Espirito Santo </Text>
              </View>

              <View style={styles.contentFields}>
                <Text style={styles.textTitle}> CEP </Text>
                <Text style={styles.textSubTitle}> 29112-680 </Text>
              </View>

            </View>

            <View style={{marginTop: 20}}>
              <TouchableOpacity>
                <Text style={styles.textExitAccount}> 
                  Sair da minha conta 
                </Text>
              </TouchableOpacity>
            </View>

            <View style={{marginTop: 20}}>
              <TouchableOpacity>
                <Text style={styles.textExcludeAccount}>
                  Excluir conta
                </Text>
              </TouchableOpacity>
            </View>

        </View>    
      </View>
    </ScrollView>
  );
}
