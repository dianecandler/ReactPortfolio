import React from 'react';
import Navbar from './comp/Navbar';
import Wrapper from './comp/Wrapper';
import Footer from './comp/Footer';
import AOS from 'aos';

export default function Home() {

    AOS.init();

    return (
        <>
        <Navbar />
        <Wrapper />
        <Footer />
        </>
    )
}
