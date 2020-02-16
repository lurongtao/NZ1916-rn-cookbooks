import {
  observable,
  action,
  computed
} from 'mobx'

class Store {
  // swiper 与 top10 共享的数据
  @observable
  list = []

  // swiper 数据过滤
  @computed
  get swiper() {
    return this.list.slice(0, 5).map((value, index) => {
      return {
        img: value.img
      }
    })
  }

  // top10 数据过滤
  @computed
  get top10() {
    return this.list.slice(0, 10).map((value, index) => {
      return {
        img: value.img,
        all_click: value.all_click,
        favorites: value.favorites,
        name: value.name
      }
    })
  }

  // 装载 list 数据
  @action.bound
  setList(data) {
    this.list = data
  }  
}

export default new Store()