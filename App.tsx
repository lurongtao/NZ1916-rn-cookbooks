import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'

import { Provider } from 'mobx-react'
import store from './store/'

import Index from './pages/index/Index'
import List from './pages/list/List'
import Detail from './pages/detail/Detail'

const Stack = createStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Stack.Navigator
          screenOptions={{ 
            headerStyle: {
              backgroundColor: '#ee7530'
            },
            headerTintColor: '#fff',
            headerTitleStyle: {
              fontWeight: 'bold',
              fontSize: 16
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
            name="List"
            component={List}
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