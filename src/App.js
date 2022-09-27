import React from 'react'
import './App.css';


class App extends React.Component {
	render() {
		return(
	<center>
		<div className="logo">
			<img alt="Google" src="/google.png" />
		</div>


	<form action="/results" method="post">
		<input className="searchbar" type="search" name="search" />
		<div className="buttons">
			<button type="submit">Search</button>
		</div>
	</form>
</center>

		)
	}
}


export default App
