import React from 'react';

function AppContainer(props){
  return <div className="app">
    { props.children }
  </div>
}

export default AppContainer;