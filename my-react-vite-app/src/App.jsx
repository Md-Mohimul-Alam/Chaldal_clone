import React, { useState } from 'react';
import Dashboard from './components/dashboard';



const App = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Dashboard isOpen={isOpen} toggleSidebar={toggleSidebar} />
    </>
  );
};

export default App;
