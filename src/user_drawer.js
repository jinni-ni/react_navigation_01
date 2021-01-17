import 'react-native-gesture-handler';
import React, {Component} from 'react';
import {View, Text, Button, Image} from 'react-native';

import Logo from './assets/pics/home_icon.png'

class DrawerUserScreen extends Component {
    drawerStyle = () => {
        this.props.navigation.setOptions({
            drawerIcon: () => (
                <Image
                    source={Logo}
                    style={{width: 40, height: 40}}
                />
            )
        })
    }

    render() {
        this.drawerStyle();
        return (
            <View style={{
                flex: 1,
                alignItems: 'center',
                justifyContent: 'center',
            }}>
                <Text>User Screen</Text>
                <Button
                    title="to home screen"
                    onPress={() => {
                        this.props.navigation.navigate('Home');
                    }}
                />
            </View>
        )

    }
}


export default DrawerUserScreen;
