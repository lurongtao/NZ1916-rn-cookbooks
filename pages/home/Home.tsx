import React, { Component } from 'react'
import { ScrollView, StatusBar } from 'react-native'

import Swiper from './Swiper'
import HotCate from './HotCate'
import Top10 from './Top10'

interface Props {
  navigation?: any
}

interface State {
  
}

class Home extends Component<Props, State> {
  render() {
    return (
      <ScrollView>
        <StatusBar backgroundColor="blue" barStyle="light-content" />
        <Swiper></Swiper>
        {/* 将路由信息传给HotCate */}
        <HotCate { ...this.props }></HotCate>
        <Top10></Top10>
      </ScrollView>
    )
  }
}

export default Home