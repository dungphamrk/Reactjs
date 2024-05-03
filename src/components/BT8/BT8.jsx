import React from 'react';
import Header from './Header';
import Menu from './Menu';
import Navbar from './Navbar';
import Main from './Main';
import Article from './Article'
import Footer from './Footer';

const AdminIndex = () => {
    return (
        <>
        <h1>BT7</h1>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '10vh', color:'violet' }}>
            <Header />
            <Navbar></Navbar>
            <div style={{ display: 'flex' }}>
                <Menu />
                <Main />
                <Article></Article>
            </div>
            <Footer />
        </div>
        </>
    );
}

export default AdminIndex;
