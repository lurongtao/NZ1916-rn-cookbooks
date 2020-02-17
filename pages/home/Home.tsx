import React, { Component } from 'react'
import Swiper from './Swiper'
import HotCate from './HotCate'
import Top10 from './Top10'
import { ScrollView } from 'react-native'

interface Props {

}

interface State {
  list: Array<any>
}

class Home extends Component<Props, State> {
  render() {
    return (
      <ScrollView>
        <Swiper></Swiper>
        <HotCate></HotCate>
        <Top10></Top10>
      </ScrollView>
    )
  }
}

export default Home