import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import './Layout.scss';

const Layout = ({ children }) => {
  return (
    <div className="container">
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
