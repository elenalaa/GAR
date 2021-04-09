import React, {useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PropTypes from 'prop-types';
import FormTextInput from './FormTextInput';
import {Button, View} from 'react-native';
import useSignUpForm from '../hooks/RegisterHooks';
import {doLogin, getToken} from '../hooks/ApiHooks';
import {AuthContext} from '../contexts/AuthContext';


const LogInForm = ({navigation}) => {
    const {isLoggedIn, setIsLoggedIn, setUser} = useContext(AuthContext);

    const loginPress = async () => {
        try {
            // form inputs to Apihooks to get userdata
            const userData = await doLogin(inputs);
            console.log('Kalastetaan userData: ', userData);
            setUser(userData);

            //token get and set
            const token = await getToken();
            await AsyncStorage.setItem('userToken', token);
            //console.log('Login press saa tokenin? :', token)
            setIsLoggedIn(true);

        } catch (e) {
            console.log('login error:', e.message);
        }
    };

    const {inputs, handleInputChange} = useSignUpForm();


    return (
        <View>
            <FormTextInput
                autoCapitalize="none"
                placeholder="email"
                onChangeText={(txt) => handleInputChange('email', txt)}
            />
            <FormTextInput
                autoCapitalize="none"
                placeholder="password"
                onChangeText={(txt) => handleInputChange('password', txt)}
                secureTextEntry={true}
            />
            <Button title="Log IN" onPress={loginPress} />
        </View>

    );
};

LogInForm.propTypes = {
    navigation: PropTypes.object,
};

export default LogInForm;