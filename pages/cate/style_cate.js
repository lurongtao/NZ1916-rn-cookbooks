import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  flatListWrap: {
    paddingBottom: 44,
    flex: 1
  },

  listWrap: {
    flexDirection: 'row',
    padding: 10,
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderBottomColor: '#ddd'
  },

  imgWrap: {
    width: 135,
    paddingRight: 10
  },

  image: {
    width: 115,
    height: 75
  },

  descWrap: {
    flex: 1
  },

  title: {
    fontSize: 20,
    lineHeight: 30
  },

  subtitle: {
    fontSize: 16,
    color: "#666",
    lineHeight: 30,
    overflow: 'hidden'
  },

  desc: {
    fontSize: 12,
    color: '#666'
  }
})