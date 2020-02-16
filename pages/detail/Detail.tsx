import React, { Component } from 'react'
import { get } from '../../utils/http'
import {
  View,
  ScrollView,
  Text,
  Image,
  StatusBar,
  TouchableOpacity,
  Alert
} from 'react-native'

import styles from './style_detail'

interface Props {
  navigation?: any,
  route?: any
}
interface State {
  detail: {}
}

export default class Detail extends Component<Props, State> {
  state = {
    detail: null
  }

  async componentDidMount() {
    let result = await get('http://localhost:9000/api/detail')
    this.setState({
      detail: result
    })
    // 根据路由传递过来参数，修改本页的 title
    this.props.navigation.setOptions({ title: this.props.route.params.name })
  }
  
  render() {
    let detail = this.state.detail
    return (
      <>
        {
          detail && (
            <ScrollView>
              <View style={styles.container}>
                <StatusBar backgroundColor="blue" barStyle="light-content" />
                <Image
                  source={{uri: detail.img}}
                  style={styles.mainImg}
                ></Image>
                <View style={styles.mainInfo}>
                  <View>
                    <Text style={styles.mainInfoName}>{detail.name}</Text>
                  </View>
                  <View>
                    <Text style={styles.mainInfoSubTitle}>{detail.all_click}浏览/{detail.favorites}收藏</Text>
                  </View>
                  <TouchableOpacity
                    onPress={() => Alert.alert('已经收藏.')}
                  >
                    <View style={styles.mainInfoButtonWrap}>
                      <Text style={styles.mainInfoButton}>收藏</Text>
                    </View>
                  </TouchableOpacity>
                </View>
                <View style={styles.infoWrap}>
                  <View>
                    <Text style={styles.infoTitle}>心得</Text>
                  </View>
                  <View>
                    <Text style={styles.infoText}>
                      {detail.info}
                    </Text>
                  </View>

                  <View>
                    <Text style={[styles.infoTitle, {marginTop: 20}]}>做法</Text>
                  </View>
                  <View>
                    {
                      detail.makes.map((value) => {
                        return (
                          <View
                            key={value.num}
                          >
                            <View>
                              <Text style={styles.makesTitle}>{value.num} {value.info}</Text>
                            </View>
                            <View>
                              <Image 
                                source={{uri: value.img}}
                                style={styles.makesImg}
                              ></Image>
                            </View>
                          </View>
                        )
                      })
                    }
                  </View>
                </View>
              </View>
            </ScrollView>
          )
        }
      </>
    )
  }
}