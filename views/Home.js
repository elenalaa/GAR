import React from 'react';
import {StyleSheet, SafeAreaView, Text, Button} from 'react-native';
import PropTypes from 'prop-types';

const Home = ({navigation}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>Home</Text>
            <Button title="Item list" onPress={() =>
                navigation.navigate('Items')
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