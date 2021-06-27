import * as React from 'react';
import { View, StyleSheet, FlatList, Text, TouchableOpacity } from 'react-native';

import en_US from '../../../locales/en_US.json'
import pt_BR from '../../../locales/pt_BR.json'
import es_ES from '../../../locales/es_ES.json'

const i18n = (key, lang) => {
  switch(lang) {
    case 'en':
      return en_US[key]
    case 'es':
      return es_ES[key]
    default:
      return pt_BR[key]
  }
}

const AppContext = React.createContext();

export default function UserLocale() {

  const [lang, setLang] = React.useState('pt_br')

  const langList = [
    {
      name: 'es_ES',
      value: i18n('es', lang)
    },
    {
      name: 'en_US',
      value: i18n('en', lang)
    },
    {
      name: 'pt_BR',
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