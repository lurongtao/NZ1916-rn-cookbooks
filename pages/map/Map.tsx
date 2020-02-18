import React, { Component } from 'react'

import { View, Text } from 'react-native'

import { WebView } from 'react-native-webview'

interface Props {
  
}
interface State {
  
}

export default class Map extends Component<Props, State> {
  state = {}

  render() {
    return (
      <View
        style={{
          width: '100%',
          flex: 1
        }}
      >
        <WebView
          source={{uri: 'https://map.baidu.com/poi/%E5%85%A8%E8%81%9A%E5%BE%B7(%E5%A4%A9%E5%AE%89%E9%97%A8%E5%BA%97)/@12959238.56,4825347.47,11.92z?uid=0ce65c2df9ca8b402d473321&ugc_type=3&ugc_ver=1&device_ratio=2&compat=1&querytype=detailConInfo&da_src=shareurl'}}
          style={{
            width: '100%',
            height: '100%'
          }}
        ></WebView>
      </View>
    )
  }
}
