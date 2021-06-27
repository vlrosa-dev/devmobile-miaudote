import { StatusBar } from 'expo-status-bar';
import { 
    Text, 
    View, 
    TextInput, 
    TouchableOpacity, 
    Keyboard, 
    TouchableWithoutFeedback,
    ScrollView,
} from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'
import { Divider } from 'react-native-elements'

import styles from './Styles';

export default function App() {

  const [inputPass, setInput] = useState('');
  const [hidePass, setHidePass] = useState(true);
  const navigation = useNavigation();

  return (
    <ScrollView 
      showsVerticalScrollIndicator={false} 
      style={{paddingHorizontal: 15, backgroundColor: '#fff'}}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

        <View style={styles.container}>
          <StatusBar backgroundColor="#fff" translucent={false}/>
          <View>
            <Text style={styles.text}>Cadastre-se</Text>
          </View>

          <View style={styles.inputCadastro}>
            <TextInput
              placeholder="Nome"
              style={styles.input}
            />

            <TextInput
              placeholder="Email"
              style={styles.input}
            />

            <TextInput
              placeholder="CEP"
              style={styles.input}
            />

            <TextInput
              placeholder="Rua"
              style={styles.input}
            />

            <TextInput
              placeholder="Cidade"
              style={styles.input}
            />

            <TextInput
              placeholder="Bairro"
              style={styles.input}
            />

            <TextInput
              placeholder="Estado"
              style={styles.input}
            />
          </View>

          <View>
            <Divider style={{width: '90%', marginBottom: '3%'}}></Divider>
            <View style={styles.inputArea}>
              <TextInput
                placeholder="Senha"
                style={styles.inputPass}
                value={inputPass}
                onChangeText={ (texto) => setInput(texto) }
                secureTextEntry={hidePass}
              />         

              <TouchableOpacity style={styles.icon} onPress={ () => setHidePass(!hidePass)}>
                <Ionicons name="eye" color="#a9a9a9" size={19}/>
              </TouchableOpacity>
            </View> 

            <View style={styles.inputArea}>
              <TextInput
                placeholder="Confirmar Senha"
                style={styles.inputPass}
                value={inputPass}
                onChangeText={ (texto) => setInput(texto) }
                secureTextEntry={hidePass}
              />         

              <TouchableOpacity style={styles.icon} onPress={ () => setHidePass(!hidePass)}>
                <Ionicons name="eye" color="#a9a9a9" size={19}/>
              </TouchableOpacity>
            </View>       


            <TouchableOpacity 
              style={styles.buttonEntrar}
              onPress={() => {navigation.navigate('UserLogin')}}
              >
              <Text style={styles.loginText}>Entrar</Text>
            </TouchableOpacity>
          </View>
        </View>
      
      </TouchableWithoutFeedback>

    </ScrollView>
  );
}