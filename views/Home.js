import React, {useContext} from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';
import PropTypes from 'prop-types';
import {AuthContext} from '../contexts/AuthContext';

import {Ionicons} from '@expo/vector-icons';
import {ThemeProvider, Button, Header} from 'react-native-elements';
import {Feather} from '@expo/vector-icons';
import {FontAwesome5} from '@expo/vector-icons';
import {MaterialIcons} from '@expo/vector-icons';
import {Appbar} from 'react-native-paper';
import {IconButton} from 'react-native-paper';
import firebase from '../firebase/config';

const Home = ({navigation}) => {

    const {isLoggedIn, setIsLoggedIn} = useContext(AuthContext);

    const logout = async () => {
        await firebase.auth().signOut()
        setIsLoggedIn(false);
        navigation.navigate('Login');
    };

    const theme = {
        colors: {
            primary: '#124191',
        },
    };

    return (
        <SafeAreaView style={styles.container}>
            <ThemeProvider theme={theme}>
                <Button
                    icon={
                        <FontAwesome5
                            name="screwdriver"
                            size={72}
                            color="white" />
                    }
                    title="  ITEMS" onPress={() =>
                        navigation.navigate('Items')
                    }
                />

                <Button style={styles.button}
                    icon={
                        <FontAwesome5
                            name="clipboard-list"
                            size={72}
                            color="white" />
                    }
                    title="  WISHLIST" onPress={() =>
                        navigation.navigate('WishList')
                    }
                />

                <Button style={styles.button}
                    icon={
                        <FontAwesome5
                            name="shopping-basket"
                            size={72} color="white" />
                    }
                    title="  MY ITEMS" color="#124191" onPress={() =>
                        navigation.navigate('')
                    }
                />

                <Button style={styles.button}
                    icon={
                        <Feather
                            name="calendar"
                            size={72}
                            color="white" />
                    }
                    title=" MY CALENDARS" onPress={() =>
                        navigation.navigate('Calendars')
                    }
                />
                {/*  <IconButton 

            icon="log-out"
            size={72}
            onPress={logout}>
            </IconButton>  */}

                <Button
                    title={'Logout'} onPress={logout} />

            </ThemeProvider>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDF2F5',
        margin: 20,
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignSelf: 'stretch',
        marginVertical: 30,

    },
    button: {
        borderRadius: 4,
        paddingTop: 10,
    }

});

Home.propTypes = {
    navigation: PropTypes.object,
};

export default Home;