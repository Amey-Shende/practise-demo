import React from 'react';
import { FormGroup, FormControl } from 'react-bootstrap';

const InputComponent = ({ id, name, onChange, label, value, className, ...props }) => {
    return (
        <FormGroup>
            {label && <label htmlFor={id}>{label}</label>}
            <FormControl
                id={id}
                name={name}
                onChange={onChange}
                value={value}
                className={className}
                {...props}
            />
        </FormGroup>
    );
};

export default InputComponent;