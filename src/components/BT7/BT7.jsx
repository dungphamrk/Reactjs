import React from 'react';
import Header from './Header';
import Menu from './Menu';
import Main from './Main';
import Footer from './Footer';

const AdminIndex = () => {
    return (
        <>
        <h1>BT7</h1>
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '10vh' }}>
            <Header />
            <div style={{ display: 'flex' }}>
                <Menu />
                <Main />
            </div>
            <Footer />
        </div>
        </>
    );
}

export default AdminIndex;
