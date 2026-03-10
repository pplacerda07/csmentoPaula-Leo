import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import OurStory from '../components/OurStory';
import EventDetails from '../components/EventDetails';
import Gallery from '../components/Gallery';
import Registry from '../components/Registry';
import RSVP from '../components/RSVP';
import Footer from '../components/Footer';

const Home = () => {
    return (
        <div className="home-page">
            <Header />
            <Hero />
            <OurStory />
            <Gallery />
            <EventDetails />
            <Registry />
            <RSVP />
            <Footer />
        </div>
    );
};

export default Home;
