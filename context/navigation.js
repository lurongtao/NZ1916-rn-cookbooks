import { createContext } from 'react'

const navigationContext = createContext()

let { Provider, Consumer } = navigationContext

export {
  navigationContext,
  Provider,
  Consumer
}