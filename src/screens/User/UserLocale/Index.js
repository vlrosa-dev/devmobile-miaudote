import * as React from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';


const en = {
  'hello': 'hello',
  'pt_br': 'Brazilian Portuguese',
  'es': 'Spanish',
  'en': 'English',
  'open_menu': 'Open Menu',
  'home': 'Home',
  'languages': 'Languages'
}

const pt_br = {
  'hello': 'oi',
  'pt_br': 'Português do Brasil',
  'es': 'Espanhol',
  'en': 'Inglês',
  'open_menu': 'Abrir Menu',
  'home': 'Início',
  'languages': 'Línguas'
}

const es = {
  'hello': 'hola',
  'pt_br': 'Portugués Brasileño',
  'es': 'Español',
  'en': 'Inglés',
  'open_menu': 'Menú abierto',
  'home': 'Inicio',
  'languages': 'Idiomas'
}


const i18n = (key, lang) => {
  switch(lang) {
    case 'en':
      return en[key]
    case 'es':
      return es[key]
    default:
      return pt_br[key]
  }
}


export default function UserLocale() {

  const [lang, setLang] = React.useState('pt_br')

  const langList = [
    {
      name: 'es',
      value: i18n('es', lang)
    },
    {
      name: 'en',
      value: i18n('en', lang)
    },
    {
      name: 'pt_br',
      value: i18n('pt_br', lang)
    }
  ]

  return (
    <View style={{ flex: 1 }}>
    <FlatList
        data={langList}
        renderItem={({ item }) => (
        <TouchableOpacity 
          style={styles.listItem}
          onPress={() => setLang(item.name)}>
          <Text style={styles.listItemText}>{item.value}</Text>
        </TouchableOpacity>
      )}
    keyExtractor={item => item.name}
    />
  </View>
    );
}

const styles = StyleSheet.create({
  listItem: {
    backgroundColor: 'white',
    paddingVertical: 10,
    marginBottom: 5,
  },
  listItemText: {
    textAlign: 'center'
  },

})