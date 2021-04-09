import React, {useEffect, useContext} from "react";
import {AuthContext} from '../contexts/AuthContext';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RegisterForm from '../components/RegisterForm';
import LogInForm from '../components/LoginForm';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';



const Login = ({navigation}) => {
    const {setUser, isLoggedIn, user, setIsLoggedIn} = useContext(AuthContext);
    //console.log('ollaanko logged in? ', isLoggedIn);

    const getToken = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        console.log('Saako getToken oikeen tokenin? ', userToken);
        if (userToken) {
            setIsLoggedIn(true);
        }
    };
    useEffect(() => {
        getToken();
    }, []);


    return (
        <View style={styles.container}>
            <Text>Login!</Text>
            <LogInForm navigation={navigation} />
            <RegisterForm navigation={navigation} />
        </View>
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

Login.propTypes = {
    navigation: PropTypes.object,
};

export default Login;