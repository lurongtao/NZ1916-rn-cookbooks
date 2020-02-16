import React, { Component } from 'react'
import { Grid } from '@ant-design/react-native'
import { observer, inject } from 'mobx-react'
import { navigationContext } from '../../context/navigation'

import {
  View,
  Text,
  Image
} from 'react-native'

import styles from './style_home.js'

interface Props {
  // store 作为组件的 props
  store?: any
}

interface State {
  
}

// 注入 store 与 将类变为可观察的对象
@inject('store')
@observer
class Top10 extends Component<Props, State> {

  static contextType = navigationContext

  _renderTop10(el, index) {
    return (
      <View style={styles.top10ItemContainer}>
        <View style={styles.top10ImgContainer}>
          <Image style={styles.Top10Img} source={{uri: el.img}}></Image>
        </View>
        <View style={styles.top10DesContainter}>
          <Text style={styles.top10Titie}>{el.name}</Text>
          <Text style={styles.Top10Desc}>{el.all_click} {el.favorites}</Text>
        </View>
      </View>
    )
  }

  _onPress = (e) => {
    this.context.navigation.push('Detail', { name: e.name })
  }

  render() {   
    return (
      <View style={styles.top10Container}>
        <View style={styles.top10Head}>
          <Text style={styles.top10HeadText}>精品好菜</Text>
        </View>
        <View style={styles.gridContainer}>
          <Grid
            data={this.props.store.top10}
            columnNum={2}
            hasLine={false}
            renderItem={this._renderTop10}
            onPress={this._onPress}
          />
        </View>
      </View>
    )
  }
}

export default Top10