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