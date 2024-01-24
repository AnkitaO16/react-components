// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Dashboard from './pages/Dashboard';
// import Page01 from './pages/Page01';
// import Page02 from './pages/Page02';
// import Page03 from './pages/Page03';
// import NotFound from './pages/NotFound';
// import Layout from './component/Layout';

// function AppRoutes() {
//     return (
//         <Router>
//             <Routes render={(props)=>(
//             <Layout {...props}>
//                 <Route path="/" element={<Dashboard />} />
//                 <Route path="/page01" element={<Page01 />} />
//                 <Route path="/page02" element={<Page02 />} />
//                 <Route path="/page03" element={<Page03 />} />
//                 <Route path="*" element={<NotFound />} />
//                 </Layout>
//                 )}>
//             </Routes>
//         </Router>
//     );
// }
// export default AppRoutes;


import React from 'react';
import {  Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import Page01 from './pages/Page01';
import Page02 from './pages/Page02';
import Page03 from './pages/Page03';
import NotFound from './pages/NotFound';
import Layout from './component/Layout';

function AppRoutes() {
  return (
    <>
      <Routes render={(props)=>(
        <Layout {...props}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/page01" element={<Page01 />} />
          <Route path="/page02" element={<Page02 />} />
          <Route path="/page03" element={<Page03 />} />
          <Route path="*" element={<NotFound />} />
        </Layout>
      )}>
      </Routes>
    </>
  );
}

export default AppRoutes;
