import React from "react";
import Header_ph from './Header_ph';
import './css/dash_phr.css';

import { useNavigate } from 'react-router-dom';

const pharmacyDashboard = () =>{
    const navigate = useNavigate();

    return(
        <div className="body">
            <Header_ph />
        </div>

    );
};

export default pharmacyDashboard;
