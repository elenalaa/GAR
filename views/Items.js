import React from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';
import PropTypes from 'prop-types';

const Items = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Items</Text>
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

Items.propTypes = {
    route: PropTypes.object,
};

export default Items;