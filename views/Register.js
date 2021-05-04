import React, {useContext} from "react";
import PropTypes from 'prop-types';
import RegisterForm from '../components/RegisterForm';
import {
    StyleSheet,
    ImageBackground,
} from 'react-native';

const image = require('../assets/LogoLogo.png')
const Register = ({navigation}) => {


    return (
        <ImageBackground source={image} style={styles.imageContainer}>
            <RegisterForm style={styles.loginForm} navigation={navigation} />
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


    



Register.propTypes = {
    navigation: PropTypes.object,
};

export default Register;