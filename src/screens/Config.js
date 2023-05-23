import {
  View,
  Text,
  SafeAreaView,
  Image,
  TextInput,
  TouchableOpacity,
  Pressable,
  ScrollView,
} from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { styled, useColorScheme } from 'nativewind'

import ButtonFull from '../../components/ButtonFull'
import HeaderFull from '../../components/HeaderFull'
import TextInputWLabel from '../../components/TextInputWLabel'

const Config = () => {
  const { colorScheme, toggleColorScheme } = useColorScheme()
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])
  return (
    <SafeAreaView className='flex-1 dark:bg-black'>
      <HeaderFull headerTitle={'Nueva boleta'} />
      <ScrollView className='px-6'>
        <View className='items-center mt-4'>
          <View className='flex-row justify-between space-x-2'>
            <TouchableOpacity className='dark:bg-gray-800 p-4 rounded-full border border-gray-700'>
              <Image
                source={require('../../assets/EcoTicket-Logo.png')}
                className='h-20 w-20'
              />
            </TouchableOpacity>
            <View className='justify-center flex-1'>
              <TextInput
                className='dark:text-gray-300 text-2xl text-left'
                placeholder='Nombre del negocio'
                keyboardType='default'
                placeholderTextColor={
                  colorScheme === 'dark' ? '#d1d5db' : 'black'
                }
                numberOfLines={1}
              />
              <TextInput
                className='dark:text-gray-300 text-sm text-left'
                placeholder='Este es el espacio para el slogan'
                keyboardType='default'
                placeholderTextColor={
                  colorScheme === 'dark' ? '#d1d5db' : 'black'
                }
              />
            </View>
          </View>
          <View className='w-full text-left mt-2'>
            <TextInputWLabel
              inputTitle={'Correo'}
              inputplaceholder={'ejemplo@mail.com'}
              inputKeyboardType={'email-address'}
            />
            <TextInputWLabel
              inputTitle={'Contraseña'}
              inputplaceholder={'12345678'}
              inputKeyboardType={'default'}
            />
            <TextInputWLabel
              inputTitle={'Número de teléfono'}
              inputplaceholder={'8888-8888'}
              inputKeyboardType={'phone-pad'}
            />
            <TextInputWLabel
              inputTitle={'Dirección'}
              inputplaceholder={'200 mts norte del palo de mango'}
              inputKeyboardType={'default'}
            />
            <ButtonFull navButton='Config' buttonTitle='Guardar cambios' />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Config
