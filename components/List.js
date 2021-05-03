import React, {useState, useEffect} from 'react';
import {FlatList, TouchableOpacity, View} from 'react-native';
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
import { SearchBar } from 'react-native-elements';


const List = ({navigation}) => {
  const [items, setItems] = useState(false);
  const [search, setSearch] = useState('');
  const [fulldata, setFulldata] = useState();
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
      setFulldata(list);
    });
  };


  const searchFilterFunction = (text) => {
      // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Update FilteredData
      const newData = fulldata.filter(function (item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setItems(newData);
      setSearch(text);
    } else {
      setItems(fulldata);
      setSearch(text);
    }
  };



  return (
  <SafeAreaView>
    <View>
        <SearchBar
          round
          searchIcon={{size: 24}}
          onChangeText={(text) => searchFilterFunction(text)}
          onClear={(text) => searchFilterFunction('')}
          placeholder="Type Here..."
          value={search}
        />
    <FlatList
      data={items}
      keyExtractor={item => item.key}
      renderItem={({item}) =>
      <ListItem
          navigation={navigation}
          item={item} />
          
      }
    />
    </View>
    </SafeAreaView>
  );
};


List.propTypes = {
  navigation: PropTypes.object,
  //item:PropTypes.object,
};

export default List;