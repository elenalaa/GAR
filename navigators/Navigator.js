import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../views/Home';
import HomeAdmin from '../views/HomeAdmin';

const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();

const TabScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeAdmin" component={HomeAdmin} />
            <Tab.Screen name="Home" component={Home} />
        </Tab.Navigator>
    );
};

const StackScreen = () => {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Home" component={TabScreen} />
        </Stack.Navigator>
    );
};

const Navigator = () => {
    return (
        <NavigationContainer>
            <StackScreen />
        </NavigationContainer>
    );
};

export default Navigator;