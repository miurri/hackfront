import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button/button';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faUpload} from '@fortawesome/free-solid-svg-icons';


library.add(faUpload);

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            isFetching: true,
            error: null
        };

    }

    componentWillMount() {
        fetch('http://localhost:3000')
            .then(response => response.json())
            .then(result => this.setState({data: result, isFetching: false}))
            .catch(e => {
                console.log(e);
                this.setState({data: null, isFetching: false, error: e})
            });
    }

    render() {
        return (
            <div className="MainWindow">
                <header>
                </header>
                <Button/>
                <div className="ImageBlock">
                </div>
                <footer>
                    <h1 className="title">Deep Dark Learning<img src={logo} className="logo" alt="logo"/></h1>
                </footer>
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
