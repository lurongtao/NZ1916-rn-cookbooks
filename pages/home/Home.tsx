import React, { Component } from 'react'
import Swiper from './Swiper'
import HotCate from './HotCate'

interface Props {

}

interface State {
  list: Array<any>
}

class Home extends Component<Props, State> {
  render() {
    return (
      <>
        <Swiper></Swiper>
        <HotCate></HotCate>
      </>
    )
  }
}

export default Home