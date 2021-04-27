import React from 'react';
import {
    StyleSheet,
    SafeAreaView, Text,
} from 'react-native';
import PropTypes from 'prop-types';



const Borrow = (props) => {
    const {navigation} = props;


    return (
        <SafeAreaView style={styles.container}>
            <Text>BORROW HERE</Text>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDF2F5',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },

});

Borrow.propTypes = {
    route: PropTypes.object,
};


export default Borrow;