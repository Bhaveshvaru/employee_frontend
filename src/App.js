import './App.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from './components/Main';
import Search from './components/Search';
import AddEmployee from "./components/AddEmployee"

function App() {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" component={Main} exact />   
          <Route path="/SearchEmployee" component={Search} />       
          <Route path="/AddEmployee" component={AddEmployee} />       
        </Switch>
      </Router>
    </div>
  );
}

export default App;
