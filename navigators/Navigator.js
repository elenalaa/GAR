import React, {useContext} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {NavigationContainer, StackActions} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {AuthContext} from '../contexts/AuthContext';
import Home from '../views/Home';
import HomeAdmin from '../views/HomeAdmin';
import Login from '../views/Login';
import Items from '../views/Items';
import Product from '../views/Product';
import AddItem from '../views/AddItem';
import Calendars from '../views/Calendars';
import BorrowedItems from '../views/BorrowedItems';
import WishList from '../views/WishList';
import Register from '../views/Register';
import {MaterialIcons} from '@expo/vector-icons';
import {FontAwesome} from '@expo/vector-icons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {Entypo} from '@expo/vector-icons';
import WishItem from '../views/WishItem';
import AddItemWish from '../views/AddItemWish';
import firebase from '../firebase/config';
import Borrow from '../views/Borrow';
import Reservations from '../views/Reservations';


const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();


const TabScreen = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Admin" component={HomeAdmin}
                options={{
                    tabBarIcon: ({color, size}) => <MaterialIcons name="admin-panel-settings" size={24} color="black" />
                }}
            />
            <Tab.Screen name="User"
                component={Home}
                options={{
                    tabBarIcon: ({color, size}) => <FontAwesome name="user-circle-o" size={24} color="black" />
                }}
            />
        </Tab.Navigator>
    );
};

const StackScreen = () => {
    const {setIsLoggedIn, isLoggedIn} = useContext(AuthContext);

    const logout = async () => {
        await firebase.auth().signOut()
        setIsLoggedIn(false);
    };

    return (
        <Stack.Navigator>
            {isLoggedIn ? (
                <>

                    <Stack.Screen name="Home" component={TabScreen}
                        options={{
                            headerStyle: {
                                backgroundColor: '#EDF2F5',
                            },
                            headerTintColor: '#124191',
                            headerTitle: 'Garage App',
                            headerRight: () => (
                                <TouchableOpacity onPress={logout}>
                                    <Entypo name="log-out"
                                        size={24}
                                        color="black" />
                                </TouchableOpacity>
                            ),
                        }}

                    />
                    {/* Item screens*/}
                    <Stack.Screen name="Items" component={Items} />
                    <Stack.Screen name="Product" component={Product} />
                    <Stack.Screen name="AddItem" component={AddItem} />

                    {/** wish list screens */}
                    <Stack.Screen name="WishList" component={WishList} />
                    <Stack.Screen name="AddItemWish" component={AddItemWish} />
                    <Stack.Screen name="WishItem" component={WishItem} />

                    {/** Borrowing and reservation screens */}
                    <Stack.Screen name="Calendars" component={Calendars} />
                    <Stack.Screen name="BorrowedItems" component={BorrowedItems} />
                    <Stack.Screen name="Borrow" component={Borrow} />
                    <Stack.Screen name="Reservations" component={Reservations} />

                </>
            ) : (
                <>
                    <Stack.Screen name="Login" component={Login} />
                    <Stack.Screen name="Register" component={Register} />
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