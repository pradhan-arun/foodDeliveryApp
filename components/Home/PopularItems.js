import { View, Text, ScrollView, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/MaterialIcons';
import {NavigationContainer, useNavigation} from '@react-navigation/native'
import {createStackNavigator} from '@react-navigation/stack'
import imagesPath from '../../assets/imagesPath';

const Stack = createStackNavigator();


const PopularItems = () => {
    const navigation = useNavigation();

    const handlePress = (event) =>{
        // console.log("Event == ", event);
        navigation.navigate("Details", {imagePath:event})
    }
    return (
        <View className="mt-4">
            <View className="flex-row justify-between mb-6">
                <Text className="text-xl-sofia text-[#323643] font-semibold">Popular Items</Text>
                <TouchableOpacity>
                    <Text className="text-orange-500 text-base-sofia font-medium">View All</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal className="space-x-3">
                <TouchableOpacity onPress={()=>handlePress(imagesPath.p1 )} >
                    <View className=" bg-white shadow-sm shadow-black rounded-3xl mb-4  pb-4">
                        <View className="">
                            <Image source={imagesPath.p1} className=" w-[300px] h-48 rounded-t-3xl" />
                            <View className="absolute flex flex-row items-center space-x-1 bg-white top-3 left-3 px-4 py-3 rounded-l-full rounded-r-full">
                                <Text className="text-gray-700 font-semibold text-base-sofia">4.5</Text>
                                <Icon name="star" color="#FFC529" />
                                <Text className="text-gray-400 text-sm-sofia font-semibold">(25+)</Text>
                            </View>
                            <View className="absolute right-3 bg-orange-500 top-3 px-3 py-3 rounded-full">
                                <Icon name="heart" color="white" size={25} />
                            </View>
                        </View>
                        <View className="mx-6 my-2">
                            <View className="flex flex-row items-center space-x-3">
                                <Text className="text-xl-sofia font-semibold">Chicken Tikka</Text>
                                <View className="bg-sky-700 p-1 rounded-full">
                                    <Icon name="check" color="white" />
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>handlePress(imagesPath.p9 )}>
                    <View className=" bg-white shadow-sm shadow-black rounded-3xl mb-4  pb-4">
                        <View className="">
                            <Image source={imagesPath.p9} className=" w-[300px] h-48 rounded-t-3xl" />
                            <View className="absolute flex flex-row items-center space-x-1 bg-white top-3 left-3 px-4 py-3 rounded-l-full rounded-r-full">
                                <Text className="text-gray-700 font-semibold text-base-sofia">4.5</Text>
                                <Icon name="star" color="#FFC529" />
                                <Text className="text-gray-400 text-sm-sofia font-semibold">(25+)</Text>
                            </View>
                            <View className="absolute right-3 bg-orange-500 top-3 px-3 py-3 rounded-full">
                                <Icon name="heart" color="white" size={25} />
                            </View>
                        </View>
                        <View className="mx-6 my-2">
                            <View className="flex flex-row items-center space-x-3">
                                <Text className="text-xl-sofia font-semibold">Chicken Tikka</Text>
                                <View className="bg-sky-700 p-1 rounded-full">
                                    <Icon name="check" color="white" />
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>handlePress(imagesPath.p3)}>
                    <View className=" bg-white shadow-sm shadow-black rounded-3xl mb-4  pb-4">
                        <View className="">
                            <Image source={imagesPath.p3} className=" w-[300px] h-48 rounded-t-3xl" />
                            <View className="absolute flex flex-row items-center space-x-1 bg-white top-3 left-3 px-4 py-3 rounded-l-full rounded-r-full">
                                <Text className="text-gray-700 font-semibold text-base-sofia">4.5</Text>
                                <Icon name="star" color="#FFC529" />
                                <Text className="text-gray-400 text-sm-sofia font-semibold">(25+)</Text>
                            </View>
                            <View className="absolute right-3 bg-orange-500 top-3 px-3 py-3 rounded-full">
                                <Icon name="heart" color="white" size={25} />
                            </View>
                        </View>
                        <View className="mx-6 my-2">
                            <View className="flex flex-row items-center space-x-3">
                                <Text className="text-xl-sofia font-semibold">Chicken Tikka</Text>
                                <View className="bg-sky-700 p-1 rounded-full">
                                    <Icon name="check" color="white" />
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity onPress={()=>handlePress(imagesPath.p4 )}>
                    <View className=" bg-white shadow-sm shadow-black rounded-3xl mb-4  pb-4">
                        <View className="">
                            <Image source={imagesPath.p4} className=" w-[300px] h-48 rounded-t-3xl" />
                            <View className="absolute flex flex-row items-center space-x-1 bg-white top-3 left-3 px-4 py-3 rounded-l-full rounded-r-full">
                                <Text className="text-gray-700 font-semibold text-base-sofia">4.5</Text>
                                <Icon name="star" color="#FFC529" />
                                <Text className="text-gray-400 text-sm-sofia font-semibold">(25+)</Text>
                            </View>
                            <View className="absolute right-3 bg-orange-500 top-3 px-3 py-3 rounded-full">
                                <Icon name="heart" color="white" size={25} />
                            </View>
                        </View>
                        <View className="mx-6 my-2">
                            <View className="flex flex-row items-center space-x-3">
                                <Text className="text-xl-sofia font-semibold">Chicken Tikka</Text>
                                <View className="bg-sky-700 p-1 rounded-full">
                                    <Icon name="check" color="white" />
                                </View>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </ScrollView>
        </View>
    )
}

export default PopularItems