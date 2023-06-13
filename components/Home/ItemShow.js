import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import { ImageBackground } from 'react-native'

const ItemShow = () => {
  return (
    
      <ScrollView className="my-7 space-x-2" horizontal>
        <View className="flex items-center aspect-auto bg-orange-500 h-auto w-1/7 pb-10 rounded-t-full pt-2 px-2 rounded-b-full space-y-3">
          <Image source={require('../../assets/food/p-104.jpeg')} className="h-16 w-16 rounded-full" />
          <Text className="text-white font-semibold">Burger</Text>
        </View>

        <View className="flex items-center aspect-auto bg-orange-500 h-auto w-1/7 pb-10 rounded-t-full pt-2 px-2 rounded-b-full space-y-3">
          <Image source={require('../../assets/food/p-105.jpeg')} className="h-16 w-16 rounded-full" />
          <Text className="text-white font-semibold">Chingri</Text>
        </View>

        <View className="flex items-center aspect-auto bg-orange-500 h-auto w-1/7 pb-10 rounded-t-full pt-2 px-2 rounded-b-full space-y-3">
          <Image source={require('../../assets/food/p-106.jpeg')} className="h-16 w-16 rounded-full" />
          <Text className="text-white font-semibold">Salad</Text>
        </View>

        <View className="flex items-center aspect-auto bg-orange-500 h-auto w-1/7 pb-10 rounded-t-full pt-2 px-2 rounded-b-full space-y-3">
          <Image source={require('../../assets/food/p-107.jpeg')} className="h-16 w-16 rounded-full" />
          <Text className="text-white font-semibold">Pizza</Text>
        </View>

        <View className="flex items-center aspect-auto bg-orange-500 h-auto w-1/7 pb-10 rounded-t-full pt-2 px-2 rounded-b-full space-y-3">
          <Image source={require('../../assets/food/p-108.jpeg')} className="h-16 w-16 rounded-full" />
          <Text className="text-white font-semibold">Biriyani</Text>
        </View>

        <View className="flex items-center aspect-auto bg-orange-500 h-auto w-1/7 pb-10 rounded-t-full pt-2 px-2 rounded-b-full space-y-3">
          <Image source={require('../../assets/food/p-109.jpeg')} className="h-16 w-16 rounded-full" />
          <Text className="text-white font-semibold">Veg</Text>
        </View>

        <View className="flex items-center aspect-auto bg-orange-500 h-auto w-1/7 pb-10 rounded-t-full pt-2 px-2 rounded-b-full space-y-3">
          <Image source={require('../../assets/food/p-110.jpeg')} className="h-16 w-16 rounded-full" />
          <Text className="text-white font-semibold">Chicken</Text>
        </View>
      </ScrollView>

  )
}

export default ItemShow