import React from 'react';

import './form-input.styles.scss'

/*const FormInputComponent = ({label, ...otherProps}) => {
    return (
        <div className="group">
            <input className="form-input" {...otherProps} />
            {
                label &&
                <label htmlFor="" className={`${otherProps.value.length ?  'shrink':''} form-input-label`}>{label}
                </label>
            }
        </div>
    );
};*/



const FormInputComponent = ({label, inputOptions}) => {
    return (
        <div className="group">
            <input className="form-input" {...inputOptions} />
            {
                label &&
                <label htmlFor="" className={`${inputOptions.value.length ?  'shrink':''} form-input-label`}>
                    {label}
                </label>
            }
        </div>
    );
};

export default FormInputComponent;