import React from 'react';

function Button(props) {
  /*  Depending om what value we send down this button can increase or
  * decrease the counter. The logic for updating the counter doesn't have to
  * be in here */
  let bool = (props.value === "increase") ? true : false
  /* () => handleClick(bool) send back the value to the component above
  * look at how we have to use a anonymous function to prevent the function
  * from being called on mount. */
  return (
    <button onClick={() => props.handleClick(bool)}
            className="button" 
            style={ props.style }>
        { props.value }
    </button>
  );
}

export default Button;