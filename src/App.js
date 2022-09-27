<<<<<<< HEAD
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
=======
import React from "react";

class App extends React.Component {
  render() {
    return (
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
    );
  }
>>>>>>> 17918531311ea5f3725c08e0683e03dff64db60f
}

export default App;
