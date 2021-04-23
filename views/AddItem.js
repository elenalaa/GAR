import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView, Text, Button, Alert, Image
} from 'react-native';
import PropTypes from 'prop-types';
import FormTextInput from '../components/FormTextInput';
import firebase from '../firebase/config.js';
import {Platform} from 'react-native';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import {postItem, postStore} from '../hooks/ApiHooks';
import storage from 'firebase/storage';
import useAddItemForm from '../hooks/AddItemHooks';



const AddItem = (props) => {
  const {navigation} = props;
  const [isLoading, setIsLoading] = useState(false);
  const [image, setImage] = useState(null);
  const {inputs, handleInputChange} = useAddItemForm();



  const doAddItem = async () => {

    try {
      // image to blob
      const response = await fetch(image.uri);
      const blob = await response.blob();

      // post item and get url
      const imgUrl = await postItem(blob, inputs)
      console.log(imgUrl)

      try {
        //puts info in firestore if imgurl ok
        await imgUrl;
        const db = await postStore(inputs, imgUrl);
        console.log(db);
      } catch (e) {
        console.log('db things: ', e)
      }
      setImage(null)
    } catch (e) {
      console.log('doAddItem nappi', e)
    }
  };



  const getPermissionAsync = async () => {
    //Get permissions
    if (Platform.OS !== 'web') {
      const {status} = await Permissions.askAsynk(Permissions.CAMERA);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  useEffect(() => {
    getPermissionAsync();
  }
  );

  // toimii
  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });
    console.log(inputs)

    console.log(result);
    //console.log('mitä tää on: ', result.uri)

    if (!result.cancelled) {
      setImage(result);
    }
  };



  return (
    <SafeAreaView style={styles.container}>
      <Text>Add Item</Text>
      <FormTextInput
        autoCapitalize='none'
        placeholder='Item name'
        value={inputs.title}
        onChangeText={(txt) => handleInputChange('title', txt)}
      />
      <FormTextInput
        autoCapitalize='none'
        placeholder='Description'
        value={inputs.description}
        onChangeText={(txt) => handleInputChange('description', txt)}
      />
      <FormTextInput
        autoCapitalize='none'
        placeholder='Category'
        value={inputs.category}
        onChangeText={(txt) => handleInputChange('category', txt)}
      />
      <FormTextInput
        autoCapitalize='none'
        placeholder='Code'
        value={inputs.code}
        onChangeText={(txt) => handleInputChange('code', txt)}
      />

      {image && <Image source={{uri: image.uri}} style={{width: 200, height: 200}} />}
      <Button title="SELECT IMAGE" onPress={pickImage} />


      <Button style={styles.button}
        title="ADD NEW ITEM"
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
    flex: 1,
    paddingTop: 15,
    paddingBottom: 15
  }

});

AddItem.propTypes = {
  route: PropTypes.object,
};


export default AddItem;