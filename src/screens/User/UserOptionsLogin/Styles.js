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
      fontFamily: 'Montserrat_500Medium'
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
      borderRadius: 20,
    },

    buttonJaPossui: {
      color: '#fff',
      fontSize: 18,
      fontFamily: 'Montserrat_700Bold'
    },
    
    forgotContainer: {
      marginTop: 20
    },

    forgotText: {
      marginTop: '15%',
      fontSize: 16,
      fontFamily: 'Montserrat_700Bold'
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
      fontSize: 15,
      fontFamily: 'Montserrat_500Medium'
    },

    googleButton: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: '3%'
    },

    googleText: {
      paddingLeft: 8,
      fontSize: 15,
      fontFamily: 'Montserrat_500Medium'
    },
});

export default styles;
  
  