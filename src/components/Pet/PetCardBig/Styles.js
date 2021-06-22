import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    
    container: {
        marginTop: 10,
        backgroundColor: '#fff',
        height: 200,
        width: 200,
        elevation: 1,
        borderRadius: 10,
        padding: 10,
        marginRight: 30,
        marginLeft: 2,
        marginBottom: 5
    },

    cover: {
        width: 180,
        height: 120,
        borderRadius: 12
    },

    header: {
        flexDirection: 'row',
        marginTop: 5,
        alignItems: 'center',
        width: '100%',

    },

    content: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        width: '100%'
    },

    title: {
        fontFamily: 'Montserrat_700Bold',
        fontSize: 16,
        color: 'black',
        width: '100%'
    },

    subTitle: {
        fontFamily: 'Montserrat_400Regular',
        fontSize: 12,
        color: '#4f4a4a'
    },

    dot: {
        width: 4,
        height: 4,
        borderRadius: 4,
        backgroundColor: '#4f4a4a',
        marginHorizontal: 4
    },
})

export default styles;