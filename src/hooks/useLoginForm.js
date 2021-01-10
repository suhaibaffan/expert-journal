import { useState } from 'react';
import { axios } from './useAxios';
import { setUserToLocalStorage } from '../helpers/auth';
const getValidationErrors = ({ id, name }) => {
    const errors = [];

    if ( id.length < 4 )
        errors.push([ 'id', 'id is invalid' ]);

    if ( name.length < 2 )
        errors.push([ 'name', 'name is invalid' ]);

    return errors;
};

async function login ( input ) {
    try {
        const response = await axios.post( '/user/login', {
            ...input
        });
        setUserToLocalStorage( response?.data );
        return response;
    } catch ( err ) {
        return { err };
    }
}

export default function useLoginForm ( fn ) {
    const [ inputs, setInputs ] = useState({
        id: '',
        name: '',
        errors: [],
        valid: false,
        success: false
    });

    const setInputsErrors = errors => {
        setInputs( nextInputs => ({
            ...nextInputs,
            valid: errors.length === 0,
            errors
        }) );
    };

    const handleSubmit = event => {
        if ( event )
            event.preventDefault();

        const errors = getValidationErrors( inputs );
        setInputsErrors( errors );

        if ( errors.length === 0 ) {
            login( inputs ).then( data => {
                if ( data.err ) {
                    errors.push([ '', data.err.response.data ]);
                    console.log( errors );
                    setInputsErrors( errors );
                } else {
                    setInputs( prevInputs => ({
                        ...prevInputs,
                        success: true
                    }) );
                }
            }).catch( err => {
                errors.push([ '', err.response.data ]);
                console.log( errors );
                setInputsErrors( errors );
            });
        }
    };

    const handleInputChange = event => {
        event.persist();
        setInputs( prevInputs => ({
            ...prevInputs,
            valid: false,
            [event.target.name]: event.target.value
        }) );
    };

    return {
        handleSubmit,
        handleInputChange,
        inputs
    };
}
