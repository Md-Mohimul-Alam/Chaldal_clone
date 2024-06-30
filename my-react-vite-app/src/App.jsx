import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PharmacyDashboard from './components/Pharmacy/pharmacyDashboard';
import Dashboard from './components/dashboard';
import CooksDash from './components/cookups/dash_Cook';
import Offers from './components/Path/Offers'; 
import Offers2 from './components/Path/Offers2'; 

import Egg from './components/Path/egg'; 
import Egg2 from './components/Path/egg2'; 

import DealG from './components/Path/Deal_G'; 
import DealP from './components/Path/Deal_P'; 

import Favp from './components/Path/Fav_P'; 
import Favg from './components/Path/Fav_G'; 

import Recipe from './components/Recipes'; 




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
        <Route path="/Offers2" element={<Offers2 />} />

        <Route path="/egg" element={<Egg />} />
        <Route path="/egg2" element={<Egg2 />} />

        <Route path="/Deal_G" element={<DealG />} />
        <Route path="/Deal_P" element={<DealP />} />

        <Route path="/Fav_P" element={<Favp />} />
        <Route path="/Fav_G" element={<Favg />} />

        <Route path="/Recipes" element={<Recipe />} />



      </Routes>
    </Router>
  );
};

export default App;
