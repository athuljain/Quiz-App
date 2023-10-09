import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import './App.css';
import Main from './component/Main';
import Quiz from "./component/Quiz";
import Result from './component/Result';
import { CheckUserExist } from './helper/Helper';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/' element={ <Main />} />
        <Route path='/quiz' element={ <CheckUserExist><Quiz /></CheckUserExist>} />
        <Route path='/result' element={ <CheckUserExist><Result /></CheckUserExist>} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
