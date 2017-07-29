import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexLink, browserHistory } from 'react-router'
import { Redirect } from 'react-router'
import { IndexRoute } from 'react-router'
import { IndexRedirect, withRouter } from 'react-router'
import PropTypes from 'prop-types'

const App     = (props) => (
  <div>
    <h1>App</h1>
    <ul>
      <li><IndexLink to="/">Dashboard</IndexLink></li>
      <li><Link to="/about">About</Link></li>
      <li><Link to="/inbox">Inbox</Link></li>
    </ul>
    {props.children}
  </div>
)
App.proptypes = {
  children : PropTypes.node
}
const About   = () => (
  <h3>About</h3>
)

const Inbox = (props) => (
  <div>
    <h2>Inbox</h2>
    <Link to="/inbox/messages/5">messages</Link>
    {props.children}
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
const Message       = withRouter(Message_1)

import { BrowserRouter, Route } from 'react-router-dom'

/* 路由配置 */
const RouteConfig =
        (<BrowserRouter>
          <Route path="/" component={Main}/>
          <Route path="/dataspace" component={Data}/>
        </BrowserRouter>)

render((
  <Router history={browserHistory}>
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
), document.getElementById('app'))