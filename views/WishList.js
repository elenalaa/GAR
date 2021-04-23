import React from 'react';
import {StyleSheet, TouchableOpacity,
    SafeAreaView, Text } from 'react-native';
import PropTypes from 'prop-types';
import { ThemeProvider, Button } from 'react-native-elements';
import WishItem from './WishItem';
import { Ionicons } from '@expo/vector-icons';
import AddItemWish from './AddItemWish';
import ListWish from '../components/ListWish';
import { Card, CardItem, Icon, Content, Container } from 'react-native-elements';
import { StatusBar } from 'expo-status-bar';


const WishList = (props) => {
  const {navigation} = props;

  const theme = {
    colors: {
      primary: '#124191',
    },
  };
  
  return (
      <SafeAreaView style={styles.container}>
     
        <ThemeProvider theme={theme}>
        <Text>WishList</Text>
        <ListWish navigation={navigation}></ListWish> 
        <Button 
        icon={
          <Ionicons 
            name="add-circle"
            size={72}
            color="white"
          />
        }
          title="  ADD"
          onPress={() =>
            navigation.navigate('AddItemWish')
            
        }  

      
        />
        </ThemeProvider>
       
     </SafeAreaView>
   );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#EDF2F5',
      margin: 20,
      flexDirection: 'column',
      justifyContent: 'space-around',
      alignSelf: 'stretch',
      marginVertical: 30,
    },
    card: {
        backgroundColor: '#EDF2F5',
        borderRadius: 15,
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

WishList.propTypes = {
   route: PropTypes.object,
};

    
export default WishList;