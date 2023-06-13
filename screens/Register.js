import { View, Text, Button, ImageBackground, TextInput } from 'react-native'
import React, { useContext } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AuthContext } from '../Auth/AuthProvider'
import { SafeAreaView } from 'react-native-safe-area-context'
import imagesPath from '../assets/imagesPath'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Pressable } from 'react-native'

const Register = ({ navigation }) => {
    const { user, login } = useContext(AuthContext);

    const register = async () => {
        await AsyncStorage.setItem('user', 'hello');
        console.log("called");
        login("hii")
    }

    const test = async () => {
        // await AsyncStorage.setItem('user', 'hello');
        console.log("called");
        // login("hii")
    }
    return (
        <>
            <SafeAreaView>
                <ImageBackground source={imagesPath.login} style={{ width: "100%", height: "100%" }} >
                    <View className="mx-2 h-[100vh]">

                        {/* back button */}
                        <View className="mr-auto bg-white px-5 py-3 my-8 rounded-xl shadow-2xl shadow-gray-900">
                            <Icon name="angle-left" size={30} style={{ fontWeight: "bold" }} onPress={() => navigation.goBack()} />
                        </View>

                        <Text className="text-2xl-sofia font-semibold mt-2">Sign Up</Text>

                        <View className="flex space-y-4">
                            <Text className="text-lg-sofia mt-5 font-semibold text-gray-500">Full Name</Text>
                            <TextInput placeholder='Enter your name' className="border border-gray-400 pl-6 font-bold text-base-sofia py-5 rounded-2xl" />
                            <Text className="text-lg-sofia mt-5 font-semibold text-gray-500">Email</Text>
                            <TextInput placeholder='Enter your email' className="border border-gray-400 pl-6 font-bold text-base-sofia py-5 rounded-2xl" />
                            <Text className="text-lg-sofia mt-5 font-semibold text-gray-500">Password</Text>
                            <TextInput placeholder='Enter your password' secureTextEntry={true} className="border border-gray-400 pl-6 font-bold text-base-sofia py-5 rounded-2xl" />
                        </View>

                        <Pressable className=" flex items-center justify-center mt-4" >
                            <Text className="bg-[#FE724C] px-14 py-4 text-white text-xl-sofia font-semibold rounded-xl" onPress={() => register()} >Sign Up</Text>
                        </Pressable>

                        <Text className="text-gray-400 my-4 text-center">Already have an account ? <Text className="text-[#FE724C] font-bold text-base-sofia" onPress={() => navigation.navigate("Login")}>Login</Text></Text>

                        {/* Footer */}
                        <View className=" mt-auto">
                            {/* sign in with */}
                            <View className="flex flex-row justify-center pt-10">
                                <View className="w-[35%] bg-gray-400 my-2.5"></View>
                                <Text className="text-black mx-2 font-bold"> Sign in with</Text>
                                <View className="w-[35%] bg-gray-400 my-2.5"></View>
                            </View>

                            <View className="flex-row justify-between space-x-6">
                                {/* facebook */}
                                <View className="bg-white flex-row justify-center items-center space-x-3 my-4 px-4 py-3 border border-gray-300 shadow-xl shadow-black rounded-3xl">
                                    <Icon name="facebook" size={30} />
                                    <Text className="text-sm-sofia font-semibold">FACEBOOK</Text>
                                </View>

                                {/* Google */}
                                <View className="bg-white flex-row justify-center items-center space-x-3 my-4 px-4 py-3 border border-gray-300 shadow-xl shadow-black rounded-3xl">
                                    <Icon name="google" size={30} />
                                    <Text className="text-sm-sofia font-semibold">GOOGLE</Text>
                                </View>
                            </View>



                        </View>
                    </View>
                </ImageBackground>
            </SafeAreaView>
        </>

    )
}

export default Register