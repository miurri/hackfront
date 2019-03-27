import React from 'react';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './button.css';

const Button = ({ onClick }) => (
    <form
        className="FileUpload"
        method="post"
        action="">
        <div>
            <label htmlFor="upload">
                <FontAwesomeIcon className="icon" icon="upload" size="5x"/><br/>
                Выберите изображение
                <input
                    id="upload"
                    className="button"
                    onClick={onClick}
                    type="file"
                    name="file"
                />
            </label></div>
    </form>
);

Button.propTypes = {
    onClick: PropTypes.func
};

Button.defaultProps = {
    onClick: () => {}
};

export default Button;