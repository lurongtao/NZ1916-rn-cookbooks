import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { Provider } from 'mobx-react'

import store from './store/index'

import Index from './pages/index/Index'

export default function App() {
  return (
    <Provider store={store}>
      <Index></Index>
    </Provider>
  )
}