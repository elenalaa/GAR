import React from 'react';
import {StyleSheet, SafeAreaView, Text, Button} from 'react-native';
import PropTypes from 'prop-types';

const Home = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Home</Text>
            <Button title="Item list" onPress={() =>
                navigation.navigate('Items')
            }
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
        paddingTop: 40,
    },
});

Home.propTypes = {
    navigation: PropTypes.object,
};

export default Home;