import { View, Text } from 'react-native'
import React from 'react'
// import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Like from './Like';
import AddCardDetails from './AddCardDetails';
import LocationTracking from './LocationTracking';
import Notification from './Notification';
import Home from '../Home';
import Icon from 'react-native-vector-icons/FontAwesome'

const Tab = createBottomTabNavigator();


const MainTabNavigator = () => {
  return (
    <>
      {/* <Tabs.Navigator 
          screenOptions={{
            tabBarStyle: { backgroundColor: 'red', position:'absolute', bottom:0 }, // Example of background color
            tabBarActiveTintColor: 'white', // Example of active tab label color
            tabBarInactiveTintColor: 'gray', // Example of inactive tab label color
            tabBarLabelStyle: { fontSize: 16, fontWeight: 'bold' }, // Example of tab label style
          }}>
        
            <Tabs.Screen name="Like" component={Like} />
            <Tabs.Screen name="Add" component={AddCardDetails} />
        </Tabs.Navigator> */}
      <Tab.Navigator screenOptions={{ headerShown: false,
         tabBarActiveTintColor :"white", 
         tabBarActiveBackgroundColor:"#FE724C"
          }} tabBarStyle={{paddingVertical:10}}>
        <Tab.Screen name="Home" component={Home} options={{
          tabBarIcon: ({color, size}) =>( <Icon name="home" size={30} />)
        }}/>
        <Tab.Screen name="MyProfile1" component={LocationTracking} options={{
          tabBarIcon: ({color, size}) =>( <Icon name="map-marker" size={30} />)
        }} />
        <Tab.Screen name="MyProfile2" component={AddCardDetails} options={{
          tabBarIcon: ({color, size}) =>( <Icon name="car" size={30} />)
        }} />
        <Tab.Screen name="MyProfile3" component={Like} options={{
          tabBarIcon: ({color, size}) =>( <Icon name="phone" size={30} />)
        }} />
        <Tab.Screen name="MyProfile4" component={Notification} options={{
          tabBarIcon: ({color, size}) =>( <Icon name="map" size={30} />)
        }} />
      </Tab.Navigator>
    </>
  )
}

export default MainTabNavigator




// import React from 'react';
// import { View, Text, Image } from 'react-native';
// import { createDrawerNavigator } from '@react-navigation/drawer';
// import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
// import { useRoute } from '@react-navigation/native';
// import Icon from 'react-native-vector-icons/Ionicons';

// // Screens
// import HomeScreen from './HomeScreen';
// import SettingsScreen from './SettingsScreen';
// import ProfileScreen from './ProfileScreen';

// // Drawer Navigator
// const Drawer = createDrawerNavigator();

// const CustomDrawer = () => {
//   return (
//     <Drawer.Navigator>
//       <Drawer.Screen name="Home" component={HomeScreen} />
//       <Drawer.Screen name="Settings" component={SettingsScreen} />
//       <Drawer.Screen name="Profile" component={ProfileScreen} />
//     </Drawer.Navigator>
//   );
// };

// // Bottom Tab Navigator
// const Tab = createBottomTabNavigator();

// const HomeTabs = () => {
//   const route = useRoute();

//   // Check if the active screen is SettingsScreen
//   const hideBottomNav = route.name === 'Settings';

//   return (
//     <Tab.Navigator
//       tabBarOptions={{
//         style: { display: hideBottomNav ? 'none' : 'flex' }, // Hide or show the bottom navigation
//       }}
//     >
//       <Tab.Screen
//         name="Home"
//         component={CustomDrawer}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Icon name="home" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Settings"
//         component={SettingsScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Icon name="settings" color={color} size={size} />
//           ),
//         }}
//       />
//       <Tab.Screen
//         name="Profile"
//         component={ProfileScreen}
//         options={{
//           tabBarIcon: ({ color, size }) => (
//             <Icon name="person" color={color} size={size} />
//           ),
//         }}
//       />
//     </Tab.Navigator>
//   );
// };

// // App Component
// const App = () => {
//   return (
//     <NavigationContainer>
//       <HomeTabs />
//     </NavigationContainer>
//   );
// };

// export default App;
