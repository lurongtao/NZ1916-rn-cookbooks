import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  // swiper
  wrapper: {
    height: 170
  },

  containerHorizontal: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: 170
  },

  slideImg: {
    height: 170,
    width: '100%'
  },

  // hotcate
  container: {
    paddingTop: 20,
    paddingBottom: 10
  },

  gridContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },

  gridText: {
    fontSize: 16,
    margin: 6
  },

  gridImg: {
    width: 70,
    height: 70,
    borderRadius: 5
  },

  // top10
  top10Container: {
    paddingBottom: 44,
    backgroundColor: '#eee'
  },

  top10Head: {
    height: 50,
    paddingLeft: 10,
    justifyContent: 'flex-end',
  },

  top10HeadText: {
    fontSize: 18
  },

  top10ItemContainer: {
    flex: 1,
    paddingRight: 10
  },

  top10DesContainter: {
    marginLeft: 10,
    paddingTop: 10,
    paddingBottom: 10,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  },

  top10ImgContainer: {
    paddingLeft: 10,
    paddingTop: 10,
    flex: 1
  },

  Top10Img: {
    width: '100%',
    height: '100%',
  },

  top10Titie: {
    fontSize: 20
  },

  Top10Desc: {
    color: '#666'
  }
})