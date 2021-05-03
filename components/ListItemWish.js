import PropTypes from 'prop-types';
import React, {Component} from 'react';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

import { SafeAreaView } from 'react-native';

import { ListItem } from 'react-native-elements';

const MyListItemWish = ({item, navigation}) => {
  //navigation, productArray}) => {

  return (
    <TouchableOpacity onPress={
      () => {
        navigation.navigate('WishItem', {item: item});
      }
    }>
      <View>
        <ListItem bottomDivider>
          <Image
            style={styles.tinyLogo}
            source={{uri: item.url}}
          />
        <ListItem.Content>
          <ListItem.Title>{item.title}</ListItem.Title>
          <ListItem.Subtitle>{item.description}</ListItem.Subtitle>
        </ListItem.Content>
        <ListItem.Chevron/>
        </ListItem>
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

MyListItemWish.propTypes = {
  navigation: PropTypes.object,
  //productArray: PropTypes.object,
};

export default MyListItemWish;