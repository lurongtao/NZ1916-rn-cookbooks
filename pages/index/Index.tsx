import React, { Component } from 'react'
import TabNavigator from 'react-native-tab-navigator'
import * as Device from 'expo-device'
import { Provider } from '../../context/navigation'
import { observer, inject } from 'mobx-react'
import { AsyncStorage } from 'react-native'

import {
  View,
  Text
} from 'react-native'

import {
  Img
} from './styled_index'
import styles from './style_index'

import cookbook from '../../assets/images/cookbook.png'
import cookbookActive from '../../assets/images/cookbook-active.png'
import category from '../../assets/images/menu.png'
import categoryActive from '../../assets/images/menu-active.png'
import map from '../../assets/images/location.png'
import mapActive from '../../assets/images/location-active.png'
import more from '../../assets/images/more.png'
import moreActive from '../../assets/images/more-active.png'

import Home from '../home/Home'
import Cate from '../cate/Cate'
import Map from '../map/Map'
import More from '../more/More'

interface Props {
  navigation?: any,
  store: any
}

interface State {
  selectedTab: string
}

@inject('store')
@observer
class Index extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }

  state: State = {
    selectedTab: 'home'
  }

  async componentDidMount() {
    let isShow = JSON.parse(await AsyncStorage.getItem('isShow'))
    this.props.store.setVisible(isShow)
  }

  render() {
    return (
      <Provider value={{...this.props}}>
        <TabNavigator
          tabBarStyle={Device.deviceName === 'iPhone Xʀ' ? styles.tabBarStyle : null}
        >
          <TabNavigator.Item
            selected={this.state.selectedTab === 'home'}
            title="美食大全"
            titleStyle={styles.titleStyle}
            selectedTitleStyle={styles.selectedTitleStyle}
            renderIcon={() => <Img source={cookbook} />}
            renderSelectedIcon={() => <Img source={cookbookActive} />}
            onPress={() => {
              this.setState({ selectedTab: 'home' })
              this.props.navigation.setOptions({title: '美食大全'})
            }}
          >
            <Home></Home>
          </TabNavigator.Item>
          <TabNavigator.Item
            selected={this.state.selectedTab === 'category'}
            title="热门"
            titleStyle={styles.titleStyle}
            selectedTitleStyle={styles.selectedTitleStyle}
            renderIcon={() => <Img source={category} />}
            renderSelectedIcon={() => <Img source={categoryActive} />}
            onPress={() => {
              this.setState({ selectedTab: 'category' })
              this.props.navigation.setOptions({title: '热门'})
            }}
          >
            <Cate></Cate>
          </TabNavigator.Item>
          {
            this.props.store.isShow
              ? (
                <TabNavigator.Item
                  selected={this.state.selectedTab === 'map'}
                  title="地图"
                  titleStyle={styles.titleStyle}
                  selectedTitleStyle={styles.selectedTitleStyle}
                  renderIcon={() => <Img source={map} />}
                  renderSelectedIcon={() => <Img source={mapActive} />}
                  onPress={() => {
                    this.setState({ selectedTab: 'map' })
                    this.props.navigation.setOptions({title: '美食地图'})
                  }}
                >
                  <Map></Map>
                </TabNavigator.Item>
              )
              : null
          }
          <TabNavigator.Item
            selected={this.state.selectedTab === 'more'}
            title="更多"
            titleStyle={styles.titleStyle}
            selectedTitleStyle={styles.selectedTitleStyle}
            renderIcon={() => <Img source={more} />}
            renderSelectedIcon={() => <Img source={moreActive} />}
            onPress={() => {
              this.setState({ selectedTab: 'more' })
              this.props.navigation.setOptions({title: '更多'})
            }}
          >
            <More></More>
          </TabNavigator.Item>
        </TabNavigator>
      </Provider>
    )
  }
}

export default Index