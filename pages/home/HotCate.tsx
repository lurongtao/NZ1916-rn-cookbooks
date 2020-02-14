import React, { Component } from 'react'
import { Grid } from '@ant-design/react-native'
import { get } from '../../utils/http'

import styles from './style_home'

import {
  View,
  Text,
  Image,
  StyleSheet
} from 'react-native'

interface Props {
  
}
interface State {
  hotCate: Array<object>
}

export default class HotCate extends Component<Props, State> {
  state = {
    hotCate: []
  }

  _renderItem(el, index) {
    return (
      <View
        style={styles.container}
      >
        <Image source={{uri: 'http://placehold.it/100x100'}} style={styles.gridImg}></Image>
        <Text style={styles.gridText}>{el.title}</Text>
      </View>
    )
  }

  async componentDidMount() {
    let hotCate = await get('http://gp145.qianfeng.com:3333/api/hotcate')
    this.setState({
      hotCate
    })
  }

  render() {
    return (
      <View>
        <Grid
          data={this.state.hotCate}
          renderItem={this._renderItem}
          hasLine={false}
        ></Grid>
      </View>
    )
  }
}
