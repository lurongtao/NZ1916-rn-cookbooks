import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Provider } from 'mobx-react'
import store from './store/index'

import Index from './pages/index/Index'
import Cate from './pages/cate/Cate'
import Detail from './pages/detail/Detail'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator
          initialRouteName="Index"
          screenOptions={{
            title: '美食大全',
            headerStyle: {
              backgroundColor: '#ee7530'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 20
            }
          }}
        >
          <Stack.Screen
            name="Index"
            component={Index}
            options={{
              title: '首页'
            }}
          />
          <Stack.Screen
            name="Cate"
            component={Cate}
            options={{
              title: '热门'
            }}
          />
          <Stack.Screen
            name="Detail"
            component={Detail}
            options={{
              title: '详情'
            }}
          />
        </Stack.Navigator>
      </Provider>
    </NavigationContainer>
  )
}