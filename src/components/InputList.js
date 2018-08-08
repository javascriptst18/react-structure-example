import React from 'react';
import InputField from './InputField';
import List from './List';

class InputList extends React.Component{
  state = {
    name: '',
    names: []
  }

  handleChange = (e) => {

    //ES6 magic: get the name of the input field and set the
    //key to that name. Then grab the value from the input
    //and set it to that key. 
    this.setState({ [e.target.name]: e.target.value });
  }

  handleSubmit = (e) => {

    //e.keyCode === 13 is the enter key, otherwise
    //it will run this code for every keyDown
    if (e.keyCode === 13) {

      //pure copy the array in state to a new Array
      //this is so we don't reference a new array
      let newNames = [...this.state.names];

      //push the current value, the input value into array
      newNames.push(this.state.name);

      //Set the new copied array to this.state.names
      //and reset the input field
      this.setState({ names: newNames, name: '' });
    }
  }

  render(){
    return <div className="inputList">
      <InputField handleChange={this.handleChange}
        handleSubmit={this.handleSubmit}
        value={this.state.name}
        placeholder="Skriv något -> Enter"
      />
      <List items={this.state.names} />
    </div>
  }
}

export default InputList;