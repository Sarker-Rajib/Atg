import React, { useState } from 'react';
import BlogPost from '../../Components/BlogPosts/BlogPost';
import Header from '../../Components/Header/Header';
import HomeBanner from '../../Components/HomeBanner/HomeBanner';

const Home = () => {
    const [show2, setShow2] = useState(false);
    const [show, setShow] = useState(false);
    const props = {
        show2, setShow2, show, setShow
    }

    return (
        <>
            <Header props={props} />
            <HomeBanner props={props} />
            <BlogPost />
        </>
    );
};

export default Home;