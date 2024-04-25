import React from 'react';
import preloader from '../../../assets/images/Spinner-1s-200px.svg';

const Preloader = () => {
    return (
        <div style={{
            width: '100px',
            height: '100px',
            position: 'absolute',
            left: '50%',
            bottom: '50%',
        }}><img src={preloader} alt="loeader"/></div>
    );
};

export default Preloader;