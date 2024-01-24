import React from 'react';
import Routes from '../routes';
import Sidebar from './Sidebar';
import Nav from '../component/Nav';

function Layout (props){
  return (
    <div style={{display:"flex"}}>
       <Sidebar />
      <div>
       <Nav />
        <Routes />
      </div>
    </div>
  );
}

export default Layout;
