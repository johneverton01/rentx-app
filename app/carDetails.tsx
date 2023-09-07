import { StatusBar } from 'expo-status-bar'
import { ScrollView, Text, View } from 'react-native'
import { ImageSlider } from './components/ImageSlider'

import { getBottomSpace } from 'react-native-iphone-x-helper'
import Speed from '../src/assets/speed.svg'
import { Accessory } from './components/Accessory'
import { Button } from './components/Button'

export default function CarDetails() {
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
          <Accessory description="380Km/h" icon={Speed} />
          <Accessory description="380Km/h" icon={Speed} />
          <Accessory description="380Km/h" icon={Speed} />
          <Accessory description="380Km/h" icon={Speed} />
          <Accessory description="380Km/h" icon={Speed} />
        </View>

        <View>
          <Text className="text-justify font-txt text-base leading-6 text-gray-500">
            Este é automóvel desportivo. Surgiu do lendário touro de lide
            indultado na praça Real Maestranza de Sevilla. É um belíssimo carro
            para quem gosta de acelerar.
          </Text>
        </View>
      </ScrollView>
      <View
        className={`absolute bottom-0 h-28 w-full bg-gray-200 px-6 pt-6 pb-[${
          getBottomSpace() + 24
        }px]`}
      >
        <Button label="Escolher período do aluguel" />
      </View>
    </View>
  )
}
