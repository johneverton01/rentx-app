import { StatusBar } from 'expo-status-bar'
import { FlatList, Text, View } from 'react-native'
import { RFValue } from 'react-native-responsive-fontsize'

import Logo from '../src/assets/logo.svg'
import { Car } from './components/Car'

import Audi from '../src/assets/Audi.png'

export default function App() {
  return (
    <View className="flex-1">
      <StatusBar style="light" translucent backgroundColor="transparent" />
      <View className="flex h-28 w-full flex-row items-end justify-between bg-black px-4 pb-6">
        <Logo width={RFValue(108)} height={RFValue(12)} />
        <Text className="font-txt text-gray-500">Total de 12 Carros</Text>
      </View>
      <FlatList
        contentContainerStyle={{ paddingHorizontal: 24, paddingVertical: 16 }}
        showsVerticalScrollIndicator={false}
        data={[1, 2, 3, 4, 5, 6]}
        keyExtractor={(item) => String(item)}
        renderItem={({ item }) => (
          <Car
            brand="Audi"
            name="RS 5 Coupé"
            rent={{ period: 'ao dia', price: 120 }}
            thumbnail={Audi}
          />
        )}
      />
    </View>
  )
}
