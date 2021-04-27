import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home/Home';
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";
import NavBar from './components/NavBar/NavBar';
import Contact from './components/Contact/Contact';
import WebSkills from './components/WebSkills/WebSkills';
import New from './components/New/New';
import WebDetail from './components/WebDetail/WebDetail';
import ProgramingDetail from './components/ProgramingDetail/ProgramingDetail';
import OtherDetail from './components/OtherDetail/OtherDetail';
import ToolsDetails from './components/ToolsDetails/ToolsDetails';
import AboutHome from './components/AboutHome/AboutHome';
import Services from './components/Services/Services';
import AllProject from './components/Project/AllProject';
import AllBlog from './components/Blog/AllBlog';
import ReviewFrom from './components/Review/ReviewFrom';
import { createContext, useState } from 'react';
import Login from './components/Login/Login';
import PrivateRoute from './components/Login/PrivateRoute';
export const Context=createContext();
function App() {
  const [logInUser,setLogInUser]=useState({});
  return (
    <div className='homeContainer'>
      <Context.Provider value={[logInUser,setLogInUser]}>
          <Router>
          <NavBar></NavBar>
            <Switch>
              <Route path='/home'><Home></Home></Route>
              <Route exact path='/'><Home></Home></Route>
              <Route path='/About'><AboutHome></AboutHome></Route>
              <Route path='/service'><Services></Services></Route>
              <Route path='/blog'><AllBlog></AllBlog></Route>
              <Route path='/contact'><Contact></Contact></Route>
              <Route path='/project'><AllProject></AllProject></Route>
              <PrivateRoute path='/review'><ReviewFrom></ReviewFrom></PrivateRoute>
              <Route path='/login'><Login></Login></Route>
              <Route path='/webNav'><WebSkills></WebSkills></Route>
              <Route path='/webSkill'><WebDetail></WebDetail></Route>
              <Route path='/programing'><ProgramingDetail></ProgramingDetail></Route>
              <Route path='/other'><OtherDetail></OtherDetail></Route>
              <Route path='/tools'><ToolsDetails></ToolsDetails></Route>
            </Switch>
          </Router>
      </Context.Provider>
    </div>
  );
}

export default App;
