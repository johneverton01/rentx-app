import { Text, View } from 'react-native'

interface InputDateProps {
  title: string
  date?: string
}

export function InputDate({ title, date }: InputDateProps) {
  return (
    <View className="flex flex-1 flex-col">
      <Text className="font-body text-xs uppercase text-gray-600">{title}</Text>
      {date ? (
        <Text className="font-body text-base text-white">{date}</Text>
      ) : (
        <View className="h-4 w-full border-b border-gray-600" />
      )}
    </View>
  )
}
