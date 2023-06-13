import { View, Text, Image, Button } from 'react-native'
import React, { useContext, useEffect, useState } from 'react'
import Icons from 'react-native-vector-icons/FontAwesome'
import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList,
} from '@react-navigation/drawer';
import Home from './Home';
import { AuthContext } from '../Auth/AuthProvider';
import Login from './Login';
const CustomDrawer = (props) => {
  const { user, logout } = useContext(AuthContext);
  if (!user) {
    logout()
  } else {
    console.log("login success")
  }
  const { navigation } = props;

  const handleLogOut = () =>{
    logout()
  }


  return (
    <View className="flex-1 bg-white">
      <DrawerContentScrollView {...props} className="flex justify-between">
        <View className="flex py-8 px-8">
          <Image source={require('../assets/p3.jpeg')} className="h-24 w-24 rounded-full" />
          <Text className="mt-4 text-xl font-semibold">Arun Pradhan</Text>
          <Text className="text-sm text-gray-500">arun.pradhan@nettantra.net</Text>
        </View>
        <View>
          <DrawerItem label="Home" onPress={() => navigation.navigate("MainTabNavigator")} icon={() => <Icons name="home" size={20} />} />
          <DrawerItem label="My Orders" onPress={() => navigation.navigate("MyOrder")} icon={() => <Icons name="shopping-cart" size={20} />} />
          <DrawerItem label="My profile" onPress={() => navigation.navigate("MyProfile")} icon={() => <Icons name="user-circle" size={20} />} />
          <DrawerItem label="Delivery Address" onPress={() => navigation.navigate("DeliveryAddress")} icon={() => <Icons name="map" size={20} />} />
          <DrawerItem label="Payment Methods" onPress={() => navigation.navigate("Payment")} icon={() => <Icons name="credit-card" size={20} />} />
          <DrawerItem label="Contact Us" onPress={() => navigation.navigate("ContactUs")} icon={() => <Icons name="address-book" size={20} />} />
          <DrawerItem label="Setting" onPress={() => navigation.navigate("Setting")} icon={() => <Icons name="cog" size={20} />} />
          <DrawerItem label="Helps and FAQs" onPress={() => navigation.navigate("HelpsAndFaqs")} icon={() => <Icons name="question-circle" size={20} />} />
        </View>
        <View className=" rounded-xl bg-[#FE724C] flex-row items-center justify-center space-x-3 px-4 py-3 mx-6 my-4 shadow-lg shadow-[#FE724C]">
          <Icons name="sign-out" color="white" style={{fontWeight:'500'}} size={30} />
          <Text className="text-white text-base-sofia" onPress={(e)=>{handleLogOut()}} >Log Out</Text>
        </View>
      </DrawerContentScrollView>

    </View>
  )
}

export default CustomDrawer