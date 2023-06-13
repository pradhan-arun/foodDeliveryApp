import { View, Text, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context';

const Setting = () => {
    const navigation = useNavigation();
    return (<>
        <SafeAreaView>
            <View>
                <Text>Setting</Text>
                <Button title="Go to the details page " onPress={() => navigation.navigate('Home', { title: "My name is arun pradhan" })} />
            </View>
        </SafeAreaView>
    </>
    )
}

export default Setting;