import React from 'react';
import './Blogpost.css';
import { Container } from 'react-bootstrap';
import { FaCaretDown } from 'react-icons/fa';
import addp from './../../assets/images/addg.png'


const BlogPost = () => {
    return (
        <div className='mt-5 blog'>
            <Container>
                <div className="d-flex align-items-center justify-content-between">
                    <ul className='d-flex ps-0'>
                        <li><a className='active' href="/">All Posts (32)</a></li>
                        <li><a href="/">Article </a></li>
                        <li><a href="/">Event </a></li>
                        <li><a href="/">Education </a></li>
                        <li><a href="/">Job </a></li>
                    </ul>
                    <div>
                        <button className='write-btn'>Write a Post <FaCaretDown /></button>
                        <button className='join-btn'><img src={addp} alt="prople" className="img-fluid" /> Join Group</button>
                    </div>
                </div>
                <hr className='mb-4 mt-1' />
                <div className="d-flex">
                    <div className="cards"></div>
                </div>
            </Container>
        </div>
    );
};

export default BlogPost;