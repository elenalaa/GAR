import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, Text, View, Image, Alert, Button, Icon} from 'react-native';
import PropTypes from 'prop-types';
import { Card, ListItem } from 'react-native-elements';


const Product = (props) => {
  const item = props.route.params.item;
  const {navigation} = props;

  /* const [date, setDate] = useState(new Date())
  const [isDatePiskerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  }; 

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };    */

  return (
    <Card>
      <Card.Title>
      <Text style={styles.listTitle}>Item detail</Text></Card.Title>
      <Card.Divider/>
    {/* <View style={styles.imagebox}> */}
        <Card.Image
          style={styles.logo}
          resizeMode="cover"
          source={{uri: item.url}}
        />
      
      {/* <View style={styles.textbox}> */}
        <View>
        <Text style={styles.listTitle}>{item.title}</Text>
        {/* <Text>description</Text> */}
        <Text>{item.description}</Text>
      </View>
      <View style={styles.view}>
        <Button style={styles.button}
          title="Reservations"
          color="orange"
          onPress={() => navigation.navigate('Reservations')}
        />
        <Button style={styles.button}
          title="Borrow"
          onPress={() => navigation.navigate('Borrow')
          }
        />
        {/* <Button title="Show Date Picker" onPress={showDatePicker} /> */}
        {/*  <DatePicker
         
        date={date}
        onDateChange={setDate}
        mode="date"
      />    */}

      </View>
    </Card>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF2F5',
    //alignItems: 'center',
    //justifyContent: 'center',
    //paddingTop: 40,
    //marginVertical: 8,
    //marginHorizontal: 16,
  },
  listTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 8,
  },
  logo: {
    width: null,
    height: 350,
  },
  listCategory: {
    fontWeight: 'bold',
    fontSize: 20,
    padding: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
    marginVertical: 8,
    backgroundColor: 'orange',

  },
});


Product.propTypes = {
  navigation: PropTypes.object,
};
export default Product;