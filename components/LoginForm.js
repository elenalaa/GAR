import React, {useContext} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import PropTypes from 'prop-types';
import FormTextInput from './FormTextInput';
import {StyleSheet,Button, View, Text} from 'react-native';
import useSignUpForm from '../hooks/RegisterHooks';
import {doLogin, getToken} from '../hooks/ApiHooks';
import {AuthContext} from '../contexts/AuthContext';
import { color } from 'react-native-reanimated';


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