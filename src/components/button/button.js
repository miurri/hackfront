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
    </form>
);

Button.propTypes = {
    onChange: PropTypes.func
};

Button.defaultProps = {
    onChange: () => {}
};

export default Button;