import React from 'react'
import { render } from 'react-dom'
import { Router, Route, Link, IndexLink, hashHistory } from 'react-router'
import { Redirect } from 'react-router'
import { IndexRoute } from 'react-router'
import { IndexRedirect,withRouter } from 'react-router'

const App = React.createClass({
  render() {
    return (
      <div>
        <h1>App</h1>
        <ul>
          <li><IndexLink to="/">Dashboard</IndexLink></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/inbox">Inbox</Link></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})

const About = React.createClass({
  render() {
    return <h3>About</h3>
  }
})

const Inbox = React.createClass({
  render() {
    return (
      <div>
        <h2>Inbox</h2>
        <Link to="/inbox/messages/5">messages</Link>
        {this.props.children}
      </div>
    )
  }
})

const Dashboard = React.createClass({
  render() {
    return <div>Welcome to the app!</div>
  }
})

const InboxHome = () => (
    <div>
      <p>Welcome to Inbox!</p>
    </div>
  )

const Message_1 = React.createClass({
  render() {
    return <h3>Message {this.props.params.id}</h3>
  }
})
const Message = withRouter(Message_1)

render((
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Dashboard} />
      <Route path="about" component={About} />
      <Route path="inbox" component={Inbox}>
        <IndexRoute component={InboxHome} />
        <Redirect from="messages/:id" to="/messages/:id" />
        {/*<IndexRedirect to='/about' />*/}

      </Route>
      <Route component={Inbox}>
        <Route path="messages/:id" component={Message} />
      </Route>
    </Route>
  </Router>
), document.getElementById('app'))