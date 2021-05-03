import React, {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import useWishForm from '../hooks/AddItemWishHooks';
import {Platform} from 'react-native';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import {ThemeProvider, Button} from 'react-native-elements';
import {Ionicons} from '@expo/vector-icons';
import {postWishImg, postWishStore} from '../hooks/ApiHooks';
import {IconButton} from 'react-native-paper';
import {
  StyleSheet,
  SafeAreaView, Text, TextInput, Image, TouchableOpacity
} from 'react-native';




const AddItemWish = (props) => {
  const {navigation} = props;
  const {inputs, handleInputChange} = useWishForm();
  const [image, setImage] = useState(null);

  const doAddItemWish = async () => {

    console.log(inputs)


    try {
      // image to blob
      const response = await fetch(image.uri);
      const blob = await response.blob();

      // post item and get url
      const imgUrl = await postWishImg(blob, inputs)
      console.log(imgUrl)

      try {
        //puts info in firestore if imgurl ok
        await imgUrl;
        const db = await postWishStore(inputs, imgUrl);
        console.log(db);
      } catch (e) {
        console.log('db things: ', e)
      }
      setImage(null)
    } catch (e) {
      console.log('doAddItem nappi', e)
    }
  }




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

  const pickImage = async () => {
    // toimii
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



  const theme = {
    colors: {
      primary: '#124191',
    },
  };


  return (
    <SafeAreaView style={styles.container}>
      <ThemeProvider theme={theme}>
        <Text style={styles.title}>Add New Wish Item</Text>

        {/* if useState has image shows it, if not shows camera icon,
            you can press either to choose image */}
        {!image && <IconButton
          icon="camera"
          size={72}
          onPress={pickImage}>
        </IconButton>}
        {image && <TouchableOpacity onPress={pickImage} >
          <Image source={{uri: image.uri}} style={{width: 200, height: 200}} />
        </TouchableOpacity>}

        <TextInput style={styles.input}
          autoCapitalize='none'
          placeholder='  Name of the item'
          placeholderTextColor='black'
          value={inputs.title}
          onChangeText={(txt) => handleInputChange('title', txt)}
        // error={addItemErrors.title}
        />
        <TextInput style={styles.inputDes}
          autoCapitalize='none'
          placeholder='  Description'
          placeholderTextColor='black'
          value={inputs.description}
          onChangeText={(txt) => handleInputChange('description', txt)}
        // error={addItemErrors.description}
        />
        <Button color='#124191'
          icon={
            <Ionicons
              name="add-circle"
              size={72}
              color="white"
            />
          }
          title="  ADD ITEM TO WISHLIST"
          onPress={doAddItemWish}
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
    borderColor: '#FF3154',
    backgroundColor: '#fff',
  },
  inputDes: {
    height: 129,
    margin: 8,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: '#FF3154',
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
    color: '#124191',
    
  },


});

AddItemWish.propTypes = {
  route: PropTypes.object,
  // navigation:PropTypes.object,
};


export default AddItemWish;