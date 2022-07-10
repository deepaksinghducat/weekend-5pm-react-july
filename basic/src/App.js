import React, { Fragment } from 'react';
import ReactDOM from 'react-dom';
import './App.css';
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
     <Referance />
  )
}

export default App;
