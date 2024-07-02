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
import Recipep from './components/Recipes_P'; 
import Helpg from './components/Path/Help_G';
import Helpp from './components/Path/Help_P';
import FaqG from './components/Path/help_F_faq';
import FaqP from './components/Path/help_P_faq';
import TeamG from './components/Path/help_F_team';
import TeamP from './components/Path/help_P_team';


const App = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <Router>

        <Routes>
          <Route path="/" element={<Dashboard isOpen={isOpen} toggleSidebar={toggleSidebar} openModal={openModal} />} />
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
          <Route path="/Recipes_P" element={<Recipep />} />
          <Route path="/Help_G" element={<Helpg />} />
          <Route path="/Help_P" element={<Helpp />} />
          <Route path="/help_F_faq" element={<FaqG />} />
          <Route path="/help_P_faq" element={<FaqP />} />
          <Route path="/help_F_team" element={<TeamG />} />
          <Route path="/help_P_team" element={<TeamP />} />
        </Routes>

    </Router>
  );
};

export default App;
