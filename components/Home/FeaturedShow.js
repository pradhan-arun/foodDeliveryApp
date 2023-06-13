import { View, Text, ScrollView, Image, Touchable, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from 'react-native-vector-icons/FontAwesome'
import Icon1 from 'react-native-vector-icons/MaterialIcons';

const FeaturedShow = ({navigation}) => {

    return (
        <View>
            <View className="flex-row justify-between mb-6">
                <Text className="text-xl-sofia text-[#323643] font-semibold">Featured Restaurants</Text>
                <TouchableOpacity>
                    <Text className="text-orange-500 text-base-sofia font-medium">View All</Text>
                </TouchableOpacity>
            </View>
            <ScrollView horizontal className="flex flex-row space-x-3">
                <TouchableOpacity onPress={()=>navigation.navigate('Details')}>
                    <View className="w-[350px] bg-white shadow-lg shadow-black rounded-3xl mb-4  pb-4">
                        <View className="">
                            <Image source={require('../../assets/food/p-104.jpeg')} className="w-[350px] h-48 rounded-t-3xl" />
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
                                <Text className="text-xl-sofia font-semibold">McDonald's</Text>
                                <View className="bg-sky-700 p-1 rounded-full">
                                    <Icon name="check" color="white" />
                                </View>
                            </View>
                            <View className="flex flex-row space-x-4">
                                <View className="flex-row space-x-2 items-center mt-3">
                                    <Icon name="bicycle" color="orange" size={20} />
                                    <Text className="text-base-sofia text-gray-500 font-medium">Free Delivery</Text>
                                </View>
                                <View className="flex-row space-x-2 items-center mt-3">
                                    <Icon1 name="timer" color="orange" size={20} />
                                    <Text className="text-base-sofia text-gray-500 font-medium">10-15 minutes</Text>
                                </View>
                            </View>

                            <View className="flex-row">
                                <Text className="bg-white px-4 py-3 mr-2 text-gray-500 rounded-full border-1 shadow-md shadow-slate-400">BURGER</Text>
                                <Text className="bg-white px-4 py-3 mr-2 text-gray-500 rounded-full border-1 shadow-md shadow-slate-400">CHICKEN</Text>
                                <Text className="bg-white px-4 py-3 mr-2 text-gray-500 rounded-full border-1 shadow-md shadow-slate-400">FAST-FOOD</Text>
                            </View>
                        </View>


                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View className="w-[350px] bg-white shadow-lg shadow-black rounded-3xl mb-4  pb-4">
                        <View>
                            <Image source={require('../../assets/food/p-105.jpeg')} className="w-[350px] h-48 rounded-t-3xl" />
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
                                <Text className="text-xl-sofia font-semibold">McDonald's</Text>
                                <View className="bg-sky-700 p-1 rounded-full">
                                    <Icon name="check" color="white" />
                                </View>
                            </View>
                            <View className="flex flex-row space-x-4">
                                <View className="flex-row space-x-2 items-center mt-3">
                                    <Icon name="bicycle" color="orange" size={20} />
                                    <Text className="text-base-sofia text-gray-500 font-medium">Free Delivery</Text>
                                </View>
                                <View className="flex-row space-x-2 items-center mt-3">
                                    <Icon1 name="timer" color="orange" size={20} />
                                    <Text className="text-base-sofia text-gray-500 font-medium">10-15 minutes</Text>
                                </View>
                            </View>
                            <View className="flex-row">
                                <Text className="bg-white px-4 py-3 mr-2 text-gray-500 rounded-full border-1 shadow-md shadow-slate-400">BURGER</Text>
                                <Text className="bg-white px-4 py-3 mr-2 text-gray-500 rounded-full border-1 shadow-md shadow-slate-400">CHICKEN</Text>
                                <Text className="bg-white px-4 py-3 mr-2 text-gray-500 rounded-full border-1 shadow-md shadow-slate-400">FAST-FOOD</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View className="w-[350px] bg-white shadow-lg shadow-black rounded-3xl mb-4  pb-4">
                        <View>
                            <Image source={require('../../assets/food/p-107.jpeg')} className="w-[350px] h-48 rounded-t-3xl" />
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
                                <Text className="text-xl-sofia font-semibold">McDonald's</Text>
                                <View className="bg-sky-700 p-1 rounded-full">
                                    <Icon name="check" color="white" />
                                </View>
                            </View>
                            <View className="flex flex-row space-x-4">
                                <View className="flex-row space-x-2 items-center mt-3">
                                    <Icon name="bicycle" color="orange" size={20} />
                                    <Text className="text-base-sofia text-gray-500 font-medium">Free Delivery</Text>
                                </View>
                                <View className="flex-row space-x-2 items-center mt-3">
                                    <Icon1 name="timer" color="orange" size={20} />
                                    <Text className="text-base-sofia text-gray-500 font-medium">10-15 minutes</Text>
                                </View>
                            </View>
                            <View className="flex-row">
                                <Text className="bg-white px-4 py-3 mr-2 text-gray-500 rounded-full border-1 shadow-md shadow-slate-400">BURGER</Text>
                                <Text className="bg-white px-4 py-3 mr-2 text-gray-500 rounded-full border-1 shadow-md shadow-slate-400">CHICKEN</Text>
                                <Text className="bg-white px-4 py-3 mr-2 text-gray-500 rounded-full border-1 shadow-md shadow-slate-400">FAST-FOOD</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View className="w-[350px] bg-white shadow-lg shadow-black rounded-3xl mb-4  pb-4">
                        <View className="w-[350px]">
                            <Image source={require('../../assets/food/p-108.jpeg')} className="w-[350px] h-48 rounded-t-3xl" />
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
                                <Text className="text-xl-sofia font-semibold">McDonald's</Text>
                                <View className="bg-sky-700 p-1 rounded-full">
                                    <Icon name="check" color="white" />
                                </View>
                            </View>
                            <View className="flex flex-row space-x-4">
                                <View className="flex-row space-x-2 items-center mt-3">
                                    <Icon name="bicycle" color="orange" size={20} />
                                    <Text className="text-base-sofia text-gray-500 font-medium">Free Delivery</Text>
                                </View>
                                <View className="flex-row space-x-2 items-center mt-3">
                                    <Icon1 name="timer" color="orange" size={20} />
                                    <Text className="text-base-sofia text-gray-500 font-medium">10-15 minutes</Text>
                                </View>
                            </View>
                            <View className="flex-row">
                                <Text className="bg-white px-4 py-3 mr-2 text-gray-500 rounded-full border-1 shadow-md shadow-slate-400">BURGER</Text>
                                <Text className="bg-white px-4 py-3 mr-2 text-gray-500 rounded-full border-1 shadow-md shadow-slate-400">CHICKEN</Text>
                                <Text className="bg-white px-4 py-3 mr-2 text-gray-500 rounded-full border-1 shadow-md shadow-slate-400">FAST-FOOD</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

                <TouchableOpacity>
                    <View className="w-[350px] bg-white shadow-lg shadow-black rounded-3xl mb-4  pb-4">
                        <View>
                            <Image source={require('../../assets/food/p-109.jpeg')} className="w-[350px] h-48 rounded-t-3xl" />
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
                                <Text className="text-xl-sofia font-semibold">McDonald's</Text>
                                <View className="bg-sky-700 p-1 rounded-full">
                                    <Icon name="check" color="white" />
                                </View>
                            </View>
                            <View className="flex flex-row space-x-4">
                                <View className="flex-row space-x-2 items-center mt-3">
                                    <Icon name="bicycle" color="orange" size={20} />
                                    <Text className="text-base-sofia text-gray-500 font-medium">Free Delivery</Text>
                                </View>
                                <View className="flex-row space-x-2 items-center mt-3">
                                    <Icon1 name="timer" color="orange" size={20} />
                                    <Text className="text-base-sofia text-gray-500 font-medium">10-15 minutes</Text>
                                </View>
                            </View>
                            <View className="flex-row">
                                <Text className="bg-white px-4 py-3 mr-2 text-gray-500 rounded-full border-1 shadow-md shadow-slate-400">BURGER</Text>
                                <Text className="bg-white px-4 py-3 mr-2 text-gray-500 rounded-full border-1 shadow-md shadow-slate-400">CHICKEN</Text>
                                <Text className="bg-white px-4 py-3 mr-2 text-gray-500 rounded-full border-1 shadow-md shadow-slate-400">FAST-FOOD</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>

            </ScrollView>
        </View>
    )
}

export default FeaturedShow