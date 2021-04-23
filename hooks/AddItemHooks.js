import {useState} from 'react';

const useAddItemForm = (callback) => {
  const [inputs, setInputs] = useState({
    title: '',
    description: '',
    category: '',
    code: '',


  });

  const handleInputChange = (name, text) => {
    console.log(name, text);
    setInputs((inputs) => {
      return {
        ...inputs,
        [name]: text,
      };
    });
  };


  return {
    handleInputChange,
    inputs,

  };
};

export default useAddItemForm;
