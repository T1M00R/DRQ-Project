import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { MainContent } from './components/mainContent';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import { TaskList } from './components/taskList';
import { NewTask } from './components/newTask';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Edit } from './components/editTask';

class App extends React.Component {
  render() {
    return (
      <Router>
      <div className="App">
        {/* Navigation bar */}
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/"></Navbar.Brand>
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/taskList">Tasks</Nav.Link>
              <Nav.Link href="/newTask">New Task</Nav.Link>
            </Nav>
          </Container>
        </Navbar>
        {/* Routing to different locations in site */}
      <Routes>
        <Route path='/' element={<MainContent></MainContent>}></Route>
        <Route path='/taskList' element={<TaskList></TaskList>}></Route>
        <Route path='/newTask' element={<NewTask></NewTask>}></Route>
        <Route path='/edit/:id' element={<Edit></Edit>}></Route>
      </Routes>
      </div>
      </Router>
    );
  }
}

export default App;
