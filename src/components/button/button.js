import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './button.css';

const Button = ({ onClick }) => (
    <form
        className="FileUpload"
        method="post"
        action="">
        <FontAwesomeIcon className="icon" icon="upload" size="3x"/>
        <div>
        <input
            id="upload"
            className="button"
            onClick={onClick}
            type="file"
            name="file"
        />
            <label htmlFor="upload">Выберите изображение</label></div>
    </form>
);

Button.propTypes = {
    onClick: PropTypes.func
};

Button.defaultProps = {
    onClick: () => {}
};

export default Button;