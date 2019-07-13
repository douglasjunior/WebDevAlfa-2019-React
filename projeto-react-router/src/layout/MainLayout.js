import React, { Component } from 'react';

import {
  Navbar, NavbarBrand,
  NavItem, NavLink, Nav,
  Container,
} from 'reactstrap';
import {
  Link, BrowserRouter,
  Route, Switch,
} from 'react-router-dom';

import Home from '../pages/Home';
import Tasks from '../pages/Tasks';
import About from '../pages/About';
import Login from '../pages/Login';
import NotFound from '../pages/NotFound';
import PrivateRoute from '../components/PrivateRoute';

class MainLayout extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar color="light" expand="xs">
            <NavbarBrand>
              <Link to='/'>WebDev!</Link>
            </NavbarBrand>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink>
                  <Link to='/tasks'>Tarefas</Link>
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink>
                  <Link to='/about'>Sobre</Link>
                </NavLink>
              </NavItem>
            </Nav>
          </Navbar>
          <Container>
            <Switch>
              <Route path="/" exact component={Home} />
              <PrivateRoute path="/tasks" component={Tasks} />
              <Route path="/about" component={About} />
              <Route path="/login" component={Login} />
              <Route component={NotFound} />
            </Switch>
          </Container>
        </BrowserRouter>
      </div>
    )
  }

}

export default MainLayout;
