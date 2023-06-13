import { View, Text, ImageBackground, ScrollView, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import imagesPath from '../../assets/imagesPath'
import Icon from 'react-native-vector-icons/FontAwesome'
import Feather from 'react-native-vector-icons/Feather'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';



const Welcome = ({ navigation }) => {
    return (

        <SafeAreaView>
            <ImageBackground source={imagesPath.welcome} style={{ width: "100%", height: "100%" }} blurRadius={5} >
                <View className="px-2 flex h-[100vh]">

                    <View className=" flex items-end my-4 mx-4">
                        <Text className=" text-[#FE724C] bg-white px-3 py-1 font-semibold rounded-xl  ">Skip</Text>
                    </View>

                    {/* header */}
                    <View className="pt-10 space-y-8">
                        <Text className="text-white text-4xl-sofia font-bold leading-1 tracking-widest ">Welcome To <Text className="text-[#FE724C]">FoodApp </Text> </Text>
                        <Text className="text-gray-400 text-lg-sofia font-bold leading-1 tracking-widest ">Your favourite foods delivered fast at your door.</Text>
                    </View>

                    {/* Footer */}
                    <View className=" mt-auto">
                        {/* sign in with */}
                        <View className="flex flex-row justify-center pt-10">
                            <View className="w-[35%] bg-gray-400 my-2.5"></View>
                            <Text className="text-white mx-2 font-bold"> Sign in with</Text>
                            <View className="w-[35%] bg-gray-400 my-2.5"></View>
                        </View>

                        <View className="flex-row justify-between space-x-6">
                            {/* facebook */}
                            <View className="bg-white flex-row justify-center items-center space-x-3 my-4 px-4 py-3 rounded-3xl">
                                <Icon name="facebook" size={30} />
                                <Text className="text-sm-sofia font-semibold">FACEBOOK</Text>
                            </View>

                            {/* Google */}
                            <View className="bg-white flex-row justify-center items-center space-x-3 my-4 px-4 py-3 rounded-3xl">
                                <Icon name="google" size={30} />
                                <Text className="text-sm-sofia font-semibold">GOOGLE</Text>
                            </View>
                        </View>
                        <View className="my-4 flex items-center">
                            <Text className="text-white backdrop-blur  border-2 border-white px-9 py-3 font-extrabold rounded-2xl">Sign with email or phone</Text>
                        </View>

                        <Text className="text-white text-sm-sofia font-medium text-center my-7">Already have a account ?
                            <Text className="text-white underline ml-2" onPress={()=> navigation.navigate("Login")}>Click here to log in</Text>
                        </Text>
                    </View>
                </View>
            </ImageBackground>
        </SafeAreaView>

    )
}

export default Welcome