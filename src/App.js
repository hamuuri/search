import React from 'react'


class App extends React.Component {
	render() {
		return(
	<center>
		<div class="logo">
			<img alt="Google" src="img/google.png" />
		</div>


	<form action="/results" method="post">
		<input class="searchbar" type="search" name="search" />
		<div class="buttons">
			<button type="submit">Search</button>
		</div>
	</form>
</center>

		)
	}
}


export default App
