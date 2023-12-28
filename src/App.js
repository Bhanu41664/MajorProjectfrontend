import logo from './logo.svg';
import './App.css';
import  Header from './Components/Header/Header'
import Coverphot  from './Components/Coverphoto/Coverphot';
import Selectdatabases from './Components/Selelctdatabases/Selectdatabases';
import QueryTable from './Components/QueryTable/QueryTable';
import Home from './Pages/Home/Home';
import Practice from './Pages/Terminal/Practice';
import Login from './Components/Login/Login';
import Terminal from './Components/Terminal/Terminal';
import {
  BrowserRouter as Router,
  
  Routes,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (
   <Router>
    <Routes>
      <Route exact path="/"
      element={<Home/>}
       />
       <Route exact path="/:id"
          element={<Practice/>}
       />

      
    </Routes>
   </Router>
      
      

   
  );
}

export default App;
