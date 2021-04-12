import React, { useState } from 'react';
import {StyleSheet, 
    SafeAreaView, Text, Button, Alert, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import List from '../components/List';
import ListItem from '../components/ListItem';
import useAddEventForm from '../hooks/AddItemHooks';
import FormTextInput from '../components/FormTextInput';
import useAddItemForm from '../hooks/AddItemHooks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from '../firebase/config.js';
import { add } from 'react-native-reanimated';



const AddItem = (props) => {
  const {navigation} = props;
  const { handleInputChange, inputs } = useAddItemForm();
  const [isLoading, setIsLoading] = useState(false);

  const doAddItem = async () => {
    setIsLoading(true);
    //try {
      //const userToken = await AsyncStorage.getItem('userToken');
      const formData = new FormData();
      const data = {
        description: inputs.description,
        title: inputs.title,
        amount: inputs.amount,
        code: inputs.code
      };
      
      formData.append('title', inputs.title);
      formData.append('description', inputs.description);
      formData.append('amount', inputs.amount);
      formData.append('code', inputs.code);
      
      console.log(data)
      addNewItem(data);
     
      }
      const addNewItem = (item) => {
        firebase.firestore().collection('items').add({
          
          title: item.title,
          description: item.description,
          amount: item.amount,
          code: item.code
        });
        Alert.alert('Action!', 'A new To-do item was created');

      }

  return (
    <SafeAreaView style={styles.container}>
      <Text>Add Item</Text>
      {/* <Form style={styles.form}> */}
      <FormTextInput
          autoCapitalize= 'none'
          placeholder='Item name'
          placeholderTextColor='#fff'
          value={inputs.title}
          onChangeText={(txt) => handleInputChange('title', txt)}
         // error={addItemErrors.title}
        />
        <FormTextInput
          autoCapitalize= 'none'
          placeholder='Description'
          placeholderTextColor='#fff'
          value={inputs.description}
          onChangeText={(txt) => handleInputChange('description', txt)}
         // error={addItemErrors.description}
        />  
        <FormTextInput
          autoCapitalize= 'none'
          placeholder='Description'
          placeholderTextColor='#fff'
          value={inputs.amount}
          onChangeText={(txt) => handleInputChange('amount', txt)}
         // error={addItemErrors.amount}
        />  
        <FormTextInput
          autoCapitalize= 'none'
          placeholder='Code'
          placeholderTextColor='#fff'
          value={inputs.code}
          onChangeText={(txt) => handleInputChange('code', txt)}
         // error={addItemErrors.code}
        />  
     {/* </Form> */}
        <Button style={styles.button}
          title="ADD NEW ITEM"
         // onPress={() => Alert.alert('Created new item!')}
          onPress={doAddItem}
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
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
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
    formInput: {
      flex:1,
      paddingTop: 15,
      paddingBottom: 15
    }
    
}); 
 
AddItem.propTypes = {
   route: PropTypes.object,
  // navigation:PropTypes.object,
};

    
export default AddItem;