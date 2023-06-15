
import { StatusBar } from 'expo-status-bar';
import { Button, StyleSheet, Text, View } from 'react-native';
import { createDrawerNavigator, DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from './screens/Home';
import Setting from './screens/Setting';
import { useContext, useEffect, useState } from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import CustomDrawer from './screens/CustomDrawer';
import MyOrder from './screens/MyOrder';
import ContactUs from './screens/ContactUs';
import DeliveryAddress from './screens/DeliveryAddress';
import MyProfile from './screens/MyProfile';
import Payment from './screens/Payment';
import HelpsAndFaqs from './screens/HelpsAndFaqs';
import Details from './screens/Details';
import Navigate from './screens/TabBar/Navigate';
import LocationTracking from './screens/TabBar/LocationTracking';
import AddCardDetails from './screens/TabBar/AddCardDetails';
import Like from './screens/TabBar/Like';
import Notification from './screens/TabBar/Notification';
import MainTabNavigator from './screens/TabBar/MainTabNavigator';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AuthProvider, AuthContext } from './Auth/AuthProvider';
import Login from './screens/Login';
import MainPage from './MainPage';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export default function App() {

  return <>
    <AuthProvider>
      <MainPage />
    </AuthProvider>

  </>
}

function TabNavigator() {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="MyProfile1" component={LocationTracking} />
      <Tab.Screen name="MyProfile2" component={AddCardDetails} />
      <Tab.Screen name="MyProfile3" component={Like} />
      <Tab.Screen name="MyProfile4" component={Notification} />
    </Tab.Navigator>
  );
}
