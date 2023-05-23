import { View, Text } from 'react-native'
import React from 'react'

const InfoLabel = ({ infoTitle, info }) => {
  return (
    <View>
      <Text className='dark:text-gray-300 text-xl text-left'>{infoTitle}</Text>
      <Text className='dark:text-gray-400 text-lg text-left'>{info}</Text>
    </View>
  )
}

export default InfoLabel
