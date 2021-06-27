import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({

    headerTitle: {
      marginTop: 20
    },

    textHeaderTitle: {
      fontFamily: 'Montserrat_700Bold',
      fontSize: 22,
    },

    container: {
      marginTop: 20,
      backgroundColor: '#F660AB',
      height: 150,
      width: '100%',
      elevation: 2,
      borderRadius: 5,
      marginRight: 30,
      marginLeft: 2,
      marginBottom: 5,
      alignItems: 'center',
    },
  
    content: {
      flexDirection: 'row',
      justifyContent: 'center',
      width: '100%',
      marginTop: 30,
      marginLeft: 20
    },
    
    textContentMedium: {
      fontFamily: 'Montserrat_500Medium',
      textAlign: 'center',
      color: '#fff',
      fontSize: 50
    },

    textContentBold: {
      fontFamily: 'Montserrat_700Bold',
      textAlign: 'center',
      color: '#fff',
      fontSize: 25
    },

    description: {
      marginTop: 40,
      flexDirection: 'row',
      width: '100%',

    }
  })

export default styles;