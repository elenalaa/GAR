import React, {useState, useEffect} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
//import { ListItem as CoolListItem, Thumbnail, Left, Body } from 'native-base';
import ListItem from './ListItem';
import PropTypes from 'prop-types';
//import Items from '../views/Items';
//import Product from './views/Product';
import firebase from '../firebase/config.js';
import { render } from 'react-dom';
import { SafeAreaView } from 'react-native';
import { TextInput } from 'react-native';
//import storage from '@react-native-firebase/storage';



const List = ({navigation}) => {
  const [items, setItems] = useState(false);
  useEffect(() => {
    // write your code here, it's like componentWillMount
    getItems();
  }, [])
  const getItems = async () => {
    const ref = firebase.firestore().collection('item');
    return ref.onSnapshot(querySnapshot => {
      const list = [];
      querySnapshot.forEach(doc => {
        const {title, description, category, code, url} = doc.data();
        list.push({
          key: doc.id,
          title,
          description,
          category,
          code,
          url,
        });
      });

      setItems(list);
    });
  };

  const [ searsh, setSearch ] = useState();
  const [ filteredDataSource, setFilteredDataSourse ] = useState();
  const [ masterDataSource, setMasterDataSource ] = useState();
   
  const searchFilterFunction = (text) => {
      //check if searchBar text is not blank
      if (text) {
        //Insert text is not blank
        //Filter the masterDataSource
        //Update filtered data Source
     
    const newData = masterDataSource.filter(
          function (item) {
            const itemData = item.title
            ? item.title.toUpperCase()
            : ''.toUpperCase();
            const textData = text.toUpperCase();
            return itemData.indexOf(textData) > -1;
          }
        ); 
        setFilteredDataSourse(newData);
        setSearch(text);
      } else {
        //Inserted text is blank
        //Update FilteredDataSource with MasterDataSource
        setFilteredDataSourse(masterDataSource);
        setSearch(text);
      }
    };

  return (
  <SafeAreaView>
    <TextInput style={{height: 40, borderWidth: 1, borderRadius: 4, paddingLeft: 20, margin: 5, borderColor: '#124191', backgroundColor: '#FFFFFF'}}
   // onChangeText={(text) => searchFilterFunction(text)}
    value={searsh}
    placeholder="Search Here..."
    >
    </TextInput>
    <FlatList
      data={items}
      keyExtractor={item => item.key}
      renderItem={({item}) =>
      <ListItem
          navigation={navigation}
          item={item} />
          
      }
    />
    </SafeAreaView>
  );
};


List.propTypes = {
  navigation: PropTypes.object,
  //item:PropTypes.object,
};

export default List;