import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
    header: {
        paddingHorizontal: 15,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        marginVertical: 20,
    },

    inputArea: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '98%',
        backgroundColor: '#fff',
        elevation: 2,
        paddingHorizontal: 10,
        height: 50,
        borderRadius: 10,
    },

    input: {
        paddingHorizontal: 10,
        fontSize: 18,
        width: '90%',
        fontFamily: 'Montserrat_400Regular'
    },

    content: {
        paddingHorizontal: 15,
        marginTop: 30,
        flexDirection: 'row',
        alignItems: 'center'
    }
})

export default styles;