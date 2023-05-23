import { View, Text } from 'react-native'
import React from 'react'

const DateLabel = ({ dateTitle, date }) => {
  return (
    <View>
      <Text className='dark:text-gray-300 text-xl text-left'>{dateTitle}</Text>
      <Text className='dark:text-gray-400 text-lg text-left'>{date}</Text>
    </View>
  )
}

export default DateLabel
