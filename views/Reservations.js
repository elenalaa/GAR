import React, {Fragment, useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import {
    StyleSheet,
    SafeAreaView, Text, View, Button, Platform
} from 'react-native';
import {Calendar, CalendarList, ExpandableCalendar} from 'react-native-calendars';
import {getReservations, postReservation} from '../hooks/ApiHooks';
import {projectFirestore} from '../firebase/config';
import {InteractionManager} from 'react-native';


const Reservations = (props) => {
    //const {navigation} = props;
    const dates = [];
    const [items, setItems] = useState('');
    const [selected, setSelected] = useState('');
    const item = props.route.params.item;

    const test = [];

    const onDayPress = day => {
        setSelected(day.dateString);
        console.log(props)
        console.log('dates: ', dates)
        setItems(dates[0].date)

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
        var docRef = projectFirestore.collection('item').doc(item.key).collection(item.category);
        try {

            docRef.get().then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    console.log(doc.id, " => ", doc.data());
                    dates.push(doc.data())
                });
            });

        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getDates();
    }, []);

    return (
        <SafeAreaView style={styles.container}>
            <Fragment>

                <Calendar
                    current={'2021-05-03'}
                    style={styles.calendar}
                    markedDates={{
                        [items]: {
                            selected: true,
                            disableTouchEvent: true,
                            selectedColor: 'yellow',
                            selectedTextColor: 'red'
                        }
                    }}
                />
                <Text style={styles.text}> Make a new reservation</Text>
                <Calendar
                    current={'2021-05-03'}
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