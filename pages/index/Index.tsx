import React, { Component } from 'react'
import TabNavigator from 'react-native-tab-navigator'
import * as Device from 'expo-device';

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

interface Props {

}

interface State {
  selectedTab: string
}

class Index extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
  }

  state: State = {
    selectedTab: 'home'
  }

  componentDidMount() {
    // console.log(Device.deviceName)
  }

  render() {
    return (
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
          onPress={() => this.setState({ selectedTab: 'home' })}
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
          onPress={() => this.setState({ selectedTab: 'category' })}
        >
          <Cate></Cate>
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'map'}
          title="地图"
          titleStyle={styles.titleStyle}
          selectedTitleStyle={styles.selectedTitleStyle}
          renderIcon={() => <Img source={map} />}
          renderSelectedIcon={() => <Img source={mapActive} />}
          onPress={() => this.setState({ selectedTab: 'map' })}
        >
          {<View><Text>地图</Text></View>}
        </TabNavigator.Item>
        <TabNavigator.Item
          selected={this.state.selectedTab === 'more'}
          title="更多"
          titleStyle={styles.titleStyle}
          selectedTitleStyle={styles.selectedTitleStyle}
          renderIcon={() => <Img source={more} />}
          renderSelectedIcon={() => <Img source={moreActive} />}
          onPress={() => this.setState({ selectedTab: 'more' })}
        >
          {<View><Text>更多</Text></View>}
        </TabNavigator.Item>
      </TabNavigator>
    )
  }
}

export default Index