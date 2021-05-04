import React from 'react';
import {
  StyleSheet, 
  SafeAreaView } 
  from 'react-native';
import PropTypes from 'prop-types';
import List from '../components/List';



const Items = (props) => {
  const {navigation} = props;

  return (
      <SafeAreaView style={styles.container}>
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
