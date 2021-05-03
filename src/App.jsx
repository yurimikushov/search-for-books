import React from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from 'react-router-dom'
import Home from './pages/Home'
import FoundBooks from './pages/FoundBooks'
import './App.css'

const App = () => (
  <Router>
    <Switch>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/search'>
        <FoundBooks />
      </Route>
      <Route path='*'>
        <Redirect to='/' />
      </Route>
    </Switch>
  </Router>
)

export default App
