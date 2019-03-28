import React from 'react';
import PropTypes from 'prop-types';

import './image.css';

const Image = ({ src, descriprion }) => (
    <div className="panel">
        <div className="container">
            <img className="image" src={src} alt={descriprion}/>
        </div>
    </div>
);

Image.propTypes = {
    src: PropTypes.string,
    description: PropTypes.string
};

Image.defaulProps = {
    src: '',
    description: "user image input"
};

export default Image;