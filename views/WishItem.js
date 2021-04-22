import React, { useState } from 'react';
import {StyleSheet, SafeAreaView, Text, View, Image, Alert, Button, Icon} from 'react-native';
import PropTypes from 'prop-types';


const WishItem = (props) => {
 const item = props.route.params.item;

 //const [date, setDate] = useState(new Date())

  //const [isDatePiskerVisible, setDatePickerVisibility] = useState(false);

   const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  /* const hideDatePicker = () => {
    setDatePickerVisibility(false);
  }; 

  const handleConfirm = (date) => {
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };   */

  return (
    
    <SafeAreaView style={styles.container}>
      <Text>Wish Item detail</Text>
     
       <View style={styles.imagebox}>
         
       <Image
          style={styles.logo}
          source={{uri: item.filename }}
        /> 
      </View>  
       <View style={styles.textbox}>
        <Text>description</Text>
        <Text style={styles.listTitle}>{item.title}</Text>
        <Text>{item.description}</Text>
        </View>
        <View style={styles.view}>
        {/* <Button style={styles.button}
          title="Use"
          color="orange"
          onPress={() => Alert.alert('Button pressed')}
          />
        <Button style={styles.button}
          title="Borrow"
          onPress={() => Alert.alert('Button pressed')}
          /> */}
        {/* <Button title="Show Date Picker" onPress={showDatePicker} /> */}
        {/*  <DatePicker
         
        date={date}
        onDateChange={setDate}
        mode="date"
      />    */}
        
      </View>
      
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
    marginVertical: 8,
    marginHorizontal: 16,
  },
  imagebox: {
    flex: 1,
    paddingBottom: 20,
  },
  image: {
    flex: 1,
    borderRadius: 16,
  },
  textbox: {
    flex: 2,
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  view: {
   flexDirection: 'row',
   justifyContent: 'space-between',
   paddingVertical: 6,
   //marginHorizontal: "1%",
   marginBottom: 40,
   minWidth: "48%",
   alignSelf: 'center',
  },

  listTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
    marginVertical: 8,
    },

  logo: {
    width: 250,
    height: 250,
  },

  button: {
   flex: 2,
   textAlign: 'center',
   paddingVertical: 6,
   borderRadius: 10,
   //marginHorizontal: "1%",
  // marginBottom: 6,
  },
});


WishItem.propTypes = {
  navigation: PropTypes.object,
};
export default WishItem;