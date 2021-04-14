import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import FormTextInput from './FormTextInput';
import {Button, View} from 'react-native';
import useSignUpForm from '../hooks/RegisterHooks';
import {doRegister} from '../hooks/ApiHooks';
import {AuthContext} from '../contexts/AuthContext';


const RegisterForm = ({navigation}) => {
    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);

    const registerPress = async () => {
        try {
            // apihooks doRegister tries to make new user and returns it userData
            const newUser = await doRegister(inputs);
            console.log('uus käyttäjä luotu: ', newUser);
            if (newUser) {
                setIsLoggedIn(true);
            }
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
            <FormTextInput
                autoCapitalize="none"
                placeholder="full name"
                onChangeText={(txt) => handleInputChange('full_name', txt)}
            />
            <Button title="Register!" onPress={registerPress} />
        </View>

    );
};

RegisterForm.propTypes = {
    navigation: PropTypes.object,
};

export default RegisterForm;