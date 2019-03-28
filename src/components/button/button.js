import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Image from '../image/image'
import './button.css';
import axios from 'axios';
import DragAndDrop from '../dnd/dnd';
import logo from "../../logo.svg";

axios.defaults.xsrfCookieName = 'csrftoken';
axios.defaults.xsrfHeaderName = 'X-CSRFToken';

function getCookie(name) {
    let cookieValue = '';
    if (document.cookie && document.cookie !== '') {
        let cookies = document.cookie.split(';');
        for (var i = 0; i < cookies.length; i++) {
            let cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}

let csrftoken = getCookie('csrftoken');

const CSRFToken = () => {
    return (
        <input type="hidden" name="csrfmiddlewaretoken" value={csrftoken}/>
    );
};

class Button extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null,
            result: null,
            isFetching: true
        };
    }

    sendform = (e) => {
        fetch('url', {
            credentials: 'include',
            method: 'POST',
            mode: 'same-origin',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                'X-CSRFToken': csrftoken
            },
            body: this.state.data
        })
            .then(response => response.json())
            .then(result => this.setState({
                result: result,
                isFetching: false}))
            .catch(e => {
                console.log(e);
                this.setState({
                    data: null,
                    isFetching: false,
                    error: e})
            });
        e.preventDefault();
    };

    handleDrop = (file) => {
        this.setState({
            data: file[0]
        })
    };

    handleChange = (event) => {
        console.log("s00");
        this.setState({
            data: event.target.files[0]
        });
        console.log(event.target.files[0]);
    };




    render() {
        return (
            <div>
                <footer className="footer">
                    <h1>Deep Dark Learning<img src={logo} className="logo" alt="logo"/></h1>
                </footer>
                <div>
                <DragAndDrop handleDrop={this.handleDrop}>
                    <form
                        className="FileUpload"
                        method="post"
                        action="multipart/form-data">
                        <CSRFToken/>
                        <FontAwesomeIcon className="icon" icon="upload" size="3x"/>
                        <div>
                            <input
                                id="upload"
                                className="button"
                                onChange={this.handleChange}
                                type="file"
                                name="file"
                                accept="image/*"
                            />
                            <label htmlFor="upload">Выберите изображение</label>
                        </div>
                        <input
                            className="submit"
                            type="submit"
                            value="Отправить"
                            onClick={this.sendform}
                        />
                    </form>
                </DragAndDrop>
                </div>
                <span>
                    {this.state.data ? <Image src={URL.createObjectURL(this.state.data)} descriprion="original"/> : <br/>}
                </span>
                <span>
                    {this.state.result ? <Image src={URL.createObjectURL(this.state.result)} descriprion="result"/> : <br/>}
                </span>
            </div>
        )
    }
}

export default Button;