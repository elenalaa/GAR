import React, {useContext} from 'react';
import PropTypes from 'prop-types';
import FormTextInput from './FormTextInput';
import {StyleSheet, Button, View, Text} from 'react-native';
import useSignUpForm from '../hooks/RegisterHooks';
import {doLogin, getToken} from '../hooks/ApiHooks';
import {AuthContext} from '../contexts/AuthContext';
import useLoginForm from '../hooks/LoginHooks';


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

    const {inputs, handleInputChange} = useLoginForm();


    return (
        <View>
            <FormTextInput style={styles.containerForm}
                autoCapitalize="none"
                placeholderTextColor="black"
                placeholder="email"
                onChangeText={(txt) => handleInputChange('email', txt)}
            />
            <FormTextInput style={styles.containerForm}
                autoCapitalize="none"
                placeholder="password"
                placeholderTextColor="black"
                onChangeText={(txt) => handleInputChange('password', txt)}
                secureTextEntry={true}
            />
            <Button style={styles.buttonS}
                color='#124191'
                title="SIGN IN"
                onPress={loginPress} />
            <Text>...</Text>
        </View>

    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

    },
    containerForm: {
        backgroundColor: '#fff',
        padding: 10,
        marginVertical: 8,
        borderRadius: 4,
        borderColor: '#44546A',
        marginBottom: 10,
    },
    buttonS: {
        margin: 1,
    }

});

LogInForm.propTypes = {
    navigation: PropTypes.object,
};

export default LogInForm;