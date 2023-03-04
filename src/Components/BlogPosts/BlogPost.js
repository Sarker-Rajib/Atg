import React, { useState } from 'react';
import './Blogpost.css';
import { Container } from 'react-bootstrap';
import { FaCaretDown } from 'react-icons/fa';
import addp from './../../assets/images/addg.png';
import im1 from './../../assets/images/1im3.png';
import im2 from './../../assets/images/2im1.png';
import im3 from './../../assets/images/3im.png';
import av1 from './../../assets/images/av1.png';
import av2 from './../../assets/images/av2.png';
import av3 from './../../assets/images/av3.png';
import av4 from './../../assets/images/av4.png';
import PostCard from './PostCard/PostCard';


const blogData = [
    {
        image: im1,
        type: "✍️ Article",
        heading: "What if famous brands had regular fonts? Meet RegulaBrands!",
        details: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
        writer: "Sarthak Kamra",
        avatar: av1,
        view: "1.4"
    },
    {
        image: im2,
        type: "🔬️ Education",
        heading: "Tax Benefits for Investment under National Pension Scheme launched by Government",
        details: "I’ve worked in UX for the better part of a decade. From now on, I plan to rei…",
        writer: "Sarah West",
        avatar: av2,
        view: "1.4"
    },
    {
        image: im3,
        type: "🗓️ Meetup",
        heading: "Finance & Investment Elite Social Mixer @Lujiazui",
        writer: "Ronal Jones",
        avatar: av3,
        view: "1.4",
        date: "Fri, 12 Oct, 2018",
        location: "Ahmedabad, India",
        website: "https://rajib-sarker-portfolio.netlify.app/"
    },
    {
        type: "💼️ Job",
        heading: "Software Developer",
        writer: "Joseph Gray",
        avatar: av4,
        view: "1.4",
        company: "Innovaccer Analytics Private Ltd.",
        location: "Noida, India",
        job: "https://rajib-sarker-portfolio.netlify.app/"
    },
]


const BlogPost = () => {
    const [data, setdata] = useState(blogData);

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
                <div className="d-flex contents">
                    <div className="cards">
                        {
                            data?.map((item, i) => <PostCard key={i} data={item} />)
                        }
                    </div>
                    <div className="search-opt"></div>
                </div>
            </Container>
        </div>
    );
};

export default BlogPost;