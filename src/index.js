import React from 'react';
import ReactDOM from 'react-dom';
import App from './content';
import Footer from './footer';
import "./App.css";
function Result(){
  return(
    <div>
      <App/>
      <Footer/>
      </div>
  )
}
ReactDOM.render(<Result/>, document.getElementById('root'));
