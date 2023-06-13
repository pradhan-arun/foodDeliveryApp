import { View, Text, Image, TouchableOpacity, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native'
import imagesPath from '../assets/imagesPath';
import { RadioButton } from 'react-native-paper'

const Details = ({ route }) => {

  const [quantity, setQuantity] = useState(2)
  console.log("routes = ", route.params.imagePath);
  const navigation = useNavigation();
  return (
    <View>
      <SafeAreaView className="mx-2">
        <ScrollView>
          <View className="">
            <Image source={route.params.imagePath} className=" w-full h-72 rounded-3xl" />
            <View className="absolute bg-white flex flex-row items-center top-5 left-5 rounded-md ">
              <Icon.Button name="chevron-left" backgroundColor="white" color="black" borderRadius={20} className="font-extrabold" onPress={() => { setQuantity(10); navigation.goBack() }} />
            </View>
            <View className="absolute right-5 bg-orange-500 top-5 px-2 py-2 rounded-full">
              <Icon name="heart" color="white" size={25} />
            </View>
          </View>

          <Text className="text-2xl-sofia font-semibold text-blue-950 mt-4">Ground Beef Tacos</Text>

          <View className="flex-row space-x-3 mt-2 items-center">
            <Icon name="star" color="#FFC529" size={30} />
            <Text className="text-base-sofia font-medium">4.5</Text>
            <Text className="text-base-sofia font-normal text-gray-400">(30+)</Text>
            <Text className="text-[#FE724C] text-lg-sofia font-medium underline">See Review</Text>
          </View>

          <View className="flex-row justify-between items-center mt-6">
            <View className="flex-row items-center space-x-1">
              <Icon name="dollar" size={20} color="#FE724C" />
              <Text className="text-[#FE724C] text-3xl-sofia font-bold">9.29</Text>
            </View>
            <View className="flex-row items-center space-x-3">
              <View className="border-2 border-[#FE724C] rounded-full p-3">
                <TouchableOpacity onPress={() => { if (quantity != 0) setQuantity(quantity - 1) }}>
                  <Icon name="minus" color="#FE724C" size={20} />
                </TouchableOpacity>
              </View>
              <Text className="text-lg-sofia font-bold">{quantity}</Text>
              <View className="border-2 border-[#FE724C] rounded-full p-3 bg-[#FE724C]">
                <TouchableOpacity onPress={() => { setQuantity(quantity + 1) }}>
                  <Icon name="plus" color="white" size={20} />
                </TouchableOpacity>
              </View>

            </View>
          </View>

          <Text className="leading-2 tracking-widest mt-4 text-gray-500 text-base-sofia text-left">Brown the beef better. Lean ground beef – I like to use 85% lean angus. Garlic – use fresh  chopped. Spices – chili powder, cumin, onion powder.</Text>

          <View className="my-4 space-y-4">
            <Text className="text-2xl-sofia font-semibold text-gray-700">Choice Of Add On</Text>
            <View className="flex-row justify-between items-center">
              <View className="flex-row space-x-2 items-center">
                <Image source={imagesPath.p12} className="h-10 w-10 rounded-3xl" />
                <Text className="text-base-sofia font-medium">Pepper Julienned</Text>
              </View>
              <View className="flex-row space-x-2">
                <Text className="text-lg-sofia font-medium">+$2.30</Text>
                <View className="h-8 w-8 border-2 border-[#FE724C] rounded-full items-center justify-center ">
                  <View className="h-4 w-4 bg-[#FE724C] rounded-full">
                  </View>
                </View>
              </View>
            </View>

            <View className="flex-row justify-between items-center mt-2">
              <View className="flex-row space-x-2 items-center">
                <Image source={imagesPath.p13} className="h-10 w-10 rounded-3xl " />
                <Text className="text-base-sofia font-medium">Burger</Text>
              </View>
              <View className="flex-row space-x-2">
                <Text className="text-lg-sofia font-medium">+$10.30</Text>
                <View className="h-8 w-8 border-2 border-gray-400  rounded-full items-center justify-center ">
                  {/* <View className="h-4 w-4 bg-[#FE724C] rounded-full">
                  </View> */}
                </View>
              </View>
            </View>


            <View className="flex-row justify-between items-center mt-2">
              <View className="flex-row space-x-2 items-center">
                <Image source={imagesPath.p14} className="h-10 w-10 rounded-3xl" />
                <Text className="text-base-sofia font-medium">Chicken</Text>
              </View>
              <View className="flex-row space-x-2">
                <Text className="text-lg-sofia font-medium">+$9.30</Text>
                <View className="h-8 w-8 border-2 border-gray-400  rounded-full items-center justify-center ">
                  {/* <View className="h-4 w-4 bg-[#FE724C] rounded-full">
                  </View> */}
                </View>
              </View>
            </View>

            <View className="flex-row justify-between items-center mt-2">
              <View className="flex-row space-x-2 items-center">
                <Image source={imagesPath.p16} className="h-10 w-10 rounded-3xl" />
                <Text className="text-base-sofia font-medium">Panner</Text>
              </View>
              <View className="flex-row space-x-2">
                <Text className="text-lg-sofia font-medium">+$1.30</Text>
                <View className="h-8 w-8 border-2 border-gray-400 rounded-full items-center justify-center ">
                  {/* <View className="h-4 w-4 bg-[#FE724C] rounded-full">
                  </View> */}
                </View>
              </View>
            </View>
          </View>

          <View className="flex-row justify-center items-center bg-[#FE724C] my-4 rounded-2xl">
            <Icon.Button name="shopping-cart" color="white" backgroundColor="#FE724C" size={30} />
            <Text className="text-white font-bold">Add To Cart</Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  )
}

export default Details