import React from 'react';
import {StyleSheet, SafeAreaView, Text, Button, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import AddItem from './AddItem';
//import Calendars from './Calendars';
import BorrowedItems from './BorrowedItems';
import WishList from './WishList';

/* const window = Dimensions.get("window");
const screen = Dimensions.get("screen"); */


const HomeAdmin = ({navigation}) => {


    return (
        <SafeAreaView style={styles.container}>
            <Text>HomeAdmin</Text>
            <Button title="Add new item" onPress={() =>
                navigation.navigate('AddItem')
            } style={styles.button}
            />
            <Button title="Calendars" onPress={() =>
                navigation.navigate('Calendars')
            } style={styles.button}
            />
            <Button title="Borrowed Items" onPress={() =>
                navigation.navigate('BorrowedItems')
            } style={styles.button}
            />
            <Button title="Wishlist" onPress={() =>
                navigation.navigate('WishList')
            } style={styles.button}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 40,

    },

    button: {
        //paddingHorizontal: 20,
        //marginVertical: 30,
        paddingBottom: 20,
        borderRadius: 10,
        marginHorizontal: "1%",
        marginBottom: 6,
        minWidth: "68%",
        textAlign: "center",
        justifyContent: 'center',
    },
});

HomeAdmin.propTypes = {
    navigation: PropTypes.object,
};

export default HomeAdmin;