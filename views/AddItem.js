import React, { useState } from 'react';
import {StyleSheet, 
    SafeAreaView, Text, Button, Alert, TextInput} from 'react-native';
import PropTypes from 'prop-types';
import List from '../components/List';
import ListItem from '../components/ListItem';
import useAddEventForm from '../hooks/AddItemHooks';
import FormTextInput from '../components/FormTextInput';
import useAddItemForm from '../hooks/AddItemHooks';





const AddItem = (props) => {
  const {navigation} = props;
  const { handleInputChange, inputs, addItemErrors } = useAddItemForm();
  const {value, onChangeText} = useState("Useless Multiline Placeholder");


 // const [image, setImage] =  useState(null);
 // const [isLoading, setIsLoading] = useState(false);  
  

const [date, setDate] = useState('09-10-2020');
 

 return (
      <SafeAreaView style={styles.container}>
        <Text>Add Item</Text>
<TextInput
        style={{
        backgroundColor: value,
        borderBottomColor: '#000000',
        borderBottomWidth: 1,
        padding: 10,
      }}
        onChangeText={onChangeText}
        value={value}
      /> 
{/*       <FormTextInput
          autoCapitalize= 'none'
          placeholder='Item name'
          placeholderTextColor='#fff'
          value={inputs.title}
          onChangeText={(txt) => handleInputChange('title', txt)}
          error={addItemErrors.title}
        />
        <FormTextInput
          autoCapitalize= 'none'
          placeholder='Description'
          placeholderTextColor='#fff'
          value={inputs.description}
          onChangeText={(txt) => handleInputChange('description', txt)}
          error={addItemErrors.description}
        /> */}
     {/*    <FormTextInput
          autoCapitalize= 'none'
          placeholder='Amount'
          placeholderTextColor='#fff'
          value={inputs.amount}
          onChangeText={(txt) => handleInputChange('amount', txt)}
          error={addItemErrors.amount}
        />
         <FormTextInput
          autoCapitalize= 'none'
          placeholder='Code'
          placeholderTextColor='#fff'
          value={inputs.code}
          onChangeText={(txt) => handleInputChange('code', txt)}
          error={addItemErrors.code}
        /> */}
        {/* </Form>      */}

        {/*  {image && (
          <>
          {fileType == 'image' ? (
            <Image
              source={{url: image}}
              style={{ width: null, height: 200, flex: 1 }}
            />
          )
          }  */}

        {/* <Button block style={{ flex: 1, marginBottom: 20, borderRadius: 15 }} onPress={pickImage}>
          <Icon name={'camera'}></Icon>
          <Text style={{ color: '#fff', paddingRight: 30 }}>Select image</Text>
          </Button> */} 

        
             
              
          <Button style={styles.button}
          title="ADD NEW ITEM"
          onPress={() => Alert.alert('Created new item!')}
        />
  {/* <List navigation={navigation}></List> */}  
 
       </SafeAreaView>
   )
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