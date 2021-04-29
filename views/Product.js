import React, {useState} from 'react';
import {StyleSheet, SafeAreaView, Text, View, Image, Alert, Button, Icon} from 'react-native';
import PropTypes from 'prop-types';


const Product = (props) => {
  const item = props.route.params.item;
  const {navigation} = props;


  return (

    <SafeAreaView style={styles.container}>
      <Text>Item detail</Text>


      <View style={styles.imagebox}>
        <Image
          style={styles.logo}
          source={{uri: item.url}}
        />
      </View>
      <View style={styles.textbox}>
        <Text>description</Text>
        <Text style={styles.listTitle}>{item.title}</Text>
        <Text>{item.description}</Text>
      </View>
      <View style={styles.view}>
        <Button style={styles.button}
          title="Reservations"
          color="orange"
          onPress={
            () => navigation.navigate('Reservations', {item: item})
          }
        />
        <Button style={styles.button}
          title="Borrow"
          onPress={() => navigation.navigate('Borrow')
          }
        />

      </View>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#EDF2F5',
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 40,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  imagebox: {
    flex: 1,
    paddingBottom: 20,
  },
  image: {
    flex: 1,
    borderRadius: 16,
  },
  textbox: {
    flex: 2,
    padding: 10,
    marginBottom: 10,
    marginTop: 10,
  },
  view: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 6,
    //marginHorizontal: "1%",
    marginBottom: 40,
    minWidth: "48%",
    alignSelf: 'center',
  },

  listTitle: {
    fontWeight: 'bold',
    fontSize: 20,
    paddingBottom: 15,
    flexDirection: 'row',
    justifyContent: 'space-between',
    textAlign: 'center',
    marginVertical: 8,
  },

  logo: {
    width: 250,
    height: 250,
  },

  button: {
    flex: 2,
    textAlign: 'center',
    paddingVertical: 6,
    borderRadius: 10,
    //marginHorizontal: "1%",
    // marginBottom: 6,
  },
});


Product.propTypes = {
  navigation: PropTypes.object,
};
export default Product;