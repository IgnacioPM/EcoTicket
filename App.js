import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import SignIn from './src/screens/SignIn'
import Config from './src/screens/Config'
import CreateTicket from './src/screens/CreateTicket'
import TicketDetails from './src/screens/TicketDetails'
import TicketList from './src/screens/TicketList'

const Stack = createNativeStackNavigator()

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Home' component={SignIn} />
        <Stack.Screen name='Config' component={Config} />
        <Stack.Screen name='Create' component={CreateTicket} />
        <Stack.Screen name='Details' component={TicketDetails} />
        <Stack.Screen name='List' component={TicketList} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
