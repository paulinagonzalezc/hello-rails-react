import React from 'react';
import {Routes, Route, BrowserRouter as Router} from 'react-router-dom';
import Greeting from './Greeting';

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Greeting />} />
      </Routes>
    </Router>
  );
}
export default App;
