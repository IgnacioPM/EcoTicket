import { View, Text, TextInput } from 'react-native'
import React from 'react'
import { useColorScheme } from 'nativewind'

const TextInputWLabel = ({
  inputTitle,
  inputplaceholder,
  inputKeyboardType,
}) => {
  const { colorScheme } = useColorScheme()
  return (
    <View className='flex-auto'>
      <Text className='dark:text-gray-300 text-xl mt-3 text-left'>
        {inputTitle}
      </Text>
      <View className='dark:bg-gray-900 border border-gray-700 p-2 rounded-md'>
        <TextInput
          placeholder={inputplaceholder}
          keyboardType={inputKeyboardType}
          placeholderTextColor={colorScheme === 'dark' ? '#d1d5db' : '#111827'}
          color={colorScheme === 'dark' ? '#d1d5db' : '#111827'}
          fontSize={20}
        />
      </View>
    </View>
  )
}

export default TextInputWLabel
