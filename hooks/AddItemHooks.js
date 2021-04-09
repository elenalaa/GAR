import { useCallback, useState } from 'react';
import { validator } from '../validators/validator';

const constraints = {
    title: {
      presence: {
        message: 'Cannot be empty.',
      },
      length: {
        minimum: 2,
        message: 'needs to be at least 2 characters.',
      },
    },
    
    description: {
      presence: {
        message: 'Cannot be empty.',
      },
      length: {
        minimum: 4,
        message: 'needs to be at least 4 characters.',
      },
    },

    amount: {
        presence: {
          message: 'Cannot be empty.',
        },
        length: {
          minimum: 1,
          message: 'needs to be at least 1 character.',
        },
    },

    code: {
        presence: {
          message: 'Cannot be empty.',
        },
        length: {
          minimum: 1,
          message: 'needs to be at least 1 character.',
        },
    }, 
};

const useAddItemForm = (useCallback) => {
    const [addItemErrors, setAddItemErrors] = useState({});
    const [inputs, setInputs] = useState({
        title: '',
        description: '',
        amount: '',
        code: '', 

    });

    const handleInputChange = (name, text) => {
        const error = validator(name, text, constraints);
        setAddItemErrors((addItemErrors) => {
          return {
            ...addItemErrors,
            [name]: error,
          };
        });
        setInputs((inputs) => {
          return {
            ...inputs,
            [name]: text,
          };
        });
      };

      const validateOnSend = () => {
        const titleError = validator('title', inputs.title, constraints);
        const descriptionError = validator(
          'description',
          inputs.description,
          constraints
        );
        const amountError = validator('amount', inputs.amount, constraints);
        const codeError = validator('code', inputs.code, constraints); 
    
        if (
          titleError !== null ||
          descriptionError !== null ||
          amountError !== null ||
          codeError == !null
        ) {
          return false;
        } else {
          return true;
        }
      };

      return {
        handleInputChange,
        inputs,
        addItemErrors,
        validateOnSend,
      };
    };

export default useAddItemForm;
