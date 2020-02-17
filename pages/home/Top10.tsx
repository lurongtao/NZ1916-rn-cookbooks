import React, { Component } from 'react'
import { View, Text, Image } from 'react-native'
import { observer, inject } from 'mobx-react'
import { Grid } from '@ant-design/react-native'
import styles from './style_home.js'

interface Props {
  store?: any
}
interface State {
  
}

@inject('store')
@observer
export default class Top10 extends Component<Props, State> {
  state = {}

  _renderTop10(el, index) {
    return (
      <View style={styles.top10ItemContainer}>
        <View style={styles.top10ImgContainer}>
          <Image style={styles.Top10Img} source={{uri: el.img}}></Image>
        </View>
        <View style={styles.top10DesContainer}>
          <Text style={styles.top10Title}>{el.name}</Text>
          <Text style={styles.Top10Desc}>{el.all_click} {el.favorites}</Text>
        </View>
    </View>
    )
  }

  render() {
    return (
      <View style={styles.top10Container}>
        <View style={styles.top10Head}>
          <Text style={styles.top10HeadText}>精品好菜</Text>
        </View>
        <View style={styles.gridContainer}>
          <Grid
            data={this.props.store.list.slice(0, 10)}
            columnNum={2}
            hasLine={false}
            renderItem={this._renderTop10}
          ></Grid>
        </View>
      </View>
    )
  }
}
