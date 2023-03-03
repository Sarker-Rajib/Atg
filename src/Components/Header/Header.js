import React from 'react';
import { Container } from 'react-bootstrap';
import './Header.css';
import logo from './../../assets/images/logo.png';
import { FaSearch } from 'react-icons/fa';

const Header = () => {
    return (
        <Container>
            <div className="d-flex justify-content-between align-items-center py-3">
                <div className="flex-shrink-0">
                    <img src={logo} alt="bannerlogo" className="img-fluid" />
                </div>
                <div className="search">
                    <FaSearch />
                    <input className='w-100 ms-2 px-3 bg-transparent border-0 form-control' type="text" placeholder='Search for your favorite groups in ATG' />
                </div>
                <>
                    <a className='account' href="/">Create account. <span>It's free!</span></a>
                </>
            </div>
        </Container>
    );
};

export default Header;