import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Addtodo from './Components/Addtodo';
import ViewAll from './Components/ViewAll';

function App() {
  return (
   <BrowserRouter>
    <Routes>
      <Route path='/' element={<Addtodo/>}/>
      <Route path='/viewall' element={<ViewAll/>}/>
    </Routes>
   </BrowserRouter>

  );
}

export default App;
