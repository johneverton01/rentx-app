import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { ScrollView, Text, View } from 'react-native'

import { BackButton } from './components/BackButton'

import ArrowSvg from '../src/assets/arrow.svg'
import { Button } from './components/Button'
import { Calendar } from './components/Calendar'

import { Link } from 'expo-router'
import colors from 'tailwindcss/colors'
import { InputDate } from './components/InputDate'

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
          <InputDate title="De" date="15/06/2021" />
          <View className="w-24">
            <ArrowSvg />
          </View>

          <InputDate title="Até" date={undefined} />
        </View>
      </View>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Calendar />
      </ScrollView>

      <View className="p-6">
        <Link href="/schedulingDetails" asChild>
          <Button label="Confirmar" />
        </Link>
      </View>
    </View>
  )
}
