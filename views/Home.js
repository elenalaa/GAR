import React, {useContext} from 'react';
import {StyleSheet, SafeAreaView, Text, Button} from 'react-native';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from '../contexts/AuthContext';


const Home = ({navigation}) => {

    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);

    const logout = async () => {
        setIsLoggedIn(false);
        await AsyncStorage.clear();
        navigation.navigate('Login');
    };


    return (
        <SafeAreaView style={styles.container}>
            <Text>Home</Text>
            <Button title="Item list" onPress={() =>
                navigation.navigate('Items')
            }
            />
            <Text>Log out</Text>
            <Button title={'Logout'} onPress={logout} />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40,
    },
});

Home.propTypes = {
    navigation: PropTypes.object,
};

export default Home;