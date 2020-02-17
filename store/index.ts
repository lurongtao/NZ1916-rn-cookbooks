import {
  observable,
  action
} from 'mobx'

class Store {
  @observable
  list: Array<object> = []

  @action.bound
  setList(data: Array<object>) {
    this.list = data
  }
}

export default new Store()