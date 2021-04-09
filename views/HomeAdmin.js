import React from 'react';
import {StyleSheet, SafeAreaView, Text, Button} from 'react-native';
import PropTypes from 'prop-types';
import AddItem from './AddItem';

const HomeAdmin = ({ navigation }) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>HomeAdmin</Text>
             <Button title="Add new item" onPress={() =>
                navigation.navigate('AddItem')
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

HomeAdmin.propTypes = {
    navigation: PropTypes.object,
};

export default HomeAdmin;