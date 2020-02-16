import React, { Component } from 'react'
import { Carousel } from '@ant-design/react-native'
import { get } from '../../utils/http'

import { observer, inject } from 'mobx-react'

import {
  View,
  Image
} from 'react-native'

import styles from './style_home'

interface Props {
  // store 作为组件的 props
  store?: any
}

interface State {
  
}

// 注入 store 与 将类变为可观察的对象
@inject('store')
@observer
class Swiper extends Component<Props, State> {
  state = {
    list: []
  }
  
  async componentDidMount() {
    let list = await get('http://localhost:9000/api/swiper')
    this.props.store.setList(list)
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
          this.props.store.swiper.map((value, index) => {
            return (
              <View
                style={styles.containerHorizontal}
                key={value.id + index}
              >
                <Image
                  source={{uri: value.img}}
                  style={styles.slideImg}
                  resizeMode='cover'
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