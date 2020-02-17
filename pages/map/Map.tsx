import React, { Component } from 'react'
import { View } from 'react-native'
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
          source={{ uri: 'https://map.baidu.com/search/%E7%BE%8E%E9%A3%9F/@12959238.56,4825347.47,12z?querytype=s&da_src=shareurl&wd=%E7%BE%8E%E9%A3%9F&c=131&src=0&pn=0&sug=0&l=12&b=(12905478.56,4795011.47;13012998.56,4855683.47)&from=webmap&biz_forward=%7B%22scaler%22:2,%22styles%22:%22pl%22%7D&device_ratio=2' }}
          style={{ 
            width: '100%',
            height: '100%'
          }}
        />
      </View>
    )
  }
}
