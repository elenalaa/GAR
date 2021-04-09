import React from 'react';
import {StyleSheet, TouchableOpacity,
    SafeAreaView, Text,} from 'react-native';
import PropTypes from 'prop-types';
import List from '../components/List';
import ListItem from '../components/ListItem';
import HomeAdmin from '../views/HomeAdmin';



const Calendars = (props) => {
  const {navigation} = props;

  
  return (
      <SafeAreaView style={styles.container}>
        <Text>Calendars</Text>
        {/* <List navigation={navigation}></List> */}
      </SafeAreaView>
   );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingTop: 40,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
      },
      title: {
        fontSize: 32,
      },
    
});

Calendars.propTypes = {
   route: PropTypes.object,
};

    
export default Calendars;