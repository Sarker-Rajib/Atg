import React from 'react';
import { Container } from 'react-bootstrap';
import './HomeBanner.css';

const HomeBanner = () => {
    return (
        <div className='banner'>
            <Container>
                <div className="content">
                    <h2>Computer Engineering</h2>
                    <p>142,765 Computer Engineers follow this</p>
                </div>
            </Container>
        </div>
    );
};

export default HomeBanner;