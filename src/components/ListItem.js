import React from 'react';

/* This can be unessecary implementation. I personally think this component
* is too small. Can be added directly to the ListItem Component */
function ListItem(props) {
  return (
    <li>
        { props.item }
    </li>
  );
}

export default ListItem;