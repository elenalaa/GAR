import React, { useEffect, useRef, useState } from 'react';
import {StyleSheet, FlatList,
    SafeAreaView, Text, Button, Alert, TextInput, ActivityIndicator, Image } from 'react-native';
import PropTypes from 'prop-types';
import List from '../components/List';
import ListItem from '../components/ListItem';
import useAddEventForm from '../hooks/AddItemHooks';
import FormTextInput from '../components/FormTextInput';
import useAddItemForm from '../hooks/AddItemHooks';
import AsyncStorage from '@react-native-async-storage/async-storage';
import firebase from '../firebase/config.js';
import { add } from 'react-native-reanimated';
import { Platform } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { postItem } from '../hooks/ApiHooks';
import storage from 'firebase/storage';


const AddItem = (props) => {
  const {navigation} = props;
  const { handleInputChange, inputs } = useAddItemForm();
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState(null);

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

      //filename = image.split('/').pop();
      //const filename = image;

      //const match = /\.(\w+)$/.exec(filename);

      //const resp = await postItem(data);
      //console.log('upload', resp);
      
      formData.append('file', {uri: image, name: filename});
      console.log(data)
      addNewItem(data);
     
      }
      const addNewItem = (item) => {
        firebase.firestore().collection('items').add({
          
          title: item.title,
          description: item.description,
          amount: item.amount,
          code: item.code,
         // image: item.filename,
        });
        
        Alert.alert('Action!', 'A new item was created');

      }

      const getPermissionAsync = async () => {
        //Get permissions
        if (Platform.OS !== 'web') {
          const { status } = await Permissions.askAsynk(Permissions.CAMERA);
          if(status !== 'granted') {
            alert('Sorry, we need camera roll permissions to make this work!');
          }
        }
      }

      useEffect(() => {
        getPermissionAsync();
      }
      );

      const pickImage = async () => {
        //Image Picker
        try {
          const result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
          }).then((result)=> {
          if (!result.cancelled) {
            const {height, width, type, uri} = result;
            console.log('image h ', height);
            console.log('image w ', width);
            console.log('image type ', type);
            console.log('image picked', uri);
            setImage(result.uri);
            console.log(image);
           //saveImage(uri);
           uriToBlob(uri);
            
          }
        }).then((blob) => {

        console.log(result);
         saveImage(blob);
        })
        } catch (E) {
          console.log(E);
        }
      };
      const uriToBlob = (uri) => {
        return new Promise((resolve, reject) => {
          const xhr = new XMLHttpRequest();
          xhr.onload = function() {
            // return the blob
            resolve(xhr.response);
          };
          
          xhr.onerror = function() {
            // something went wrong
            reject(new Error('uriToBlob failed'));
          };
          // this helps us get a blob
          xhr.responseType = 'blob';
          xhr.open('GET', uri, true);
          
          xhr.send(null);
        });
      }

      const saveImage = async (blob) => {
       // const filename = uri.substring(uri.lastIndexOf('/') + 1);
        //const uploadUri = Platform.OS === 'ios' ? uri.replace('file://', '') : uri;
        //console.log(uri.name);
        firebase.storage().ref('public/lena2').put(blob, {contentType: 'image/jpg'}).then(function (snapshot) {
          console.log('Uploaded a blob or file!');
      });
      //const task = storage()
      //.ref(filename)
      //.putFile(uri);
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

        <Image
          source={{ uri: image }}
          style={{ width: null, height: 200, flex: 1}}
          PlaceholderContent={<ActivityIndicator />}
          />

        <Button style={styles.button} 
        title="SELECT IMAGE"
        onPress={pickImage}>
        {/* <Icon name={'camera'}></Icon> */}
        </Button>

        <Button style={styles.button}
          title="ADD NEW ITEM"
         // onPress={() => Alert.alert('Created new item!')}
          onPress={doAddItem}
        />
      </SafeAreaView>
   );
  }
    
  
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