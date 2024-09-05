import { Image, Text, View } from 'react-native'

import { Link } from 'expo-router'
import { TouchableOpacity } from 'react-native-gesture-handler'
import GasolineSvg from '../../../src/assets/gasoline.svg'

interface Rent {
  period: string
  price: number
}
interface CarProps {
  brand: string
  name: string
  rent: Rent
  thumbnail: string
}

export function Car({ brand, name, rent, thumbnail }: CarProps) {
  return (
    <Link href="/carDetails" asChild>
      <TouchableOpacity className="mb-4 h-[126px] w-full flex-row items-center justify-between bg-white p-6">
        <View>
          <Text className="font-body text-xs uppercase text-gray-400">
            {brand}
          </Text>
          <Text className="font-body text-lg text-gray-600">{name}</Text>

          <View className="mt-4 flex-row items-end">
            <View className="mr-6">
              <Text className="font-body text-xs uppercase text-gray-400">
                {rent.period}
              </Text>
              <Text className="font-body text-lg text-red-500">{`R$ ${rent.price}`}</Text>
            </View>
            <View className="mb-1">
              <GasolineSvg />
            </View>
          </View>
        </View>
        <View className="h-[92px] w-[160px]">
          <Image
            className="h-full w-full"
            source={thumbnail}
            alt={name}
            resizeMode="contain"
          />
        </View>
      </TouchableOpacity>
    </Link>
  )
}
