import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import CSRFToken from '../csrf/csrf';
import './button.css';

const Button = ({ onChange }) => (
    <form
        className="FileUpload"
        method="post"
        action="">
        <CSRFToken />
        <FontAwesomeIcon className="icon" icon="upload" size="3x"/>
        <div>
        <input
            id="upload"
            className="button"
            onChange={onChange}
            type="file"
            name="file"
            accept="image/*"
        />
            <label htmlFor="upload">Выберите изображение</label></div>
        <input
            className="submit"
            type="submit"
            value="Отправить"
            onClick={(e) => {e.preventDefault(); console.log('send form')}}
        />
    </form>
);

Button.propTypes = {
    onChange: PropTypes.func
};

Button.defaultProps = {
    onChange: () => {}
};

export default Button;

function sendform() {

}