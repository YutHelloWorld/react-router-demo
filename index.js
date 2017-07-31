import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexLink, hashHistory, IndexRoute, Redirect, IndexRedirect, withRouter  } from 'react-router'
import PropTypes from 'prop-types'

const App = ({ children }) => (
  <div>
    <h1>App</h1>
    <ul>
      <li><IndexLink to="/">Dashboard</IndexLink></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/inbox">Inbox</Link></li>
    </ul>
    {children}
  </div>
)

App.proptypes = {
  children : PropTypes.node
}

const About = () => (
  <h3>About</h3>
)

const Inbox = ({ children }) => (
  <div>
    <h2>Inbox</h2>
    <Link to="/inbox/messages/5">messages</Link>
    {children}
  </div>
)

Inbox.proptypes = {
  children : PropTypes.node
}

const Dashboard = () => (
  <div>Welcome to the app!</div>
)

const InboxHome = () => (
  <div>
    <p>Welcome to Inbox!</p>
  </div>
)

const Message_1 = ({ params }) => (
  <h3>Message {params.id}</h3>
)

Message_1.propTypes = {
  params : PropTypes.object.isRequired
}
const Message = withRouter(Message_1)

const routerElement = (
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard}/>
      <Route path="about" component={About}/>
      <Route path="inbox" component={Inbox}>
        <IndexRoute component={InboxHome}/>
        <Redirect from="messages/:id" to="/messages/:id"/>
        {/*<IndexRedirect to='/about' />*/}

      </Route>
      <Route component={Inbox}>
        <Route path="messages/:id" component={Message}/>
      </Route>
    </Route>
  </Router>
)
render(routerElement, document.getElementById('app'))