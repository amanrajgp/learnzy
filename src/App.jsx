import React,{useState,useEffect} from 'react';

import axios from 'axios';
import api from './api';
import Card from "./components/Navbar/Navbar";
import { Link } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';







function App(){



    return (
        <div>
            <Navbar greeting=""/>
            <Link to="/AdminLogin"><button  value="Admin">Login as Admin</button></Link>
            <Link to="/ParentLogin"><button  value="Parent">Login as Parent</button></Link>
            <Link to="/StudentLogin"><button  value="Student">Login as Student</button></Link>
            <Link to="/TeacherLogin"><button  value="Teacher">Login as Teacher</button></Link>
            {/* <Link to="/TutorLogin"><button  value="Tutor">Login as Tutor</button></Link> */}
           
           
            
            
            
        </div>

        

        
    )
       

}

export default App ;

  
