import React, { Component, createRef } from 'react'
import { observer, inject } from 'mobx-react'
import { Camera } from 'expo-camera'

import { Store } from '../../store/index'

import { View, Image, Text, Switch, TouchableOpacity } from 'react-native'

interface Props {
  store?: Store
}
interface State {
  isTakePic: boolean,
  type: boolean,
  picUri: string
}

@inject('store')
@observer
export default class More extends Component<Props, State> {
  constructor(props: Props, public camera) {
    super(props)
    this.camera = createRef()
  }

  state = {
    isShow: true,
    isTakePic: false,
    type: Camera.Constants.Type.back,
    picUri: 'http://placehold.it/240x180'
  }

  _handleValueChange = (e) => {
    this.props.store.setVisible(e)
  }

  _takePictureScene = () => {
    this.setState({
      isTakePic: true
    })
  }

  _tackPicture = async () => {
    let result = await this.camera.takePictureAsync()
    this.setState({
      isTakePic: false,
      picUri: result.uri
    })
  }

  componentDidMount() {
    
  }

  render() {
    return (
      <>
        {
          this.state.isTakePic
            ? (
              <Camera
                style={{
                  flex: 1,
                  justifyContent: 'flex-end',
                  alignItems: 'center'
                }}
                type={this.state.type}
                ref={ ref => {
                  this.camera = ref
                }}
              >
                <TouchableOpacity
                  onPress={this._tackPicture}
                >
                  <View
                    style={{
                      width: 80,
                      height: 80,
                      borderRadius: 40,
                      backgroundColor: '#df7b42'
                    }}
                  >
                    <Text
                      style={{
                        lineHeight: 80,
                        textAlign: 'center',
                        color: '#fff'
                      }}
                    >拍照</Text>
                  </View>
                </TouchableOpacity>
              </Camera>
            )
            : (
              <View>
                <View style={{
                  flexDirection: 'row',
                  justifyContent: 'flex-start',
                  alignContent:'flex-start',
                  padding: 20
                }}>
                  <View
                    style={{
                      height: 30,
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <Text style={{marginRight: 10}}>是否显示地图</Text>
                  </View>
                  <Switch
                    value={this.props.store.isShow}
                    onValueChange={this._handleValueChange}
                  ></Switch>
                </View>
                <TouchableOpacity
                  onPress={this._takePictureScene}
                >
                  <View
                    style={{
                      marginLeft: 20,
                      width: 80,
                      height: 40,
                      backgroundColor: '#df7b42',
                      justifyContent: 'center',
                      alignItems: 'center'
                    }}
                  >
                    <Text style={{color: '#fff'}}>拍照</Text>
                  </View>
                </TouchableOpacity>
                <View>
                  <Image
                    source={{uri: this.state.picUri}}
                    style={{
                      marginLeft: 20,
                      marginTop: 20,
                      width: 240,
                      height: 180
                    }}
                  ></Image>
                </View>
              </View>
            )
        }
      </>
    )
  }
}
