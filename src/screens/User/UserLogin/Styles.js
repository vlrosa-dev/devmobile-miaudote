import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    container: {
        flex: 1,
        fontFamily: 'montserrat',
        justifyContent: 'center',
        paddingLeft: 22
    },
    tittle:{
        alignItems: 'flex-start',
        marginTop: '60%'
    },
    loginTittle: {
        fontSize: 35,
        fontFamily: 'Montserrat_700Bold',
        marginBottom: 30,
    },
    input: {
        width: '90%',
        height: 42,
        marginBottom: 20,
        padding: 8,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        fontFamily: 'Montserrat_500Medium'    
    },
    inputArea: {
        flexDirection: 'row',
        width: '90%',
        borderRadius: 5,
        height: 42,
        alignItems: 'center',
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
        borderColor: '#e0e0e0'
    },
    forgotContainer: {
        width: '90%',
        alignItems: 'flex-end'
    },
    forgotText: {
        marginTop: 10,
        color: '#696969',
        fontFamily: 'Montserrat_500Medium'
    },
    loginButton: {
        marginTop: '70%',
        backgroundColor: '#f660ab',
        width: '90%',
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    loginText: {
        color: '#fff',
        fontFamily: 'Montserrat_700Bold',
        fontSize: 22
    },
    inputPass: {
        width: '90%',
        height: 42,
        padding: 8,
        borderWidth: 1,
        borderRadius: 5,
        borderTopRightRadius: 0,
        borderColor: '#e0e0e0',
        borderBottomRightRadius: 0,
        fontFamily: 'Montserrat_500Medium'
        }
  });

export default styles