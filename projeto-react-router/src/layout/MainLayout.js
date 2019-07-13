import React, { Component } from 'react';

import {
  Navbar, NavbarBrand,
  NavItem, NavLink, Nav,
  Container,
} from 'reactstrap';
import {
  Link, BrowserRouter,
  Route,
} from 'react-router-dom';

import Home from '../pages/Home';
import Tasks from '../pages/Tasks';
import About from '../pages/About';

class MainLayout extends Component {

  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar color="light" expand="xs">
            <NavbarBrand>
              <Link to='/'>WebDev</Link>
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
            <Route path="/" exact component={Home} />
            <Route path="/tasks" component={Tasks} />
            <Route path="/about" component={About} />
          </Container>
        </BrowserRouter>
      </div>
    )
  }

}

export default MainLayout;
