import React from 'react';

import './form-input.styles.scss'

const FormInputComponent = ({label, ...otherProps}) => {
    return (
        <div className="group bg-red-700">
            <input className="form-input" {...otherProps} />
            {
                label &&
                <label htmlFor="" className={`${otherProps.value.length ?  'shrink':''} form-input-label`}>
                    {label}
                </label>
            }
        </div>
    );
};

export default FormInputComponent;
