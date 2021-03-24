import React from 'react';
import {StyleSheet, SafeAreaView, Text} from 'react-native';

const HomeAdmin = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>HomeAdmin</Text>
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

export default HomeAdmin;