import React, {useContext} from 'react';
import {StyleSheet, SafeAreaView, Text, Button} from 'react-native';
import PropTypes from 'prop-types';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {AuthContext} from '../contexts/AuthContext';


const Home = ({navigation}) => {

    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);

    const logout = async () => {
        await AsyncStorage.clear();
        setIsLoggedIn(false);
        navigation.navigate('Login');
    };


    return (
        <SafeAreaView style={styles.container}>
            <Text>Home</Text>
            <Button title="Item list" onPress={() =>
                navigation.navigate('Items')
            } style={styles.button}
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

    button: {
        paddingHorizontal: 20,
        paddingVertical: 6,
        borderRadius: 10,
        marginHorizontal: "1%",
        marginBottom: 6,
        minWidth: "48%",
        textAlign: "center",
    },
});

Home.propTypes = {
    navigation: PropTypes.object,
};

export default Home;