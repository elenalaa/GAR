import React, {useState, Fragment} from 'react';
import {
    StyleSheet,
    SafeAreaView, Text, Button
} from 'react-native';
import PropTypes from 'prop-types';
import {Calendar} from 'react-native-calendars';
import {getReservations, postReservation} from '../hooks/ApiHooks';


const Borrow = (props) => {
    const {navigation} = props;

    const [selected, setSelected] = useState('');
    const item = props.route.params.item;

    const doBorrow = async () => {

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

    const onDayPress = day => {
        setSelected(day.dateString);
        console.log(props)
    };

    return (
        <SafeAreaView style={styles.container}>
            <Fragment>
                <Text>BORROW HERE</Text>
                <Text style={styles.text}> Make a new reservation</Text>
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
                    title="Borrow item"
                    color="orange"
                    onPress={doBorrow}
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