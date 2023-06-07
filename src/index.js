import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import Computatrum from './views/computatrum'
import ComputaCode from './views/computa-code'
import AcceptableUse from './views/acceptable-use'
import Privacy from './views/privacy'
import About from './views/about'
import ComputaCombinator from './views/computa-combinator'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={Computatrum} exact path="/computatrum" />
        <Route component={ComputaCode} exact path="/computa-code" />
        <Route component={AcceptableUse} exact path="/acceptable-use" />
        <Route component={Privacy} exact path="/privacy" />
        <Route component={About} exact path="/about" />
        <Route component={ComputaCombinator} exact path="/computa-combinator" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
