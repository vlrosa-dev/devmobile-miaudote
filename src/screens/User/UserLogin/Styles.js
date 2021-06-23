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
    },
    loginTittle: {
        fontSize: 35,
        marginTop: Platform.OS === 'android' ? '13%' : '20%',
        marginBottom: Platform.OS === 'android' ? '13%' : '15%'
    },
    input: {
        width: '90%',
        height: 42,
        marginBottom: 20,
        padding: 8,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#e0e0e0'    
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
        color: '#696969'
    },
    loginButton: {
        marginTop: '70%',
        backgroundColor: '#f660ab',
        width: '90%',
        height: 42,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5
    },
    loginText: {
        color: '#fff',
        fontSize: 17
    },
    inputPass: {
        width: '90%',
        height: 42,
        padding: 8,
        borderWidth: 1,
        borderRadius: 5,
        borderTopRightRadius: 0,
        borderColor: '#e0e0e0',
        borderBottomRightRadius: 0
        }
  });

export default styles