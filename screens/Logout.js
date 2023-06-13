import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import { AuthContext } from '../Auth/AuthProvider'

const Logout = ({navigation}) => {
    const { user, logout } = useContext(AuthContext);
    const handle = () => {
        console.log("logout is cslled");
        logout();
        console.log("navigtion = ", navigation);
    }
    return (
        <View>
            <Text>Logout</Text>
            <Button title='logout' onPress={(e)=>handle()} />
        </View>
    )
}

export default Logout