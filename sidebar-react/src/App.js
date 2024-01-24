import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Layout from './component/Layout';

function App() {
  return (
    <Router>
      <div>
        <Layout />
      </div>
    </Router>
  );
}

export default App;
