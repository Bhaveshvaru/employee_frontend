import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import Search from './components/Search';
import AddEmployee from "./components/AddEmployee"
import UpdateEmployee from './components/UpdateEmployee';

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Main} exact />   
          <Route path="/SearchEmployee" component={Search} />       
          <Route path="/AddEmployee" component={AddEmployee} />   
          <Route path="/UpdateEmployee/:id" component={UpdateEmployee} />       
        </Switch>
      </Router>
    </div>
  );
}

export default App;
