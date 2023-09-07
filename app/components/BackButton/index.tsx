import { Link } from 'expo-router'
import { TouchableOpacity } from 'react-native'

import { MaterialIcons } from '@expo/vector-icons'

interface ButtonProps {
  color?: string
}

export function BackButton({ color }: ButtonProps) {
  return (
    <Link href="/" asChild>
      <TouchableOpacity>
        <MaterialIcons
          name="chevron-left"
          size={24}
          color={color || '#7A7A80'}
        />
      </TouchableOpacity>
    </Link>
  )
}
