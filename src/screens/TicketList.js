import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'

import HeaderFull from '../../components/HeaderFull'
import Ticketcard from '../../components/Ticketcard'
import Filter from '../../components/Filter'

const TicketList = () => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <SafeAreaView className='pb-8 flex-1 dark:bg-black'>
      <HeaderFull headerTitle={'Detalles'} />
      <View className='px-6 mb-2'>
        <View className='flex-row space-x-2'>
          <Filter inputplaceholder={'Marca'} />
          <Text> </Text>
          <Filter inputplaceholder={'Modelo'} />
        </View>
        <Filter inputplaceholder={'Ordenar por fecha menor'} />
        <Filter inputplaceholder={'Buscar'} />
      </View>
      <ScrollView className='px-6'>
        <Ticketcard
          name={'Juanita Pérez C.'}
          phone={'8888-8888'}
          brand={'Samsung'}
          model={'S23 Ultra'}
          reported_damage={'Parlante dañado'}
          date_received={'04/04/2023'}
        />
        <Ticketcard
          name={'Juanita Pérez C.'}
          phone={'8888-8888'}
          brand={'Samsung'}
          model={'S23 Ultra'}
          reported_damage={'Parlante dañado'}
          date_received={'04/04/2023'}
        />
        <Ticketcard
          name={'Juanita Pérez C.'}
          phone={'8888-8888'}
          brand={'Samsung'}
          model={'S23 Ultra'}
          reported_damage={'Parlante dañado'}
          date_received={'04/04/2023'}
        />
        <Ticketcard
          name={'Juanita Pérez C.'}
          phone={'8888-8888'}
          brand={'Samsung'}
          model={'S23 Ultra'}
          reported_damage={'Parlante dañado'}
          date_received={'04/04/2023'}
        />
        <Ticketcard
          name={'Juanita Pérez C.'}
          phone={'8888-8888'}
          brand={'Samsung'}
          model={'S23 Ultra'}
          reported_damage={'Parlante dañado'}
          date_received={'04/04/2023'}
        />
        <Ticketcard
          name={'Juanita Pérez C.'}
          phone={'8888-8888'}
          brand={'Samsung'}
          model={'S23 Ultra'}
          reported_damage={'Parlante dañado'}
          date_received={'04/04/2023'}
        />
        <Ticketcard
          name={'Juanita Pérez C.'}
          phone={'8888-8888'}
          brand={'Samsung'}
          model={'S23 Ultra'}
          reported_damage={'Parlante dañado'}
          date_received={'04/04/2023'}
        />
      </ScrollView>
    </SafeAreaView>
  )
}

export default TicketList
