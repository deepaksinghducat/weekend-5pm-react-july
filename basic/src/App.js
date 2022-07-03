import './App.css';
import { Input } from './Input';
import { Parent } from './Parent';

function App() {

  // const data = [
  //   {
  //     title : "fsafsdffsad",
  //     age: 30
  //   },
  //   {
  //     title : "fsafsdffsad",
  //     age: 30
  //   },
  //   {
  //     title : "fsafsdffsad",
  //     age: 30
  //   }
  // ]

  // return (
  //   <div className="background-red">
  //     {
  //       data.map((p) => {
  //         return (
  //           <Demo title={p.title} age={p.age} />
  //         )
  //       })
  //     }

  //   </div>
  // );

  // return (
  //   <div>
  //     <Input />
  //   </div>
  // );

  return (
    <div>
      <Parent />
    </div>
  )
}

export default App;
