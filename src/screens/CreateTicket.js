import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import React, { useLayoutEffect } from 'react'

import { useNavigation } from '@react-navigation/native'
import TextInputWLabel from '../../components/TextInputWLabel'
import ButtonFull from '../../components/ButtonFull'
import HeaderFull from '../../components/HeaderFull'
import DateLabel from '../../components/DateLabel'
import GetCurrentDate from '../../helpers/GetCurrentDate'
import OneWeekLaterDate from '../../helpers/OneWeekLaterDate'

const CreateTicket = () => {
  const navigation = useNavigation()
  const currentDate = GetCurrentDate()
  const oneWeekLaterDate = OneWeekLaterDate()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])

  return (
    <SafeAreaView className='pb-8 flex-1 dark:bg-black'>
      <HeaderFull headerTitle={'Nueva boleta'} />
      <ScrollView className='px-6 mt-2'>
        <View className='flex-row justify-between'>
          <DateLabel dateTitle={'Fecha recibido'} date={currentDate} />
          <DateLabel dateTitle={'Fecha estimada'} date={oneWeekLaterDate} />
        </View>
        <TextInputWLabel
          inputTitle={'Nombre del cliente'}
          inputplaceholder={'José Juárez'}
          inputKeyboardType={'default'}
        />
        <TextInputWLabel
          inputTitle={'Número de teléfono'}
          inputplaceholder={'8888-8888'}
          inputKeyboardType={'phone-pad'}
        />
        <TextInputWLabel
          inputTitle={'Dispositivo'}
          inputplaceholder={'Celular'}
          inputKeyboardType={'default'}
        />
        <View className='flex-row space-x-2'>
          <TextInputWLabel
            inputTitle={'Marca'}
            inputplaceholder={'Samsung'}
            inputKeyboardType={'default'}
          />
          <Text> </Text>
          <TextInputWLabel
            inputTitle={'Modelo'}
            inputplaceholder={'S21 ultra'}
            inputKeyboardType={'default'}
          />
        </View>
        <TextInputWLabel
          inputTitle={'Daño reportado'}
          inputplaceholder={'No carga'}
          inputKeyboardType={'default'}
        />
        <TextInputWLabel
          inputTitle={'Observaciones'}
          inputplaceholder={'Humedad'}
          inputKeyboardType={'default'}
        />
        <TextInputWLabel
          inputTitle={'Accesorios'}
          inputplaceholder={'Sin accesorios'}
          inputKeyboardType={'default'}
        />
        <TextInputWLabel
          inputTitle={'Precio estimado'}
          inputplaceholder={'15000'}
          inputKeyboardType={'number-pad'}
        />
        <TextInputWLabel
          inputTitle={'Abono'}
          inputplaceholder={'2000'}
          inputKeyboardType={'number-pad'}
        />
        <ButtonFull navButton='Details' buttonTitle='Crear' />
      </ScrollView>
    </SafeAreaView>
  )
}

export default CreateTicket
