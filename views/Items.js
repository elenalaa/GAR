import React from 'react';
import {StyleSheet, TouchableOpacity,
    SafeAreaView, Text } from 'react-native';
import PropTypes from 'prop-types';
import List from '../components/List';
import ListItem from '../components/ListItem';
import {SearchBar} from 'react-native-elements';


const Items = (props) => {
  const {navigation} = props;

  return (
      <SafeAreaView style={styles.container}>
      
        {/* <Text style={{ fontSize: 32,}}>Items</Text> */}
        
        <List navigation={navigation}></List>
      </SafeAreaView>
   );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#EDF2F5',
        paddingTop: 10,
        margin: 5,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 42,
      },
});

Items.propTypes = {
   route: PropTypes.object,
};

    
export default Items;
