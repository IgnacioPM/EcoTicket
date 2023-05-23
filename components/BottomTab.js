import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import React, { useEffect, useRef } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import Icon, { Icons } from '../components/Icons'
import * as Animatable from 'react-native-animatable'

import CreateTicket from '../src/screens/CreateTicket'
import Config from '../src/screens/Config'
import TicketList from '../src/screens/TicketList'
import TicketDetails from '../src/screens/TicketDetails'
import SignIn from '../src/screens/SignIn'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { BlurView } from 'expo-blur'
import { useColorScheme } from 'nativewind'

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()

const TabArr = [
  {
    route: 'Crear',
    label: 'Crear',
    type: Icons.MaterialCommunityIcons,
    icon: 'plus',
    component: CreateTicket,
  },
  {
    route: 'Boletas',
    label: 'Lista',
    type: Icons.MaterialCommunityIcons,
    icon: 'view-list',
    component: TicketList,
  },
  {
    route: 'TicketDetails',
    label: 'Estadísticas',
    type: Icons.MaterialCommunityIcons,
    icon: 'file-chart',
    component: TicketDetails,
  },
  {
    route: 'Config',
    label: 'Config',
    type: Icons.MaterialCommunityIcons,
    icon: 'cog',
    component: Config,
  },
]

const animate1 = {
  0: { scale: 0.5, translateY: 7 },
  0.92: { translateY: -34 },
  1: { scale: 1.2, translateY: -24 },
}
const animate2 = {
  0: { scale: 1.2, translateY: -24 },
  1: { scale: 1, translateY: 7 },
}

const circle1 = {
  0: { scale: 0 },
  0.3: { scale: 0.9 },
  0.5: { scale: 0.2 },
  0.8: { scale: 0.7 },
  1: { scale: 1 },
}
const circle2 = { 0: { scale: 1 }, 1: { scale: 0 } }

const TabButton = (props) => {
  const { item, onPress, accessibilityState } = props
  const focused = accessibilityState.selected
  const viewRef = useRef(null)
  const circleRef = useRef(null)
  const textRef = useRef(null)

  useEffect(() => {
    if (focused) {
      viewRef.current.animate(animate1)
      circleRef.current.animate(circle1)
      textRef.current.transitionTo({ scale: 1 })
    } else {
      viewRef.current.animate(animate2)
      circleRef.current.animate(circle2)
      textRef.current.transitionTo({ scale: 0 })
    }
  }, [focused])

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}
    >
      <Animatable.View ref={viewRef} duration={500} style={styles.container}>
        <View style={styles.btn}>
          <Animatable.View ref={circleRef} style={styles.circle} />
          <Icon
            type={item.type}
            name={item.icon}
            color={focused ? '#f0f6ff' : '#b5bac0'}
          />
        </View>
        <Animatable.Text ref={textRef} style={styles.text}>
          {item.label}
        </Animatable.Text>
      </Animatable.View>
    </TouchableOpacity>
  )
}

function MyTabs() {
  const { colorScheme } = useColorScheme()
  return (
    <Tab.Navigator
      screenOptions={{
        // tabBarHideOnKeyboard: true,
        // tabBarBackground: () => <BlurView tint='dark' intensity={100} />,
        headerShown: false,
        tabBarStyle: {
          paddingTop: 10,
          height: 70,
          position: 'relative',
          backgroundColor: colorScheme === 'dark' ? '#111827' : '#e5e7eb',
        },
      }}
    >
      {TabArr.map((item, index) => {
        return (
          <Tab.Screen
            key={index}
            name={item.route}
            component={item.component}
            options={{
              tabBarShowLabel: false,
              tabBarButton: (props) => <TabButton {...props} item={item} />,
            }}
          />
        )
      })}
    </Tab.Navigator>
  )
}

function AppNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name='Home'
        component={SignIn}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Details'
        component={TicketDetails}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name='Main'
        component={MyTabs}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  )
}

export default function MyNavigationContainer() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn: {
    width: 50,
    height: 50,
    borderRadius: 25,
    borderWidth: 1,
    borderColor: '#d1d5db',
    backgroundColor: '#425775',
    justifyContent: 'center',
    alignItems: 'center',
  },
  circle: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#225cff',
    borderRadius: 25,
  },
  text: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#2056f0',
  },
})
