import React from 'react';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';
import './layout.css';

const Layout = (props) => {
    return (
        <div className = 'layout'>
            <Header />
                {props.children}
            <Footer />
        </div>
    )
}

export default Layout;