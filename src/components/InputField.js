import React from 'react';

 function InputField(props) {
  return (
    <input  type="text"
            name="name"
            className="input"
            value={ props.value } 
            onChange={ props.handleChange }
            onKeyDown={ props.handleSubmit }
            placeholder={ props.placeholder} />
  );
}

export default InputField;