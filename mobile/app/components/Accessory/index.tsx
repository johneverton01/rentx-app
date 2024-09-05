import type React from 'react'
import { Text, View } from 'react-native'
import type { SvgProps } from 'react-native-svg'

interface AccessoryProps {
  description: string
  icon: React.FC<SvgProps>
}

export function Accessory({ description, icon: Icon }: AccessoryProps) {
  return (
    <View className="mb-2 mr-2 h-[104px] w-[104px] border-b-2 border-gray-100 bg-gray-200">
      <View className="h-full w-full items-center justify-center">
        <Icon width={32} height={32} />
        <Text className="mt-2 w-full text-center font-txt text-xs text-gray-500">
          {description}
        </Text>
      </View>
    </View>
  )
}
