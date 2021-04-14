import React, {useEffect, useContext} from "react";
import {AuthContext} from '../contexts/AuthContext';
import PropTypes from 'prop-types';
import RegisterForm from '../components/RegisterForm';
import LogInForm from '../components/LoginForm';
import {
    StyleSheet,
    View,
    Text
} from 'react-native';
import firebase from 'firebase';

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
        textAlign: 'center',
    },
});

Login.propTypes = {
    navigation: PropTypes.object,
};

export default Login;