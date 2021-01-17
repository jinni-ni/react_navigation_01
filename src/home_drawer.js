import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { View, Text, Button } from 'react-native';


class DrawerHomeScreen extends Component {
    render() {
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Text>Home Screen</Text>
                <Button
                    title="to user screen"
                    onPress={() => {
                        this.props.navigation.navigate('User')
                    }}
                />
            </View>
        )
    }
}

export default DrawerHomeScreen;
