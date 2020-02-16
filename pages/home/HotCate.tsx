import React, { Component } from 'react'
import { Grid } from '@ant-design/react-native'
import { get } from '../../utils/http'
import { Consumer } from '../../context/navigation'

import styles from './style_home'

import {
  View,
  Text,
  Image
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
        style={styles.gridContainer}
      >
        {el.img ? <Image source={{uri: el.img}} style={styles.gridImg}></Image> : null}
        <Text style={styles.gridText}>{el.title}</Text>
      </View>
    )
  }

  _onPress = (navigation) => {
    return () => {
      navigation.push('List')
    }
  }
  

  async componentDidMount() {
    let hotCate = await get('http://localhost:9000/api/hotcate')

    // 补全最后一项数据
    hotCate.push({
      img: '',
      title: '更多...'
    })

    this.setState({
      hotCate
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <Consumer>
          {
            ({navigation}) => {
              return (
                <Grid
                  data={this.state.hotCate}
                  renderItem={this._renderItem}
                  hasLine={false}
                  onPress={this._onPress(navigation)}
                ></Grid>
              )
            }
          }
        </Consumer>
      </View>
    )
  }
}
