import {useState} from 'react';

const useSignUpForm = (callback) => {
    const [inputs, setInputs] = useState({
        email: '',
        password: '',
        full_name: '',
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

export default useSignUpForm;