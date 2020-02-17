import React, { Component } from 'react'
import { Grid } from '@ant-design/react-native'
import { get } from '../../utils/http'
import { Consumer } from '../../context/navigation'

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
        <Image source={{uri: el.img}} style={styles.gridImg}></Image>
        <Text style={styles.gridText}>{el.title}</Text>
      </View>
    )
  }

  _onPress = (navigation) => {
    return (e) => {
      navigation.push('Cate', {title: e.title})
    }
  }

  async componentDidMount() {
    let hotCate = await get('http://localhost:9000/api/hotcate')
    this.setState({
      hotCate
    })
  }

  render() {
    return (
      <View style={styles.hotCateGridWrap}>
        <Consumer>
          {
            ({navigation}) => (
              <Grid
                data={this.state.hotCate}
                renderItem={this._renderItem}
                hasLine={false}
                onPress={this._onPress(navigation)}
              ></Grid>
            )
          }
        </Consumer>
      </View>
    )
  }
}
