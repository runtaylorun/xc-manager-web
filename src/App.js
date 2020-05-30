import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import NavBar from './Components/Shared/NavBar';
import './App.css';

function App() {
	return (
		<Router>
			<NavBar />
			<div>
				<Switch>
					<Route path="/" exact component={Home} />
				</Switch>
			</div>
		</Router>
	);
}

export default App;
