import React, {useState, Fragment} from 'react';
import {
  StyleSheet,
  SafeAreaView, Text,
} from 'react-native';
import PropTypes from 'prop-types';
import {Calendar, CalendarList} from 'react-native-calendars';




const Calendars = (props) => {
  const {navigation} = props;
  const [selected, setSelected] = useState('');

  const onDayPress = day => {
    setSelected(day.dateString);
  };

  //const renderCalendarWithSelectableDate = () => {
  return (
    <Fragment>
      <Text style={styles.text}>Calendar!</Text>
      <Calendar style={styles.calendar} hideExtraDays showWeekNumbers />

    </Fragment>

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

Calendars.propTypes = {
  route: PropTypes.object,
};


export default Calendars;