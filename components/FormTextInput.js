import React from 'react';
import {StyleSheet, TextInput} from 'react-native';
import PropTypes from 'prop-types';

const FormTextInput = ({style, ...otherProps}) => {
  return (
    <TextInput
      style={[styles.textInput, style]}
      {...otherProps}
    />
  );
};

const styles = StyleSheet.create({
  textInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    width: 320,
    backgroundColor: '#fff',
    fontSize: 18,
    color: "black",

  },
});

FormTextInput.propTypes = {
  style: PropTypes.number,
};

export default FormTextInput;
