import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import './style.css'
import Home from './views/home'
import ComputaCode from './views/computa-code'
import ComputaCombinator from './views/computa-combinator'
import Computatrum from './views/computatrum'
import About from './views/about'
import Privacy from './views/privacy'
import AcceptableUse from './views/acceptable-use'

const App = () => {
  return (
    <Router>
      <div>
        <Route component={Home} exact path="/" />
        <Route component={ComputaCode} exact path="/computa-code" />
        <Route component={ComputaCombinator} exact path="/computa-combinator" />
        <Route component={Computatrum} exact path="/computatrum" />
        <Route component={About} exact path="/about" />
        <Route component={Privacy} exact path="/privacy" />
        <Route component={AcceptableUse} exact path="/acceptable-use" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))
