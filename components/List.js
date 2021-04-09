import React, {useState, useEffect} from 'react';
import { FlatList, TouchableOpacity} from 'react-native';
//import { ListItem as CoolListItem, Thumbnail, Left, Body } from 'native-base';
import ListItem from './ListItem';
import PropTypes from 'prop-types';
import Items from '../views/Items';
//import Product from './views/Product';


const productArray = [
    {
      'key': '0',
      'title': 'Raspberry Pi',
      'description': 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis sodales enim eget leo condimentum vulputate. Sed lacinia consectetur fermentum. Vestibulum lobortis purus id nisi mattis posuere. Praesent sagittis justo quis nibh ullamcorper, eget elementum lorem consectetur. Pellentesque eu consequat justo, eu sodales eros.',
      'thumbnails': {
        w160: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Raspberry_Pi_-_Model_A.jpg',
      },
      'filename': 'https://upload.wikimedia.org/wikipedia/commons/4/45/Raspberry_Pi_-_Model_A.jpg',
    },
    {
      'key': '1',
      'title': 'DS4022',
      'description': 'Donec dignissim tincidunt nisl, non scelerisque massa pharetra ut. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. Vestibulum tincidunt sapien eu ipsum tincidunt pulvinar. ',
      'thumbnails': {
        w160: 'http://rigol.africa/wp-content/uploads/2020/01/DS4034.jpg',
      },
      'filename': 'http://rigol.africa/wp-content/uploads/2020/01/DS4034.jpg',
    },
    {
      'key': '2',
      'title': 'Rasberry PI',
      'description': 'Phasellus imperdiet nunc tincidunt molestie vestibulum. Donec dictum suscipit nibh. Sed vel velit ante. Aenean quis viverra magna. Praesent eget cursus urna. Ut rhoncus interdum dolor non tincidunt. Sed vehicula consequat facilisis. Pellentesque pulvinar sem nisl, ac vestibulum erat rhoncus id. ',
      'thumbnails': {
        w160: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Raspberry_Pi_-_Model_A.jpg',
      },
      'filename': 'https://upload.wikimedia.org/wikipedia/commons/4/45/Raspberry_Pi_-_Model_A.jpg',
     
    },
  ];
  
  const List = ({navigation}) => {

   return (
      <FlatList
        data={productArray}
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