import React, { Component, createRef } from 'react'
import { navigationContext } from '../../context/navigation'

import {
  inject,
  observer
} from 'mobx-react'

import {
  View,
  Text,
  Image,
  FlatList,
  TouchableOpacity
} from 'react-native'

import styles from './style_list'

interface Props {
  store?: any,
  navigation?: any
}

interface State {
  // 记录上拉加载更多的当前页码
  curPage: number, 

  // 页面显示的数据
  datalist: Array<object>, 

  // 控制下拉刷新的开关
  refresh: boolean 
}

let pageSize = 10

@inject('store')
@observer
export default class List extends Component<Props, State> {
  constructor (
    public props: Props, 
    public flatlist,
  ) {
    super(props)
    this.flatlist = createRef()
  }

  state = {
    curPage: 1,
    datalist: [],
    refresh: false
  }

  static contextType = navigationContext

  _onPress = (name: string) => {
    return () => {
      if (this.context) {
        this.context.navigation.push('Detail', {name})
      } else {
        this.props.navigation.push('Detail', {name})
      }
    }
  }
  
  // 渲染 Flatlist 组件数据
  _renderItem(item) {
    let {img, name, burdens, all_click, favorites} = item.item.data   
    return (
      <TouchableOpacity
        onPress={this._onPress(name)}
      >
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
      </TouchableOpacity>
    )
  }

  // 处理用户拉到底端的响应函数
  _handleReachEnd() {
    // 如果还有数据，一直加载
    // 加载更多，由于Mock数据问题，有ID重复问题
    // if (this.state.curPage < Math.ceil(this.props.store.list.length / pageSize)) {
    //   console.log(this.state.curPage)
    //   this.setState((state) => {
    //     return {
    //       curPage: state.curPage + 1
    //     }
    //   }, () => {
    //     this._loadData()
    //   })
    // }
  }

  // 下拉刷新的响应函数
  _handleRefresh() {
    this.setState({
      refresh: true
    })

    // 此处可以异步获取后端接口数据，具体实现思路见上拉加载。
    setTimeout(() => {
      this.setState({
        refresh: false
      })
    }, 2000)
  }

  // 加载数据
  _loadData() {
    let data = this.props.store.list.slice(0, this.state.curPage * pageSize)    
    let flatListData = data.map((value, index) => ({
        data: value,
        key: value.id
      })
    )
    this.setState({
      datalist: flatListData
    })
  }

  // 执行第一次数据加载
  componentDidMount() {
    setTimeout((params) => {
      this._loadData()
    }, 0)
  }

  render() {
    return (
      <View style={styles.container}>
        <FlatList
          ref={this.flatlist}
          renderItem={this._renderItem.bind(this)}
          data={this.state.datalist}
          refreshing={this.state.refresh}
          onEndReached={this._handleReachEnd.bind(this)}
          onEndReachedThreshold={1}
          onRefresh={this._handleRefresh.bind(this)}
        ></FlatList>
      </View>
    )
  }
}