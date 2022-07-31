import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { UseEffect } from './components/UseEffect';
import { Demo } from './Demo';
import { Fragments } from './Fragments';
import { Input } from './Input';
import { Parent } from './Parent';
import Referance from './Referance';
import { Wrapper } from './Wrapper';


const UpperRoot = (props) => {
  return (
    <div>uppper root</div>
  )
}


function App() {

  const data = [
    {
      title: "fsafsdffsad",
      age: 30
    },
    {
      title: "fsafsdffsad",
      age: 30
    },
    {
      title: "fsafsdffsad",
      age: 30
    }
  ]

  // return (
  //   // <Wrapper>


  //   // </Wrapper>

  //   // <Cart>
  //   //   <div class="far"></div>
  //   // </Cart>
  // );

  // return (
  //   <div>
  //     <Input />
  //   </div>
  // );

  // return (
  //   <div>
  //     <Parent />
  //   </div>
  // )

  // return (
  //   <Fragment>
  //     {
  //       ReactDOM.createPortal(<UpperRoot /> ,document.getElementById('upper-root'))
  //     }
  //   </Fragment>
  // )

  return (
     <UseEffect />
  )
}

export default App;
