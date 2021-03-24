import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from '../views/Home';
import HomeAdmin from '../views/HomeAdmin';
import Login from '../views/Login';
import {AuthContext} from '../contexts/AuthContext';


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
    const [isLoggedIn] = useContext(AuthContext);
    return (
        <Stack.Navigator>
            {isLoggedIn ? (
                <>
                    <Stack.Screen name="Home" component={TabScreen} />
                </>
            ) : (
                <>
                    <Stack.Screen name="Login" component={Login} />
                </>
            )}
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