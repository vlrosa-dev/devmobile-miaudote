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

import styles from './Styles';

export default function App() {
  const [inputPass, setInput] = useState('');
  const [hidePass, setHidePass] = useState(true);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>

      <View style={styles.container}>
        <StatusBar backgroundColor="#fff" translucent={false}/>

        <View style={styles.tittle}>
          <Text style={styles.text}>Preencha as informações para efetuar o seu cadastro</Text>
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
            placeholder="Endereço"
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


        <TouchableOpacity style={styles.buttonEntrar}>
          <Text style={styles.loginText}>Entrar</Text>
        </TouchableOpacity>

      </View>
    
    </TouchableWithoutFeedback>
  );
}