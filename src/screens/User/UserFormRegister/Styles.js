import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      paddingLeft: 22,
      padding: 3,
      marginTop: 15
    },
    text: {
      fontSize: 22,
      marginBottom: '5%',
      fontFamily: 'Montserrat_700Bold'
    },
    input: {
      width: '90%',
      height: 42,
      marginBottom: 20,
      borderRadius: 5,
      borderWidth: 1,
      borderColor: '#e0e0e0' ,
      padding: 5,
      fontFamily: 'Montserrat_500Medium'
    },
    inputArea: {
      flexDirection: 'row',
      width: '90%',
      borderRadius: 5,
      height: 42,
      alignItems: 'center',
      marginTop: '5%',
    },
    icon: {
      width: '10%',
      height: 42,
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 5,
      borderTopLeftRadius: 0,
      borderBottomLeftRadius: 0,
      borderColor: '#e0e0e0',
      marginBottom: 20,
    },
    inputPass: {
      width: '90%',
      height: 42,
      borderWidth: 1,
      borderRadius: 5,
      borderTopRightRadius: 0,
      borderColor: '#e0e0e0',
      borderBottomRightRadius: 0,
      padding: 5,
      marginBottom: 20,
      fontFamily: 'Montserrat_500Medium'
    },
    buttonEntrar: {
      marginTop: '5%',
      backgroundColor: '#f660ab',
      width: '90%',
      height: 50,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5,
    },
    loginText: {
      color: '#fff',
      fontSize: 17,
      fontFamily: 'Montserrat_700Bold'        
    },
  
  });

export default styles