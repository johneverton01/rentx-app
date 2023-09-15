import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'

import { BackButton } from './components/BackButton'

import ArrowSvg from '../src/assets/arrow.svg'
import { Button } from './components/Button'
import { Calendar } from './components/Calendar'

import colors from 'tailwindcss/colors'

export default function Scheduling() {
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <View className="flex h-80 w-full justify-center bg-black p-6">
        <BackButton link="/carDetails" color={colors.white} />
        <Text className="mt-6 font-title text-3xl text-white">
          Escolha uma {'\n'}
          data de início e {'\n'}
          fim do alugel
        </Text>

        <View className="mt-6 flex flex-row items-center justify-between">
          <View className="flex flex-col">
            <Text className="font-body text-xs uppercase text-gray-600">
              De
            </Text>
            <Text className="font-body text-base text-gray-600">
              18/06/2021
            </Text>
          </View>

          <ArrowSvg />

          <View className="flex flex-col">
            <Text className="font-body text-xs uppercase text-gray-600">
              Até
            </Text>
            <Text className="font-body text-base text-gray-600">
              18/06/2021
            </Text>
          </View>
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Calendar />
      </ScrollView>

      <View className="p-6">
        <Button label="Confirmar" />
      </View>
    </View>
  )
}
