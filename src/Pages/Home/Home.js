import React from 'react';
import BlogPost from '../../Components/BlogPosts/BlogPost';
import Header from '../../Components/Header/Header';
import HomeBanner from '../../Components/HomeBanner/HomeBanner';

const Home = () => {
    return (
        <>
            <Header />
            <HomeBanner />
            <BlogPost />
        </>
    );
};

export default Home;