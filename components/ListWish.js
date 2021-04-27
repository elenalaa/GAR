import React, {useState, useEffect} from 'react';
import {FlatList, TouchableOpacity} from 'react-native';

import ListItemWish from './ListItemWish';
import PropTypes from 'prop-types';
import firebase from '../firebase/config.js';

const ListWish = ({navigation}) => {
    const [items, setItems] = useState(false);
    useEffect(() => {
      // write your code here, it's like componentWillMount
      getItems();
    }, [])
    const getItems = async () => {
      const ref = firebase.firestore().collection('itemswish');
      return ref.onSnapshot(querySnapshot => {
        const list = [];
        querySnapshot.forEach(doc => {
          const { title, description } = doc.data();
          list.push({
            id: doc.id,
            title,
            description,
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
        <ListItemWish 
        navigation={navigation} 
        item={item} />
      }
    />
    
  );
};


ListWish.propTypes = {
  navigation: PropTypes.object,
  //item:PropTypes.object,
};

export default ListWish;