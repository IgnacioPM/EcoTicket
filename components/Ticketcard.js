import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

const Ticketcard = ({
  name,
  phone,
  brand,
  model,
  reported_damage,
  date_received,
}) => {
  const navigation = useNavigation()
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Details')}>
      <View className='mt-3 dark:bg-gray-900 border border-gray-700 items-center py-2 rounded-md'>
        <Text className='dark:text-gray-300 text-2xl text-center'>{name}</Text>
        <Text className='dark:text-gray-400 text-lg text-center'>
          📞 {phone}
        </Text>
        <Text className='dark:text-gray-400 text-lg text-center'>
          🩹 {brand} - {model}
        </Text>
        <Text className='dark:text-gray-400 text-lg text-center'>
          📧 {reported_damage}
        </Text>
        <View className='flex-row'>
          <Text className='dark:text-gray-300 text-xl text-center'>
            Fecha de recibido:
          </Text>
          <Text className='dark:text-gray-400 text-lg text-center'>
            {date_received}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default Ticketcard
