import React, { Component } from 'react';
import InputList from './InputList';
import Counter from './Counter';

/*  The Content component can handle the logic for the app */
class Content extends Component {

  render(){
    return(
      <section className="content">
        <h3> Exempelsida med React </h3>
        <p> Fokusera inte på CSSen, den kan du bara kopiera om du vill, eller modifiera
          som du själv vill ha den.
          Fokusera istället på att få upp en struktur i react som du känner dig bekväm med och
          som stämmer överens med hur du ser DOMen. Vad skulle denna sida kunna bestå av för komponenter? Header? Navbar? Main?
        </p>
        <p> Skapa <strong>först</strong> det statiska, försök sedan att få in state så att inputfältet och knapparna fungerar. Fundera också då på var state ska ligga. </p>
        <Counter />
        <InputList />
      </section>

    );
  }

}

export default Content;