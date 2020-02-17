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
  store?: any
}

interface State {
  
}

@inject('store')
@observer
class Swiper extends Component<Props, State> {
  state = {
    
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
          this.props.store.list.slice(0, 5).map((value, index) => {
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