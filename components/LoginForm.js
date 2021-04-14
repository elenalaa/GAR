import React, {useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PropTypes from 'prop-types';
import FormTextInput from './FormTextInput';
import {Button, View} from 'react-native';
import useSignUpForm from '../hooks/RegisterHooks';
import {doLogin} from '../hooks/ApiHooks';
import {AuthContext} from '../contexts/AuthContext';


const LogInForm = ({navigation}) => {
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);

    const loginPress = async () => {
        try {
            // form inputs to Apihooks to get userdata
            const userData = await doLogin(inputs);
            console.log('Kalastetaan userData: ', userData.operationType);
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