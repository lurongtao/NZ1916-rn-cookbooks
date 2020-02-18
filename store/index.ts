import { AsyncStorage } from 'react-native'

import {
  observable,
  action
} from 'mobx'

class Store {
  @observable
  list: Array<object> = []

  @observable
  isShow: boolean = true

  @action.bound
  setList(data: Array<object>) {
    this.list = data
  }

  @action.bound
  setVisible(status) {
    this.isShow = status
    AsyncStorage.setItem('isShow', status.toString())
  }
}

export default new Store()

export {
  Store
}