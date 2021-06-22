import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        backgroundColor: '#fff',
        height: 100,
        width: '100%',
        elevation: 2,
        borderRadius: 10,
        marginRight: 30,
        marginLeft: 2,
        marginBottom: 5,
      },
    
    cover: {
        width: '40%',
        height: 100,
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
    },

    pet: {
        flex: 1, 
        marginTop: 10, 
        padding: 5
    },

    titlePet: {
        fontFamily: 'Montserrat_700Bold'
    },

    infosPet: {
        marginTop: 10
    },

    titleInfosPet: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: 10,
        marginTop: 4
    },

    content: {
        flexDirection: 'row',
        borderRadius: 10,
    },

    contentCards: {
        flex: 1,
        marginTop: 15
    },

    cards: {
        flexDirection: 'row', 
        marginTop: 10, 
        justifyContent: 'center',
        backgroundColor: '#F660AB',
        borderTopLeftRadius: 12,
        borderBottomLeftRadius: 12
    },

    titleCards: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: 10
    },
})

export default styles;

