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
import Project from './components/Project/Project';
import AllProject from './components/Project/AllProject';

function App() {
  return (
    <div className='homeContainer'>
      <Router>
      <NavBar></NavBar>
        <Switch>
          <Route path='/home'><Home></Home></Route>
          <Route exact path='/'><Home></Home></Route>
          <Route path='/About'><AboutHome></AboutHome></Route>
          <Route path='/service'><Services></Services></Route>
          <Route path='/contact'><Contact></Contact></Route>
          <Route path='/project'><AllProject></AllProject></Route>
          <Route path='/webNav'><WebSkills></WebSkills></Route>
          <Route path='/webSkill'><WebDetail></WebDetail></Route>
          <Route path='/programing'><ProgramingDetail></ProgramingDetail></Route>
          <Route path='/other'><OtherDetail></OtherDetail></Route>
          <Route path='/tools'><ToolsDetails></ToolsDetails></Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
