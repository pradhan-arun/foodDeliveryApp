
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
import Logout from './screens/Logout';
import Welcome from './screens/welcomePages/Welcome';
import Register from './screens/Register';


const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const MainPage = () => {
  const { user, login } = useContext(AuthContext);
  console.log("user main page = ", user)


  return (
    <>
      {user && user != null ?
        <SafeAreaProvider className="bg-white">
          <NavigationContainer>
            <Drawer.Navigator screenOptions={{
              headerShown: false,
              drawerType: 'back',
              overlayColor: 'transparent',
              drawerActiveBackgroundColor: "black",
              drawerInactiveBackgroundColor: "red",
              drawerLabelStyle: {}
            }} drawerContent={(props) => <CustomDrawer {...props} />} >
              <Drawer.Screen name="MainTabNavigator" component={MainTabNavigator} />
              <Drawer.Screen name="MyOrder" component={MyOrder} />
              <Drawer.Screen name="MyProfile" component={MyProfile} />
              <Drawer.Screen name="ContactUs" component={ContactUs} />
              <Drawer.Screen name="DeliveryAddress" component={DeliveryAddress} />
              <Drawer.Screen name="Payment" component={Payment} />
              <Drawer.Screen name="HelpsAndFaqs" component={HelpsAndFaqs} />
              <Drawer.Screen name="Setting" component={Setting} />
              <Drawer.Screen name="Details" component={Details} />
              <Drawer.Screen name="Logout" component={Logout} />
            </Drawer.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>  :
        <NavigationContainer>
          <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Welcome" component={Welcome} />
            <Stack.Screen name="Login" component={Login} />
            <Stack.Screen name="Register" component={Register} />
          </Stack.Navigator>
        </NavigationContainer>}

    </>



  )
}

export default MainPage