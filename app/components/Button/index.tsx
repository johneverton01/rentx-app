import { Text, TouchableOpacity } from 'react-native'
import { twMerge } from 'tailwind-merge'

interface ButtonProps {
  label: string
  onPress?: () => void
  color?: string
}

export function Button({ label, color, onPress }: ButtonProps) {
  return (
    <TouchableOpacity
      className={twMerge('flex-row justify-center bg-red-500 py-5', color)}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text className="font-txtMed text-base font-medium text-white">
        {label}
      </Text>
    </TouchableOpacity>
  )
}
