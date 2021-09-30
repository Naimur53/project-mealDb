import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Topbar from './component/Topbar/Topbar';
import { useState } from 'react';
import Show from './component/Show/Show';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Details from './component/Details/Details';
function App() {
  const handleSearch = e => {
    setText(e.target.value);
  }
  const [text, setText] = useState('a');
  return (
    <div>
      <Router>
        <Topbar handleSearch={handleSearch}></Topbar>
        <Switch>
          <Route exact path="/">
            <div>hi Home</div>
          </Route>
          <Route exact path="/Home">
            <div>hi Home</div>
          </Route>
          <Route exact path="/show">
            <Show text={text}></Show>
          </Route>
          <Route exact path="/show/:idMeal">
            <Details></Details>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
