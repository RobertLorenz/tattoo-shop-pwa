import React from 'react';
import './App.css';
import { Navbar, Nav } from 'react-bootstrap'
import Home from './Home'
import Idea from './Idea'
import Users from './Users'
import Faq from './Faq';
import { Link, Route, BrowserRouter as Router, Switch } from 'react-router-dom'
function App() {
  

  return (
    <div className="App">
      <Router>
        <Navbar bg="dark" variant="dark">
          <Link to="/"><Navbar.Brand>Rooklet Ink</Navbar.Brand></Link>
          <Nav className="mr-auto">
            <Nav.Link ><Link to="/idea" >Submit your idea</Link></Nav.Link>
            <Nav.Link><Link to="/faq">Faq</Link></Nav.Link>
            <Nav.Link><Link to="/users">Users</Link></Nav.Link>
          </Nav>
        </Navbar>
        <Switch>
          <Route path="/idea" component={Idea} ></Route>
          <Route path="/users" component={Users} ></Route>
          <Route path="/faq" component={Faq} ></Route>
          <Route path="/" component={Home} ></Route>
          
        </Switch>
      </Router>
    </div>
  );
}

export default App;
