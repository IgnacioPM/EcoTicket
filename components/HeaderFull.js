import { View, Text, Pressable } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { styled, useColorScheme } from 'nativewind'
import { useNavigation } from '@react-navigation/native'

const StyledPressable = styled(Pressable)
const StyledText = styled(Text)

const HeaderFull = ({ headerTitle }) => {
  const { colorScheme, toggleColorScheme } = useColorScheme()
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <View className='flex-row mt-4 border-b border-gray-300 w-full'>
      <Pressable
        className='dark:bg-black p-4'
        onPress={() => navigation.goBack()}
      >
        <Text className='text-gray-300 font-bold text-lg'>←</Text>
      </Pressable>
      <Text className='text-gray-300 font-bold text-3xl text-center flex-1 mt-3'>
        {headerTitle}
      </Text>
      <Pressable onPress={toggleColorScheme} className='dark:bg-black p-4'>
        <Text className='font-bold text-lg'>{` ${
          colorScheme === 'dark' ? '🌙' : '🌞'
        }`}</Text>
      </Pressable>
    </View>
  )
}

export default HeaderFull
