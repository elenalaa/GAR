import React from 'react';
import {StyleSheet, SafeAreaView, Text, Dimensions} from 'react-native';
import PropTypes from 'prop-types';
import {Ionicons} from '@expo/vector-icons';
import {ThemeProvider, Button} from 'react-native-elements';
import {Feather} from '@expo/vector-icons';
import {FontAwesome5} from '@expo/vector-icons';


const window = Dimensions.get("window");
const screen = Dimensions.get("screen");


const theme = {
    colors: {
        primary: '#124191',
    },
};

const HomeAdmin = ({navigation}) => {


    return (
        <SafeAreaView style={styles.container}>
            <ThemeProvider theme={theme}>

                <Button style={styles.button}
                    icon={
                        <Ionicons
                            name="add-circle"
                            size={72}
                            color="white" />
                    }
                    title="ADD NEW ITEM" onPress={() =>
                        navigation.navigate('AddItem')
                    }
                />

                <Button style={styles.button}
                    icon={
                        <Feather
                            name="calendar"
                            size={72}
                            color="white" />
                    }
                    title="  CALENDARS" onPress={() =>
                        navigation.navigate('Calendars')
                    }
                />

                <Button style={styles.button}
                    icon={
                        <FontAwesome5
                            name="screwdriver"
                            size={72}
                            color="white" />
                    }
                    title="  BORROWED ITEMS" onPress={() =>
                        navigation.navigate('BorrowedItems')
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
        marginVertical: 20,


    },
    button: {
        borderRadius: 4,
        paddingTop: 10,
    }


});

HomeAdmin.propTypes = {
    navigation: PropTypes.object,
};

export default HomeAdmin;