
import './App.css';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Login from './Components/Login';
import Home from './Components/Home';
import History from './Components/History';
import ErrorPage from './Components/ErrorPage';
import UpdatePage from './Components/UpdatePage';
import Navbar from './Components/Navbar';
import NotFoundPage from './Components/NotFound';

function App() {
  return (
    <Router>
      

      
     
    
      <Routes>
   
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
        <Route path="/history" element={<History/>}/>
        <Route path="/notfound" element={<NotFoundPage/>}/>
        <Route path="*" element={<ErrorPage/>}/>
        <Route path="/update/:id" element={<UpdatePage/>}/>


      </Routes>
  

    </Router>
  
  );
}

export default App;
