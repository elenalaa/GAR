import React, {useState, useEffect} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';
import ListItem from './ListItem';
import PropTypes from 'prop-types';
import firebase from '../firebase/config.js';
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
        const {title, description, type, code, url, category} = doc.data();
        list.push({
          key: doc.id,
          title,
          description,
          type,
          code,
          url, 
          category,
          
        });
      });

      setItems(list);
    });
  }
  return (
    <FlatList
      data={items}
      keyExtractor={item => item.key}
      renderItem={({item}) =>
        <ListItem
          navigation={navigation}
          item={item} />
      }
    />
  );
};


List.propTypes = {
  navigation: PropTypes.object,
  //item:PropTypes.object,
};

export default List;