import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 25
    },
  
    headerTitle: {
        fontFamily: 'Montserrat_500Medium',
        fontSize: 22
    },
  
    headerInfo: {
        width: '100%',
        marginTop: 30
    },
  
    info: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 16,
        color: '#313131'
    },
  
    input: {
        marginTop: 10,
        width: '100%',
        height: 100,
        marginBottom: 20,
        padding: 8,
        borderRadius: 5,
        borderWidth: 1,
        borderColor: '#e0e0e0',
        fontFamily: 'Montserrat_500Medium'    
    },
  
    button: {
        backgroundColor: '#F660AB',
        alignItems: 'center',
        padding: 12,
        borderRadius: 10,
        height: 60,
        justifyContent: 'center'
    },
  
    textButton: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 18,
        color: '#fff',
    }
  
})

export default styles;