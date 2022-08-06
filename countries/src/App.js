import './App.css';
import { Route, Routes } from 'react-router-dom';
import CountryList from './components/CountryList';
import Country from './components/Country';

function App() {
  return (
    <div className="row">
      <Routes>
          <Route path='/:name' element={<Country />}/>
          <Route path='/' element={<CountryList />}/>
      </Routes>
    </div>
  );
}

export default App;
