import { Image, View } from 'react-native'
import { BackButton } from '../BackButton'

interface ImageSliderProps {
  imagesUrl: string[]
}

export function ImageSlider({ imagesUrl }: ImageSliderProps) {
  return (
    <View className="w-screen">
      <View className="flex h-28 w-full flex-row items-end pb-6">
        <View className="flex w-full flex-row items-center justify-between px-4">
          <BackButton link="/" />
          <View className="mr-2 flex flex-row items-center gap-2">
            <View className="h-2 w-2 rounded-full bg-gray-500" />
            <View className="h-2 w-2 rounded-full bg-gray-300" />
            <View className="h-2 w-2 rounded-full bg-gray-300" />
            <View className="h-2 w-2 rounded-full bg-gray-300" />
          </View>
        </View>
      </View>
      <View className="h-[132px] w-full items-center justify-center">
        <Image
          className="h-[132px] w-[280px]"
          source={{ uri: imagesUrl[0] }}
          resizeMode="contain"
          alt=""
        />
      </View>
    </View>
  )
}
