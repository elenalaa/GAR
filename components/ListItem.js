import PropTypes from 'prop-types';
import React, {Component, useState} from 'react';
import { SafeAreaView } from 'react-native';
import {StyleSheet, Text, TouchableOpacity, View, Image, Dimensions} from 'react-native';
import { ListItem, SearchBar } from 'react-native-elements';




const MyListItem = ({item, navigation}) => {
  //navigation, productArray}) => {

//search item

const [search, setSearch] = useState('');
  return (
    <SafeAreaView>
    <TouchableOpacity onPress={
      () => {
        navigation.navigate('Product', {item: item});
      }
    }> 

    <View>
      <ListItem bottomDivider>
       <Image
          style={styles.tinyLogo}
            source={{uri: item.url}}
          />
        <ListItem.Content style={{}}>
          <ListItem.Title>{item.title}</ListItem.Title>
          <ListItem.Subtitle>See more...</ListItem.Subtitle>
          <Text>{item.category}</Text>
        </ListItem.Content>
        <ListItem.Chevron/>
        {/* </View> */}
        {/* <View style={styles.textbox}>
          <Text style={styles.listTitle}>{item.title}</Text>
          <Text>{item.description}</Text>
          <Text>{item.category}</Text>
          <Text>{item.code}</Text> */}
          {/* </View> */}
      
      </ListItem>
      </View>
    </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
 container:{
    flex: 1,
    
 },
  imagebox: {
    flex: 1,
    position: 'absolute',
    left: 0,
  },
  image: {
    flex: 1,
    borderRadius: 16,
  },
  textbox: {
    flex: 2,
    padding: 10,
    position: 'absolute',
    right: 0,
  },
  listTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 15,
  },
  tinyLogo: {
    width: 100,
    height: 100,
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