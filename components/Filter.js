import { View, TextInput } from 'react-native'
import React from 'react'

const Filter = ({ inputplaceholder }) => {
  return (
    <View className='bg-gray-800 p-2 mt-3 rounded-md flex-auto'>
      <TextInput
        placeholder={inputplaceholder}
        keyboardType='default'
        placeholderTextColor={'gray'}
        color={'#fff9'}
        fontSize={20}
      />
    </View>
  )
}

export default Filter
