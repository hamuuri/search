import React from 'react'



class Results extends React.Component {
	render() {
		return(
			<>
			<nav>
		      <img alt="Google" src="images/google.png" />
		      <form>
		        <input className="searchbar" type="text" title="Search" />
		        <button className="button" type="button">Search</button>
		      </form>
		    </nav>
		    	<section>
		      <p>37 results</p>
		      <div className="result-box">
		        <small>www.w3school.com</small>
		        <a href="#" className="results-title"
		          ><h2>JavaScript Tutorial - W3School</h2></a
		        >
		        <p>
		          Well organized and easy to understand Web building tutorialss with
		          lots of examples of how to use HTML, CSS,
		          JavaScript,SQL,PHP,Python,Bootstrap,Java.
		        </p>
		        <ul>
		          <li><a href="#"> JavaScript Introduction</a></li>
		          <li><a href="#"> JS Functions</a></li>
		          <li><a href="#"> JavaScript Examples</a></li>
		        </ul>
		      </div>
		      <div className="result-box">
		        <small>developer.mozilla.org</small>
		        <a href="#" className="results-title"><h2>JavaScript | MDN</h2></a>
		        <p>
		          JavaScript (JS) is a lightweight, interpreted, or just-in-time
		          compiled programming language with first-class functions. While it is
		          most well-known as the scripting language for Web page CouchDB and
		          Adobe Acrobat.
		        </p>
		        <ul>
		          <li><a href="#"> JavaScript Operator</a></li>
		          <li><a href="#"> JavaScript Code</a></li>
		          <li><a href="#"> JavaScript Meaning</a></li>
		        </ul>
		      </div>
		      <div className="result-box">
		        <small>en.wikipedia.org</small>
		        <a href="#" className="results-title"><h2>JavaScript - Wikipedia</h2></a>
		        <p>
		          JavaScript often abbreviated as JS, is a programming language that
		          conforms to the ECMAScript specification. JavaScript is high-level,
		          often just-in-time.
		        </p>
		        <ul>
		          <li><a href="#"> JavaScript Online</a></li>
		          <li><a href="#"> JavaScript Definition</a></li>
		        </ul>
		      </div>
		    </section>
</>

		)
	}
}

export default Results;
