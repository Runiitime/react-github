import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import Layout from './components/layouts/layout'
import Profile from './pages/Profile'
import Team from './pages/Team'

function App() {
  return (
    <Router>
      <Layout>
        <Route path="/" exact component={Profile}/>
        <Route path="/team" exact component={Team}/>
      </Layout>
    </Router>
  );
}

export default App;