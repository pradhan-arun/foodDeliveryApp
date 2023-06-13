import { View, Text, Button } from 'react-native'
import React from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const MyProfile = ({ navigation }) => {

  const addValue = async () => {
    console.log("handle")
    
  }
  return (
    <View className="mt-10">
      <Button title="Click" onPress={() => addValue()} />
    </View>
  )
}

export default MyProfile