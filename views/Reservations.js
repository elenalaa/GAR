import React, {Fragment, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    SafeAreaView, Text, View, Button, Platform
} from 'react-native';
import {Calendar, CalendarList} from 'react-native-calendars';
import {getReservations, postReservation} from '../hooks/ApiHooks';


const Reservations = (props) => {
    //const {navigation} = props;

    const [selected, setSelected] = useState('');
    const item = props.route.params.item;

    const onDayPress = day => {
        setSelected(day.dateString);
        console.log(props)
    };

    const makeReservation = async () => {
        try {
            if (selected) {
                const what = await postReservation(selected, item)
                //console.log(selected)
                setSelected('')
            } else {
                console.log('tyhjä')
            }
        } catch (e) {
            console.log(e)
        }
    }


    const getDates = async () => {
        await getReservations(item)
    }
    /*
        useEffect(() => {
            getDates();
        }, []);
    */
    return (
        <SafeAreaView style={styles.container}>
            <Fragment>

                <Text style={styles.text}>Reservations for {item.title}</Text>
                <Calendar
                    current={'2021-04-28'}
                    horizontal={true}
                    style={styles.calendar}
                    onDayPress={onDayPress}
                    markedDates={{
                        [selected]: {
                            selected: true,
                            disableTouchEvent: true,
                            selectedColor: 'orange',
                            selectedTextColor: 'red'
                        }
                    }}
                />
                <Button style={styles.button}
                    title="Make reservation"
                    color="orange"
                    onPress={makeReservation}
                />
                <Button style={styles.button}
                    title="GetDates"
                    color="orange"
                    onPress={getDates}
                />

                {selected && <Text>{selected}</Text>}
            </Fragment>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDF2F5',
        alignItems: 'center',
        justifyContent: 'top',
        paddingTop: 10,
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
    calendar: {
        marginBottom: 10,
        marginLeft: 10,
        marginRight: 10,
    },
    text: {
        textAlign: 'center',
        padding: 10,
        backgroundColor: 'lightgrey',
        fontSize: 16
    }

});

Reservations.propTypes = {
    navigation: PropTypes.object,
};


export default Reservations;