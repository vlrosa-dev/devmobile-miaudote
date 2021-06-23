import { StyleSheet } from "react-native"

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  
  swiperContent: {
    flexDirection: 'row',
    height: 340,
    width: '100%'
  },

  headerContent: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 20
  },

  headerTitle: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 20
  },

  content: {
    paddingHorizontal: 15,
    flexDirection: 'row',
    alignItems: 'center',
    width: '100%',
    marginTop: 20
  },

  contentTitleInfo: {
    fontFamily: 'Montserrat_700Bold',
    fontSize: 12
  },

  contentSubTitleInfo: {
    fontFamily: 'Montserrat_400Regular',
    fontSize: 14
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