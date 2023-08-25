import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import './App.css';
import Main from './component/Main';
import Quiz from "./component/Quiz";
import Result from './component/Result';

function App() {
  return (
    <div className="App">
     <Router>
      <Routes>
        <Route path='/' element={ <Main />} />
        <Route path='/quiz' element={ <Quiz />} />
        <Route path='/result' element={<Result />} />
      </Routes>
     </Router>
    </div>
  );
}

export default App;
