import { Text, TouchableOpacity } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

const ButtonFull = ({ navButton, buttonTitle }) => {
  const navigation = useNavigation()

  return (
    <TouchableOpacity
      className=' bg-blue-700 py-2 rounded-md my-4'
      onPress={() => navigation.navigate(`${navButton}`)}
    >
      <Text className='text-xl text-center font-bold text-gray-300'>
        {buttonTitle}
      </Text>
    </TouchableOpacity>
  )
}

export default ButtonFull
