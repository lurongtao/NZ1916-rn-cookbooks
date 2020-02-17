import React, { Component } from 'react'
import { View, Text, FlatList, Image, StyleSheet } from 'react-native'
import { observer, inject } from 'mobx-react'
import styles from './style_cate.js'

interface Props {
  store?: any
}
interface State {
  dataList: Array<object>,
  refresh: boolean,
  curPage: number
}

@inject('store')
@observer
export default class Cate extends Component<Props, State> {
  state: State = {
    dataList: [],
    refresh: false,
    curPage: 1
  }

  _loadData() {
    let data = this.props.store.list.slice(0, this.state.curPage * 15)
    let flatListData = data.map((value, index) => ({
      data: value,
      key: value.id
    }))
    this.setState({
      dataList: flatListData
    })
  }

  _renderItem = (el) => {
    let { img, name, burdens, all_click, favorites } = el.item.data
    return (
      <View style={styles.listWrap}>
        <View style={styles.imgWrap}>
          <Image style={styles.image} source={{uri: img}}></Image>
        </View>
        <View style={styles.descWrap}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle} numberOfLines={1}>{burdens}</Text>
          <Text style={styles.desc}>{all_click} {favorites}</Text>
        </View>
      </View>
    )
  }

  _handleRefresh = () => {
    this.setState({
      refresh: true
    })

    setTimeout(() => {
      this.setState({
        refresh: false
      })
    }, 2000)
  }

  _handleReachEnd = () => {
    // if (this.state.curPage < Math.ceil(this.props.store.list.length / 15)) {
    //   this.setState((state) => {
    //     return {
    //       curPage: state.curPage + 1
    //     }
    //   }, () => {
    //     this._loadData()
    //   })
    // }
  }

  componentDidMount() {
    this._loadData()
  }

  render() {
    return (
      <View style={styles.flatListWrap}>
        <FlatList
          renderItem={this._renderItem}
          data={this.state.dataList}
          refreshing={this.state.refresh}
          onRefresh={this._handleRefresh}
          onEndReachedThreshold={1}
          onEndReached={this._handleReachEnd}
        ></FlatList>
      </View>
    )
  }
}
