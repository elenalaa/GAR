import React, { useEffect, useRef, useState } from 'react';
import {StyleSheet, FlatList, 
    SafeAreaView, Text, TextInput, ActivityIndicator, Image } from 'react-native';
import PropTypes from 'prop-types';
import FormTextInput from '../components/FormTextInput';
import useAddItemForm from '../hooks/AddItemHooks';
import firebase from '../firebase/config.js';
import { Platform } from 'react-native';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import { ThemeProvider, Button } from 'react-native-elements';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons'; 
import { IconButton } from 'react-native-paper';
import { Entypo } from '@expo/vector-icons'; 
import { Alert } from 'react-native';
import { CheckBox } from 'react-native-elements';



const AddItem = (props) => {
  const {navigation} = props;
  const { handleInputChange, inputs } = useAddItemForm();
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState(null);
const state={ selectedLang:0 }

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
          code: item.code,
         //image: item.filename,
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
      
        firebase.storage().ref('public/lena2').put(blob, {contentType: 'image/jpg'}).then(function (snapshot) {
          console.log('Uploaded a blob or file!');
      });
      
      }

      const theme = {
        colors: {
          primary: '#124191',
        },
      };

     

return (
    <SafeAreaView style={styles.container}>
      <ThemeProvider theme={theme}>
      <Text style={styles.title}>Add Item</Text>
      <IconButton 
        icon="camera"
        size={72}
        onPress={pickImage}>
      </IconButton>
  {/* <Image
          source={{ uri: image }}
          style={{ width: null, height: 200, flex: 1}}
          PlaceholderContent={<ActivityIndicator />}
      /> */}
  {/* <Form style={styles.form}> */}
      <TextInput style={styles.input}
          autoCapitalize= 'none'
          placeholder='  Name of the item'
          placeholderTextColor='black'
          value={inputs.title}
          onChangeText={(txt) => handleInputChange('title', txt)}
         // error={addItemErrors.title}
        />
        <TextInput  style={styles.inputDes}
          autoCapitalize= 'none'
          placeholder='  Description'
          placeholderTextColor='black'
          value={inputs.description}
          onChangeText={(txt) => handleInputChange('description', txt)}
         // error={addItemErrors.description}
        />  
        <TextInput  style={styles.input}
          autoCapitalize= 'none'
          placeholder='  Amount'
          placeholderTextColor='black'
          value={inputs.amount}
          onChangeText={(txt) => handleInputChange('amount', txt)}
         // error={addItemErrors.amount}
        />  
        <TextInput  style={styles.input}
          autoCapitalize= 'none'
          placeholder='  Code'
          placeholderTextColor='black'
          value={inputs.code}
          onChangeText={(txt) => handleInputChange('code', txt)}
         // error={addItemErrors.code}
        />  
     {/* </Form> */}
     
     <CheckBox checked={state.selectedLang===1} color="#fc5185" onPress={()=>setState({selectedLang:1})}/>
      <Text style={
      {...styles.checkBoxTxt,
        color:state.selectedLang===1?"#fc5185":"gray",
        fontWeight:state.selectedLang===1? "bold" :"normal"
      }}>BORROW</Text>
      <CheckBox checked={state.selectedLang===1} color="#fc5185" onPress={()=>setState({selectedLang:1})}/>
      <Text style={
      {...styles.checkBoxTxt,
        color:state.selectedLang===1?"#fc5185":"gray",
        fontWeight:state.selectedLang===1? "bold" :"normal"
      }}>USE</Text>
      <CheckBox checked={state.selectedLang===1} color="#fc5185" onPress={()=>setState({selectedLang:1})}/>
      <Text style={
      {...styles.checkBoxTxt,
        color:state.selectedLang===1?"#fc5185":"gray",
        fontWeight:state.selectedLang===1? "bold" :"normal"
      }}>RESERVATION</Text>
      <Button color='#124191'
        icon={
          <Ionicons 
            name="add-circle"
            size={72}
            color="white"
          />
        }
          title="  ADD NEW ITEM"
          onPress={doAddItem} 
        />

      </ThemeProvider>
      </SafeAreaView>
   );
  }
    
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EDF2F5',
      margin: 20,
      justifyContent: 'space-between',
      alignSelf: 'stretch',
      marginVertical: 20,
    },
    input: {
      height: 47,
      margin: 8,
      borderWidth: 1,
      borderRadius: 4,
      borderColor:'#FF3154',
      backgroundColor: '#fff',
    },
    inputDes: {
      height: 129 ,
      margin: 8,
      borderWidth: 1,
      borderRadius: 4,
      borderColor:'#FF3154',
      backgroundColor: '#fff',
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 10,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    title: {
        fontSize: 32,
    },
    checkBoxTxt:{
      marginLeft:20
    },
   
  
}); 
 
AddItem.propTypes = {
   route: PropTypes.object,
  // navigation:PropTypes.object,
};

    
export default AddItem;