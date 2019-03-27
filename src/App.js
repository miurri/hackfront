import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button/button';
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUpload } from '@fortawesome/free-solid-svg-icons'

library.add(faUpload);
class App extends Component {
  state = {
      data:{},
      isFetching: true,
      error: null
  };

  sendImage() {

  }

  componentWillMount() {
      fetch('http://localhost:3000')
          .then(response => response.json())
          .then(result => this.setState({data: result, isFetching: false }))
          .catch(e => {
              console.log(e);
              this.setState({data: {}, isFetching: false, error: e })});
  }

  render() {
    return (
      <div className="App">
          <Button onClick={this.sendImage}/>
          <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <h1 className="title">Deep Dark Learning</h1>
          </header>
      </div>
    );
  }
}

/*class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}
*/
export default App;
