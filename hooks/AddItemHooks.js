import {useState} from 'react';
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
  type: {
    presence: {
      message: 'Cannot be empty.',
    },
    length: {
      minimum: 3,
      message: 'needs to be at least 3 characters.',
    },
  },
  code: {
    presence: {
      message: 'Cannot be empty.',
    },
    length: {
      minimum: 2,
      message: 'needs to be at least 2 characters.',
    },
  },
};

const useAddItemForm = (callback) => {
  const [addItemErrors, setAddItemErrors] = useState({});
  const [inputs, setInputs] = useState({
    title: '',
    description: '',
    type: '',
    code: '',

  });

  const handleInputChange = (name, text) => {
    console.log(name, text);
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
    const typeError = validator('type', inputs.type, constraints);
    const codeError = validator('code', inputs.code, constraints);

    if (
      titleError !== null ||
      descriptionError !== null ||
      typeError !== null ||
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
