import React, {Component} from 'react';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import Image from '../image/image'
import './button.css';
import axios from 'axios';

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
        this.fileReader = new FileReader();
        this.state = {data: null, url: ''};
    }

    sendform = () => {
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
    };

    handleChange = (event) => {
        console.log("s00");
        this.setState({
            data: event.target.files[0],
            url: URL.createObjectURL(event.target.files[0])
        });
        console.log(event.target.files[0]);
    };

    render() {
        return (
            <div>
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
                        <label htmlFor="upload">Выберите изображение</label></div>
                    <input
                        className="submit"
                        type="submit"
                        value="Отправить"
                        onClick={this.sendform}
                    />
                </form>
                {this.state.data ? <Image src={this.state.url} descriprion="original"/> : <br/>}
            </div>
        )
    }
}

export default Button;