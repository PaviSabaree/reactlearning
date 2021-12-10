import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Demo from './Demo';
import Counter from './Counter';
import Home from './components/home/home';
import Buttoncounter from './Buttoncounter';
import Buttonevent from './Buttonevent';
import Listkeys from './Listkeys';
import reportWebVitals from './reportWebVitals';
import Header from './Header';
import Nav from './Nav';
import Mainscreen from './Mainscreen';
import Flag from './Flag';

ReactDOM.render( 
  <React.StrictMode>
   {/* <Greeting isLoggedIn ={true}/> */}
   {/* <Flag/> */}
  <Header/>
   {/* <Nav/>
   <Container/> */}
    {/* <Buttonevent/> */}
    {/* <Buttoncounter/> */}
    {/* <Demo/> */}
  {/* <Counter/>
    <App />
    <Home name={"Pavi"} />  */}
   </React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
