import React from "react";
import "./index.css";

class Search extends React.Component {
  state = {
    search: "",
  };
  changeSearch = (e) => {
    {
      this.setState({ search: e.target.value });
    }
  };
  render() {
    return (
      <center>
        <div className="logo">
          <img alt="Google" src="/google.png" />
        </div>

        <form action="/results" method="post">
          <input
            className="searchbar"
            type="search"
            name="search"
            onKeyUp={this.changeSearch}
          />
          <div className="buttons">
            <button type="submit">Search</button>
          </div>
        </form>
      </center>
    );
  }
}

export default Search;
