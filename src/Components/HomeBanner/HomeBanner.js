import React from 'react';
import { Container } from 'react-bootstrap';
import './HomeBanner.css';
import nav from './../../assets/images/nav.png'

const HomeBanner = ({ props }) => {
    const { setShow2, setShow } = props;

    return (
        <div className='banner'>
            <div className="d-flex d-xl-none justify-content-between mobile-nav">
                <button className='btn'><img src={nav} alt="" /></button>
                <button className='btn joinBtn' onClick={() => setShow(true)}>Join Now</button>
            </div>
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