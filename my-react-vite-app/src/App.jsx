import React, { useState } from 'react';
import { BrowserRouter as Router, Routes , Route } from 'react-router-dom';
import PharmacyDashboard from './components/Pharmacy/pharmacyDashboard';
import Dashboard from './components/dashboard';

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
      </Routes>
    </Router>
  );
};

export default App;
