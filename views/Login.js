import React, {useEffect, useContext} from "react";
import {AuthContext} from '../contexts/AuthContext';
import PropTypes from 'prop-types';
import LogInForm from '../components/LoginForm';
import {
    StyleSheet,
    ImageBackground,
    Button,
} from 'react-native';
import firebase from 'firebase';

const image = require('../assets/LogoLogo.png')
const Login = ({navigation}) => {
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);


    const getToken = async () => {

        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                console.log('get token user', user);
                setIsLoggedIn(true)
            } else {
                setIsLoggedIn(false)
            }
        });

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