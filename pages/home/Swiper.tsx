import React, { Component } from 'react'
import { Carousel } from '@ant-design/react-native'
import { get } from '../../utils/http'

import {
  View,
  Image
} from 'react-native'

import styles from './style_home'

interface Props {

}

interface State {
  list: Array<any>
}

class Swiper extends Component<Props, State> {
  state = {
    list: []
  }
  async componentDidMount() {
    let list = await get('http://gp145.qianfeng.com:3333/api/list')
    this.setState({
      list
    })
  }

  render() {
    return (
      <Carousel
        style={styles.wrapper}
        selectedIndex={0}
        autoplay
        infinite
      >
        {
          this.state.list.slice(0, 5).map((value, index) => {
            return (
              <View
                style={styles.containerHorizontal}
                key={value.id}
              >
                <Image
                  source={{uri: value.img}}
                  style={styles.slideImg}
                ></Image>
              </View>
            )
          })
        }
      </Carousel>
    )
  }
}

export default Swiper