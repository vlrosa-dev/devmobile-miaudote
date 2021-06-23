import { StatusBar } from 'expo-status-bar';
import { 
  Text, 
  View, 
  TextInput, 
  TouchableOpacity, 
  Keyboard, 
  TouchableWithoutFeedback 
} from 'react-native';
import React, { useState } from 'react';
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

import styles from './Styles'

export default function LoginAuthentication() {
  
  const [inputPass, setInput] = useState('');
  const [hidePass, setHidePass] = useState(true);
  const navigation = useNavigation();

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <View style={styles.container}>
        <StatusBar backgroundColor="#fff" translucent={false}/>

        <View style={styles.tittle}>
          <Text style={styles.loginTittle}>Fazer Login</Text>
        </View>

        <TextInput
          placeholder="Email"
          style={styles.input}
        />

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

        <View style={styles.forgotContainer}>
          <TouchableOpacity>
            <Text style={styles.forgotText}>Esqueceu sua senha?</Text>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          onPress={() => {navigation.navigate('Home')}} 
          style={styles.loginButton}
        >
          <Text style={styles.loginText}>Entrar</Text>
        </TouchableOpacity>

      </View>
    
    </TouchableWithoutFeedback>
  );
}