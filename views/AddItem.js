import React, {useEffect, useState} from 'react';
import {
  StyleSheet,
  SafeAreaView, Text, TextInput, View, TouchableOpacity
} from 'react-native';
import PropTypes from 'prop-types';
import useAddItemForm from '../hooks/AddItemHooks';
import {Platform} from 'react-native';
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import {ThemeProvider, Button} from 'react-native-elements';
import {Ionicons} from '@expo/vector-icons';
import {IconButton} from 'react-native-paper';
import {CheckBox} from 'react-native-elements';
import {postItem, postStore} from '../hooks/ApiHooks';
import { MaterialIcons } from "@expo/vector-icons";


const AddItem = (props) => {
  const {navigation} = props;
  const [image, setImage] = useState(null);

  const {inputs, handleInputChange} = useAddItemForm();
  // const state = {selectedLang: 0};
  //const [category, setCategory] = useState(null)

const [categoryIndex, setCategoryIndex] = useState(0);   
const categoryList = ["Use", "Borrow", "Reservation"];

const categoryChangeHandler = 
(index) => {
  console.log("index \t", index);
  setCategoryIndex((preIndex) => index);
}

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
      <ThemeProvider theme={theme}>
      <View style={{ flexDirection: "row" }}>
                    {categoryList.map((data, index) => (
                      <TouchableOpacity
                        key={data}
                        style={{
                          flexDirection: "row",
                          margin: 10,
                          flex: 3,
                          justifyContent: "space-evenly",
                        }}
                        onPress={categoryChangeHandler.bind(this, index)}
                      >
                        <MaterialIcons
                          name={
                            index === categoryIndex
                              ? "radio-button-checked"
                              : "radio-button-unchecked"
                          }
                          size={18}
                          color='#124191'
                        />
                        <Text style={styles.checkBoxTxt}>{data}</Text>
                      </TouchableOpacity>
                    ))}
        </View> 
        {/* <Text style={styles.title}>Add Item</Text> */}
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
        <TextInput style={styles.input}
          autoCapitalize='none'
          placeholder='  Type'
          placeholderTextColor='black'
          value={inputs.type}
          onChangeText={(txt) => handleInputChange('type', txt)}
        // error={addItemErrors.amount}
        />
        <TextInput style={styles.input}
          autoCapitalize='none'
          placeholder='  Code'
          placeholderTextColor='black'
          value={inputs.code}
          onChangeText={(txt) => handleInputChange('code', txt)}
        // error={addItemErrors.code}
        />
        {/* </Form> */}
        
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

const theme = {
  colors: {
    primary: '#124191',
  },
};


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
  },
  checkBoxTxt: {
    marginLeft: 10
  },
  checkBox: {
    flexDirection: 'row',
    alignItems: 'center'
},
});

AddItem.propTypes = {
  route: PropTypes.object,
};


export default AddItem;