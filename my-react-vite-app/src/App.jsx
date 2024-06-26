import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PharmacyDashboard from './components/Pharmacy/pharmacyDashboard';
import Dashboard from './components/dashboard';
import CooksDash from './components/cookups/dash_Cook';
import Offers from './components/Path/Offers'; 
import Egg from './components/Path/egg'; 

const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Dashboard isOpen={isOpen} toggleSidebar={toggleSidebar} />} />
        <Route path="/Pharmacy/pharmacyDashboard" element={<PharmacyDashboard />} />
        <Route path="/cookups/dash_Cook" element={<CooksDash />} />
        <Route path="/Offers" element={<Offers />} />
        <Route path="/egg" element={<Egg />} />
      </Routes>
    </Router>
  );
};

export default App;
