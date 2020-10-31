import React, { Component } from 'react';
import Calculator from "./components/Calculator"
import "./css/style.css";
// import Display from "./components/Display"

class App extends Component {

   render (){
     return(
       <div className="calculator-app">
         <h1>Calculator</h1>
         <Calculator/>
         <h4>This App Made With Pride By :</h4>
         <h3>Ahmad Danang X Ari Darsan X Muhammad Arief</h3>
       </div>

     )
  }

}

export default App;

