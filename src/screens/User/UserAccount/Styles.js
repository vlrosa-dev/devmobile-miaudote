import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
    container: {
      flex: 1,
      paddingHorizontal: 20,
      width: '100%'
    },
  
    contentHeader: {
      flexDirection: 'row',
      width: '100%',
      marginTop: 15
    },
  
    titleInfosHeader: {
      flexDirection: 'row',
      marginTop: 20,
      width: '100%'
    },
  
    formUser: {
      flex: 1,
      marginTop: 20
    },
  
    contentForm: {
      marginTop: 2,
      margin: 10
    },
  
    contentFields: {
      marginTop: 10
    },
  
    textTitle: {
      fontFamily: 'Montserrat_500Medium',
      color: '#969696'
    },
  
    textSubTitle: {
      fontFamily: 'Montserrat_400Regular'
    },
  
    textExitAccount: {
      fontFamily: 'Montserrat_500Medium',
      textDecorationLine: 'underline',
      fontSize: 16
    },
  
    textExcludeAccount: {
      fontFamily: 'Montserrat_500Medium',
      textDecorationLine: 'underline',
      fontSize: 16,
      color: 'red'
    },

    textDashboard: {
      fontFamily: 'Montserrat_500Medium',
      textDecorationLine: 'underline',
      fontSize: 16
    }
  
})

export default styles