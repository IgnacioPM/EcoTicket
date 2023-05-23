import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import MyNavigationContainer from './components/BottomTab'

const Stack = createNativeStackNavigator()

export default function App() {
  return <MyNavigationContainer />
}
