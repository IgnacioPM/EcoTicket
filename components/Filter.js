import { View, TextInput } from 'react-native'
import React from 'react'
import { useColorScheme } from 'nativewind'

const Filter = ({ inputplaceholder }) => {
  const { colorScheme } = useColorScheme()
  return (
    <View className='dark:bg-gray-900 border border-gray-700 p-2 mt-3 rounded-md flex-auto'>
      <TextInput
        placeholder={inputplaceholder}
        keyboardType='default'
        placeholderTextColor={'gray'}
        color={colorScheme === 'dark' ? '#fff9' : '#000'}
        fontSize={20}
      />
    </View>
  )
}

export default Filter
