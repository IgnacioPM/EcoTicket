import { View, Text, TextInput } from 'react-native'
import React from 'react'

const TextInputWLabel = ({
  inputTitle,
  inputplaceholder,
  inputKeyboardType,
}) => {
  return (
    <View className='flex-auto'>
      <Text className='text-gray-300 text-xl mt-3 text-left'>{inputTitle}</Text>
      <View className='bg-gray-800 p-2 rounded-md'>
        <TextInput
          placeholder={inputplaceholder}
          keyboardType={inputKeyboardType}
          placeholderTextColor={'gray'}
          color={'#fff9'}
          fontSize={20}
        />
      </View>
    </View>
  )
}

export default TextInputWLabel
