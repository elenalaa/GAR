import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, Image,  } from 'react-native';
/* import {
  ListItem,
  Body,
  Right,
  Button,
  Icon,
} from 'native-base'; */





const MyListItem= ({ item, navigation}) => {
  //navigation, productArray}) => {
  
  return (
      <TouchableOpacity  onPress={
      () => {
        navigation.navigate('Product', {item: item});
      }
    }>  
    <View>
      <View style={styles.imagebox}>
       <Image
          style={styles.tinyLogo}
          source={{uri: item.filename }}
        /> 
      </View> 
      <View style={styles.textbox}>
        <Text style={styles.listTitle}>{item.title}</Text>
        <Text>{item.description}</Text>
        
      </View>
      </View>
    </TouchableOpacity>
  );

  };
const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    padding: 15,
    marginBottom: 5,
    backgroundColor: '#eee',
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