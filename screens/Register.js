import { View, Text, Button, ImageBackground, TextInput } from 'react-native'
import React, { useContext, useState } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { AuthContext } from '../Auth/AuthProvider'
import { SafeAreaView } from 'react-native-safe-area-context'
import imagesPath from '../assets/imagesPath'
import Icon from 'react-native-vector-icons/FontAwesome'
import { Pressable } from 'react-native'
import axios from 'axios'


const Register = ({ navigation }) => {
    const { user, login } = useContext(AuthContext);
    const [errorMessage, setErrorMessage] = useState();
    const [check, setCheck] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState(false);

    const [data, setData] = useState({
        "userType": "user",
        fullName: "",
        email: "",
        "password": ""
    })


    const register = async () => {

        var config = {
            method: 'post',
            url: 'http://172.16.23.85:8001/create',
            data: data
        };
        console.log("config = ", config)
        try {
            const res = await axios(config);
            console.log("Success = ", res.data);
            setCheck(true);
            setSuccess(true);
            setErrorMessage("Registered successfully")
            setTimeout(() => {
                setCheck(false);
                setSuccess(false);
                setError(false);
                setErrorMessage('');
                setData(null)
            }, 3000);

        } catch (error) {
            console.log("ERROR ===== > ", JSON.stringify(error.response.data));
            setCheck(true);
            setError(true);
            setErrorMessage(error.response.data.message)

            setTimeout(() => {
                setCheck(false);
                setSuccess(false);
                setError(false);
                setErrorMessage('');
            }, 3000);
        }

    };

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

                        {check && <View className={` ${success ? 'bg-green-400' : 'bg-red-400'} px-2 py-2 mt-2 rounded-xl`} >
                            <Text className="font-bold text-base-sofia text-white italic" >{errorMessage}</Text>
                        </View>}

                        <View className="flex space-y-2">
                            <Text className="text-lg-sofia mt-5 font-semibold text-gray-500"  >Full Name</Text>
                            <TextInput placeholder='Enter your name' className="border border-gray-400 pl-6 font-bold text-base-sofia py-3 rounded-2xl" onChangeText={(e) => { setData({ ...data, fullName: e }) }} />
                            <Text className="text-lg-sofia mt-5 font-semibold text-gray-500">Email</Text>
                            <TextInput placeholder='Enter your email' className="border border-gray-400 pl-6 font-bold text-base-sofia py-3 rounded-2xl" name="email" onChangeText={(e) => { setData({ ...data, email: e }) }} />
                            <Text className="text-lg-sofia mt-5 font-semibold text-gray-500">Password</Text>
                            <TextInput placeholder='Enter your password' keyboardAppearance='light' secureTextEntry={true} className="border border-gray-400 pl-6 font-bold text-base-sofia py-3 rounded-2xl" onChangeText={(e) => { setData({ ...data, password: e }) }} />
                        </View>

                        {/* <View className="flex-1 justify-center py-16">
      <View className="mb-3">
        <Text style={{ fontSize: 16, fontWeight: '600', color: '#6B7280', marginBottom: 5 }}>
          Full Name
        </Text>
        <TextInput
          placeholder='Enter your name'
          style={{ borderWidth: 1, borderColor: '#9CA3AF', borderRadius: 10, paddingLeft: 12, fontSize: 14, height: 48 }}
          onChangeText={(e) => { setData({ ...data, fullName: e }) }}
        />
      </View>

      <View style={{ marginBottom: 16 }}>
        <Text style={{ fontSize: 16, fontWeight: '600', color: '#6B7280', marginBottom: 5 }}>
          Email
        </Text>
        <TextInput
          placeholder='Enter your email'
          style={{ borderWidth: 1, borderColor: '#9CA3AF', borderRadius: 10, paddingLeft: 12, fontSize: 14, height: 48 }}
          onChangeText={(e) => { setData({ ...data, email: e }) }}
        />
      </View>

      <View style={{ marginBottom: 16 }}>
        <Text style={{ fontSize: 16, fontWeight: '600', color: '#6B7280', marginBottom: 5 }}>
          Password
        </Text>
        <TextInput
          placeholder='Enter your password'
          style={{ borderWidth: 1, borderColor: '#9CA3AF', borderRadius: 10, paddingLeft: 12, fontSize: 14, height: 48 }}
          keyboardAppearance='light'
          secureTextEntry={true}
          onChangeText={(e) => { setData({ ...data, password: e }) }}
        />
      </View>
    </View> */}

                        <Pressable className=" flex items-center justify-center mt-4" >
                            <Text className="bg-[#FE724C] px-10 py-2 text-white text-xl-sofia font-semibold rounded-xl" onPress={() => register()} >Sign Up</Text>
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