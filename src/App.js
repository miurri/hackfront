import React, {Component} from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './components/button/button';
import {library} from '@fortawesome/fontawesome-svg-core';
import {faUpload} from '@fortawesome/free-solid-svg-icons';


library.add(faUpload);

class App extends Component {
    render() {
        return (
            <div className="MainWindow">
                <Button/>
            </div>
        );
    }
}

export default App;
