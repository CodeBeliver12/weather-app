import React from 'react';
import { Platform, StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { navigationRef } from './root-navigation';
import { FirstScreen, SecondScreen } from '../screens';
import { Colors } from '../constants';

const RootStack = createStackNavigator();

export default function () {

    return (
        <View style={{ flex: 1 }}>
            <StatusBar
                barStyle={Platform.OS === 'ios' ? 'dark-content' : 'light-content'}
                backgroundColor={'#000'}
            />
            <NavigationContainer ref={navigationRef}>
                <RootStack.Navigator
                    initialRouteName={'first-screen'}
                    screenOptions={{
                        headerShown: true,
                        animationEnabled: false,
                        headerStyle: {
                            backgroundColor: Colors.ui_primary
                        }
                    }}
                >
                    <RootStack.Screen
                        name={'first-screen'}
                        component={FirstScreen}
                        options={{
                            title: 'WeatherApp', headerTitleAlign: 'center', headerTintColor: Colors.ui_white
                        }}
                    />
                    <RootStack.Screen
                        name={'second-screen'}
                        component={SecondScreen}
                        options={{
                            title: 'WeatherApp', headerTitleAlign: 'center', headerTintColor: Colors.ui_white
                        }}
                    />
                </RootStack.Navigator>
            </NavigationContainer>
        </View>
    );
}