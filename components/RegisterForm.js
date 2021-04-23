import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import FormTextInput from './FormTextInput';
import {StyleSheet, Button, View} from 'react-native';
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
            <FormTextInput style={styles.containerForm}
                autoCapitalize="none"
                placeholder="email"
                onChangeText={(txt) => handleInputChange('email', txt)}
            />
            <FormTextInput style={styles.containerForm}
                autoCapitalize="none"
                placeholder="password"
                onChangeText={(txt) => handleInputChange('password', txt)}
                secureTextEntry={true}
            />
            <FormTextInput style={styles.containerForm}
                autoCapitalize="none"
                placeholder="full name"
                onChangeText={(txt) => handleInputChange('full_name', txt)}
            />
            <Button color='#124191' title="Register!" onPress={registerPress} />
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    containerForm: {
        flex: 1,
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 8,
        maxWidth: "100%",
        borderRadius: 4,
        borderColor: '#44546A',
    },

});

RegisterForm.propTypes = {
    navigation: PropTypes.object,
};

export default RegisterForm;