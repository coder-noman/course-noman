import React from 'react';
import './header.css'

const Header = () => {
    return (
        <div className=" header">
            <h1 className="text-center text-white pt-5 fw-bold">Start learning from </h1>
            <h1 className="text-danger text-center"> the Bangladesh best institutions</h1>
            <p className="text-white text-center pb-1 pt-2">Propel your career, get a degree, or expand your knowledge at any level.</p>
            <h4 className="text-center text-white pb-5 fw-bold">Total Budget: 10000$</h4>
        </div>
    );
};

export default Header;