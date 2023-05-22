import { View, Text, SafeAreaView, ScrollView } from 'react-native'
import React, { useLayoutEffect } from 'react'
import HeaderFull from '../../components/HeaderFull'
import ButtonFull from '../../components/ButtonFull'
import DateLabel from '../../components/DateLabel'
import { useNavigation } from '@react-navigation/native'
import GetCurrentDate from '../../helpers/GetCurrentDate'
import OneWeekLaterDate from '../../helpers/OneWeekLaterDate'
import InfoLabel from '../../components/InfoLabel'

const TicketDetails = () => {
  const navigation = useNavigation()
  const currentDate = GetCurrentDate()
  const oneWeekLaterDate = OneWeekLaterDate()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <SafeAreaView className='flex-1 dark:bg-black'>
      <HeaderFull headerTitle={'Detalles'} />
      <ScrollView className='px-6'>
        <View className='mt-2 bg-gray-900 items-center rounded-md border border-gray-700 py-2'>
          <Text className='text-gray-300 text-3xl text-left'>
            Nombre del negocio
          </Text>
          <Text className='text-gray-400 text-lg text-left'>
            • Eslogan del negocio
          </Text>
          <Text className='text-gray-400 text-lg text-left'>📞 8888-8888</Text>
          <Text className='text-gray-400 text-lg text-left'>
            📧 correo@mail.com
          </Text>
          <Text className='text-gray-400 text-lg text-left'>
            📌 Dirección del negocio
          </Text>
        </View>
        <View className='mt-2 bg-gray-900 justify-between px-2 rounded-md border border-gray-700 py-2'>
          <View className='flex-row justify-between'>
            <DateLabel dateTitle={'Fecha recibido'} date={currentDate} />
            <DateLabel dateTitle={'Fecha estimada'} date={oneWeekLaterDate} />
          </View>
          <InfoLabel infoTitle={'Nombre'} info={'Benito Camelas'} />
          <InfoLabel infoTitle={'Número de telefono'} info={'8888-8888'} />
          <InfoLabel infoTitle={'Dispositivo'} info={'Celular'} />
          <InfoLabel infoTitle={'Marca'} info={'Samsung'} />
          <InfoLabel infoTitle={'Modelo'} info={'S21 ultra'} />
          <InfoLabel infoTitle={'Daño reportado'} info={'No carga'} />
          <InfoLabel infoTitle={'Observaciones'} info={'Humedad'} />
          <InfoLabel infoTitle={'Accesorios'} info={'Sin accesorios'} />
          <InfoLabel infoTitle={'Precio estimado'} info={'15000'} />
          <InfoLabel infoTitle={'Abono'} info={'2000'} />
        </View>
        <ButtonFull navButton='List' buttonTitle='Compartir' />
      </ScrollView>
    </SafeAreaView>
  )
}

export default TicketDetails
