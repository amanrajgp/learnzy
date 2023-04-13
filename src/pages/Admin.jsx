import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const Admin = (props) => {
  const navigate=useNavigate();
  
  const [admin,setadmin]=useState(null);


  useEffect(() => {
    axios.get("http://localhost:3001/Admin").then(function(response){
      console.log("incoming data at /admin:", response.data);
      if(response.data != false){
        setadmin(response.data);
      } else {
        navigate("/");
      } 
    })
  }, []);
  
  

  
        
        
      
    
    

         
        
        if (!admin) { // wait for the state variable to be updated
          return <div>Loading...</div>;
        }

        return (
            <div>
                <Navbar name={admin.name} greeting="hello"/>
                <Link to="/Studentsdata"><button>Get Students details</button></Link>
                <Link to="/Teachersdata"><button>Get Teachers details</button></Link>
                <Link to="/Parentsdata"><button>Get Parents details</button></Link>
                
        
              
            </div>
          )

        }
export default Admin;
