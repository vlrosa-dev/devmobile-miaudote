import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      fontFamily: 'montserrat',
      padding: 20
    },
    logo: {
      marginTop: Platform.OS === 'android' ? '13%' : '20%',
      marginBottom: Platform.OS === 'android' ? '13%' : '15%'
    },
    welcomeText: {
      textAlign: 'center',
      fontSize: 18,
    },
    miauudote: {
      fontWeight: 'bold',
      textDecorationLine: 'underline'
    },
    buttonNovo: {
      marginTop: '5%',
      backgroundColor: '#f660ab',
      width: '90%',
      height: 42,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 5
    },
    buttonJaPossui: {
      color: '#fff',
      fontWeight: 'bold'
    },
    forgotText: {
      marginTop: '15%',
      fontWeight: 'bold'
    },
    divisor: {
      margin: '10%',
      alignItems: 'center',
    },
    facebookButton: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: '10%'
    },
    facebookText: {
      paddingLeft: 8,
      fontSize: 15
    },
    googleButton: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: '3%'
    },
    googleText: {
      paddingLeft: 8,
      fontSize: 15
    },
});

export default styles;
  
  