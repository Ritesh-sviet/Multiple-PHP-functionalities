
import './App.css';
import { Routes, Route } from "react-router-dom";
import One from "./comp/one"
import Two from "./comp/two"
import Three from './comp/three';
import Four from './comp/four';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path='/one' element = {<One />}/>
          <Route path='/two' element = {<Two />}/>
          <Route path='/three' element = {<Three />}/>
          <Route path='/four' element = {<Four />}/>
        </Routes>
      </header>
    </div>
  );
}

export default App;
