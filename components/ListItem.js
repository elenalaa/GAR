import PropTypes from 'prop-types';
import React, {Component} from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image, FlatList } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

const MyListItem = ({item, navigation}) => {
  //navigation, productArray}) => {

  return (
    <Card>
    
<TouchableOpacity onPress={
      () => {
        navigation.navigate('Product', {item: item});
      }
    }>
  
    <Card.Title>
          <Text style={styles.listTitle}>{item.title}</Text>
    </Card.Title>
    <Card.Divider/>
          
      <Card.Image
          style={styles.tinyLogo}
          source={{uri: item.url}}
      />
        
          <Text style={{marginBottom: 10}}>{item.description}</Text>
          <Text>{item.type}</Text>
          <Text>{item.code}</Text>
          <Text>{item.category}</Text>
        
      
    </TouchableOpacity>
   </Card> 
  );
};  



const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 15,
   // marginBottom: 5,
    backgroundColor: '#8D8A8A',
    borderRadius: 16,
  },
  imagebox: {
    flex: 1,
  },
  image: {
    flex: 1,
    borderRadius: 16,
  },
  textbox: {
    flex: 2,
    padding: 10,
    marginTop: 10,
    backgroundColor: '#EDF2F5',
     // alignItems: 'center',
  },
  listTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 15,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
  logo: {
    width: 200,
    height: 200,
  },
});

MyListItem.propTypes = {
  navigation: PropTypes.object,
  //productArray: PropTypes.object,
};

export default MyListItem;