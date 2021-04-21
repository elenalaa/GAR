import React, {useEffect, useContext} from "react";
import {AuthContext} from '../contexts/AuthContext';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import RegisterForm from '../components/RegisterForm';
import LogInForm from '../components/LoginForm';
import {
    StyleSheet,
    View,
    Text,
    ImageBackground,
    Button,
} from 'react-native';

const image = require('../assets/LogoLogo.png') 
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
        
        <ImageBackground source={image} style={styles.imageContainer}>
        <LogInForm style={styles.loginForm} navigation={navigation} />
        
        {/* <RegisterForm navigation={navigation} /> */}
        <Button 
            color='#124191'
            title="Don't have an account? Create one" 
            onPress={() =>
            navigation.navigate('Register')
        }
        />
        
        </ImageBackground> 
        
    );
};


const styles = StyleSheet.create({  
    imageContainer: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 150,
    }, 
    buttonRegister: {
        marginTop: 10,
       //fontFamily: 'Nokia Pure Text T',
    },
    loginForm: {
        marginTop: 30,
    },
    
});

Login.propTypes = {
    navigation: PropTypes.object,
};

export default Login;