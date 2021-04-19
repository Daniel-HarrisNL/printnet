import React from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Home from './Home.js';
import Explore from './Explore.js';
import NewPost from './NewPost.js';

function App() {
	return (<Router>
		<Switch>
			<Route path="/" exact component={Home}></Route>
			<Route path="/explore" component={Explore}></Route>
			<Route path="/post" exact component={NewPost}></Route>
		</Switch>
	</Router>);
}

export default App;
