import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    paddingBottom: 34
  },

  //main
    mainImg: {
      width: '100%',
      height: 250
    },

    mainInfo: {
      height: 170,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#fff'
    },

    mainInfoName: {
      fontSize: 24
    },

    mainInfoSubTitle: {
      marginTop: 10,
      fontSize: 12,
      color: '#666'
    },

  // button
    mainInfoButtonWrap: {
      width: 140,
      height: 40,
      backgroundColor: '#df7b42',
      marginTop: 20,
      borderRadius: 6
    },

    mainInfoButton: {
      textAlign: 'center',
      lineHeight: 40,
      color: '#fff',
      fontSize: 16
    },
  
  // info
    infoWrap: {
      marginTop: 15,
      backgroundColor: '#fff',
      paddingTop: 25,
      paddingLeft: 15,
      paddingBottom: 25
    },

    infoTitle: {
      fontSize: 20,
      fontWeight: 'bold',
      marginBottom: 29
    },

    infoText: {
      fontSize: 16,
      lineHeight: 20,
      paddingBottom: 20
    },

    makesTitle: {
      fontSize: 16,
      paddingRight: 30
    },

    makesImg: {
      width: 300,
      height: 210,
      margin: 20
    }
})