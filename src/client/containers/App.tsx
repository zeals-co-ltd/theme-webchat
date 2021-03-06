import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom"
import Webchat from './Webchat'

const ChatbotSelect = () => (
  <ul>
    <li>
      <Link to={`/app/chatbots/1`}>Default</Link>
    </li>
    <li>
      <Link to={`/app/chatbots/1?user=nerd`}>20s Tech Worker</Link>
    </li>
    <li>
      <Link to={`/app/chatbots/1?user=girl`}>20s beauty focused female</Link>
    </li>
  </ul>
)

export default class App extends Component {
  render() {
    return (
      <div className="container">
        <Router>
          <h1>Theme Chatbot</h1>
          <Switch>
            <Route exact path="/app">
              <ChatbotSelect />
            </Route>
          </Switch>
          <Switch>
            <Route path="/app/chatbots/:chatbotId" component={Webchat} />
          </Switch>
        </Router>
      </div>
    )
  }
}