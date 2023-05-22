import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'
import React, { useLayoutEffect } from 'react'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import TextInputWLabel from '../../components/TextInputWLabel'
import ButtonFull from '../../components/ButtonFull'

const SignIn = () => {
  const navigation = useNavigation()

  useLayoutEffect(() => {
    navigation.setOptions({
      headerShown: false,
    })
  }, [])
  return (
    <SafeAreaView className='flex-1 bg-black'>
      <View className='mt-2 items-center'>
        <Image
          source={require('../../assets/EcoTicket-Logo.png')}
          className='h-40 w-32  items-center my-8'
        />
        <Text className='text-gray-400 font-bold text-4xl mt-2 text-center'>
          Iniciar sesión
        </Text>
      </View>
      <View className='text-left px-6'>
        <Text className='text-gray-400 text-2xl font-bold mt-8 text-left'>
          Bienvenido de nuevo
        </Text>
        <Text className='text-gray-400 text-base mt-2 text-left'>
          Digita tu clave para explorar
        </Text>
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
        <Text className='text-md mt-4 text-right font-bold text-gray-400'>
          Olvidaste la contraseña?
        </Text>

        <ButtonFull navButton='Config' buttonTitle='Iniciar sesión' />
      </View>
      <View className='flex-1 items-center justify-end mb-4 color=gray'>
        <Text className='text-green-500 text-md'>
          <Text className='text-gray-400'>No tienes cuenta? </Text>contactanos.
        </Text>
      </View>
    </SafeAreaView>
  )
}

export default SignIn
