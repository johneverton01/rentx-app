import { Feather } from '@expo/vector-icons'
import { StatusBar } from 'expo-status-bar'
import { ScrollView, Text, View } from 'react-native'
import { ImageSlider } from './components/ImageSlider'

import { Link } from 'expo-router'
import { getBottomSpace } from 'react-native-iphone-x-helper'
import { RFValue } from 'react-native-responsive-fontsize'
import Acceleration from '../src/assets/acceleration.svg'
import Exchange from '../src/assets/exchange.svg'
import Force from '../src/assets/force.svg'
import Gas from '../src/assets/gasoline.svg'
import People from '../src/assets/people.svg'
import Speed from '../src/assets/speed.svg'
import { Accessory } from './components/Accessory'
import { Button } from './components/Button'

export default function SchedulingDetails() {
  return (
    <View className="flex-1 bg-white">
      <StatusBar style="dark" translucent backgroundColor="transparent" />
      <ImageSlider
        imagesUrl={[
          'https://freepngimg.com/thumb/car/3-2-car-free-download-png.png',
        ]}
      />
      <ScrollView
        contentContainerStyle={{
          padding: 24,
          alignItems: 'center',
          flexDirection: 'column',
        }}
        showsVerticalScrollIndicator={false}
      >
        <View className="flex w-full flex-row justify-between">
          <View className="flex gap-1">
            <View>
              <Text className="font-body text-xs uppercase text-gray-400">
                Lamborghini
              </Text>
            </View>
            <View>
              <Text className="font-body text-2xl text-gray-600">Huracan</Text>
            </View>
          </View>

          <View className="flex gap-1">
            <View>
              <Text className="font-body text-xs uppercase text-gray-400">
                Ao dia
              </Text>
            </View>
            <View>
              <Text className="font-body text-2xl leading-normal text-red-500">
                R$ 580
              </Text>
            </View>
          </View>
        </View>

        <View className="w-full flex-row flex-wrap justify-center py-4">
          <Accessory description="380Km/h" icon={Speed} />
          <Accessory description="3.2" icon={Acceleration} />
          <Accessory description="800 HP" icon={Force} />
          <Accessory description="Gasolina" icon={Gas} />
          <Accessory description="Auto" icon={Exchange} />
          <Accessory description="2" icon={People} />
        </View>

        <View className="w-full flex-row justify-between border-b border-gray-300 pb-4">
          <View className="mr-8 bg-red-500 p-3">
            <Feather name="calendar" size={RFValue(24)} color="white" />
          </View>
          <View className="flex-1 flex-row items-center gap-8">
            <View className="flex-col">
              <Text className="mb-2 font-body text-xs uppercase text-gray-400">
                de
              </Text>
              <Text className="font-title text-base font-medium text-gray-600">
                15/12/2024
              </Text>
            </View>
            <Feather name="chevron-right" size={RFValue(10)} color="black" />
            <View className="flex-col">
              <Text className="mb-2 font-body text-xs uppercase text-gray-400">
                ate
              </Text>
              <Text className="font-title text-base font-medium text-gray-600">
                15/12/2024
              </Text>
            </View>
          </View>
        </View>

        <View className="mt-6 w-full flex-row items-end justify-between">
          <View>
            <View>
              <Text className="font-body text-xs font-medium text-gray-400">
                Total
              </Text>
            </View>
            <View className="mt-2">
              <Text className="font-title text-base text-gray-600">
                R$ 580 x3 diárias
              </Text>
            </View>
          </View>
          <View>
            <Text className="font-body text-2xl text-green">R$ 1.740,00</Text>
          </View>
        </View>
      </ScrollView>

      <View
        className={`absolute bottom-0 h-28 w-full bg-gray-200 px-6 pt-6 pb-[${
          getBottomSpace() + 24
        }px]`}
      >
        <Link href="/scheduling" asChild>
          <Button color="bg-green" label="Alugar " />
        </Link>
      </View>
    </View>
  )
}
