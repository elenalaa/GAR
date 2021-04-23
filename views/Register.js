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
} from 'react-native';

const image = require('../assets/LogoLogo.png') 
const Register = ({navigation}) => {
    const {setUser, isLoggedIn, user, setIsLoggedIn} = useContext(AuthContext);
    //console.log('ollaanko logged in? ', isLoggedIn);

    const getToken = async () => {
        const userToken = await AsyncStorage.getItem('userToken');
        console.log('Saako getToken oikeen tokenin? ', userToken);
        if (userToken) {
            setIsLoggedIn(true);
        }
    };

    const theme = {
        colors: {
          primary: '#124191',
        },
      };
    
    useEffect(() => {
        getToken();
    }, []);


    return (
        <ImageBackground source={image} style={styles.imageContainer}>
        <RegisterForm navigation={navigation} />
       </ImageBackground> 
    );
};


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },   
    imageContainer: {
        flex: 1,
        resizeMode: "cover",
        justifyContent: "center",
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 150,
    }, 
    loginForm: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
        maxWidth: "49%",


    },
    
});

Register.propTypes = {
    navigation: PropTypes.object,
};

export default Register;