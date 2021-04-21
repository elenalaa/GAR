import { useState } from 'react';

const useAddItemWishForm = (callback) => {
   const [inputs, setInputs] = useState({
        title: '',
        description: '',
        amount: '',
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

export default useAddItemWishForm;