import { MaterialIcons } from '@expo/vector-icons'
import { Link } from 'expo-router'
import { TouchableOpacity } from 'react-native'
import colors from 'tailwindcss/colors'

interface ButtonProps {
  color?: string
  link: string
}

export function BackButton({ color, link }: ButtonProps) {
  return (
    <Link href={link} asChild>
      <TouchableOpacity>
        <MaterialIcons
          name="chevron-left"
          size={24}
          color={color || colors.gray[500]}
        />
      </TouchableOpacity>
    </Link>
  )
}
