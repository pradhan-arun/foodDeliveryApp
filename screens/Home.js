import { View, Text, Image, StyleSheet, TextInput, ScrollView } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import { SafeAreaView } from 'react-native-safe-area-context';
import ItemShow from '../components/Home/ItemShow';
import FeaturedShow from '../components/Home/FeaturedShow';
import PopularItems from '../components/Home/PopularItems';

const Home = ({ navigation, route }) => {
  const title = route.params;
  // console.log("prpos = ", navigation.getState)
  // console.log("title = ", title)
  
  return (
    <>
    
      <View className="bg-white flex-1">
        <SafeAreaView className="mx-4 relative" >
          <ScrollView>
          
          {/* Home header */}
          <View className="flex flex-row justify-between items-center">
            <View className="bg-white rounded-lg border-1 border-gray-400 shadow-2xl shadow-indigo-950">
              <Icon.Button name="bars" size={20} color="black" onPress={() => navigation.openDrawer()} backgroundColor="white" borderRadius={10} />
            </View>
            <View>
              <View className="flex flex-row justify-center items-center">
                <Text className="text-lg mx-2 text-gray-500" >Deliver to</Text>
                <Icon name="caret-down" size={20} color="gray" />
              </View>
              <Text className="text-base-sofia font-medium text-[#FE8160]">Bhubaneswar OD</Text>
            </View>
            <Image source={require('../assets/p3.jpeg')} className="h-14 w-14 rounded-xl" />
          </View>

          <Text className="text-2xl-sofia text-[#4D5364] font-semibold mt-4">What would you like to order</Text>

          {/* search box */}
          <View className="flex flex-row justify-center items-center mt-4 space-x-5">
            <View className="flex flex-row flex-1 items-center border-2 border-gray-100 rounded-lg px-2 py-4 space-x-4">
              <Icon name="search" size={30} color="gray" />
              <TextInput placeholder="Find for food or food" className="w-full text-base-sofia font-semibold" />
            </View>
            <View className=" mx-2  border-1 border-gray-400 shadow-2xl shadow-indigo-950 rounded-lg">
              <Icon name="adjust" color="orange" size={30} />
            </View>
          </View>

          {/* item show */}
          <View>
            <ItemShow />
          </View>

          {/* Featured View */}
          <View>
            <FeaturedShow navigation={navigation} />
          </View>

          {/* popular item */}
          <View>
            <PopularItems navigation={navigation} />
          </View>
  
          </ScrollView>
          
        </SafeAreaView>
      </View>
    </>
  )
}

export default Home