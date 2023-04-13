import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const Parent = (props) => {
  const navigate=useNavigate();
  
  const [parent,setParent]=useState(null);


  useEffect(() => {
    axios.get("http://localhost:3001/Parent").then(function(response){
      console.log("incoming data at /parent:", response.data);
      if(response.data != false){
        setParent(response.data);
      } else {
        navigate("/");
      } 
    })
  }, []);
  
  

  
        
        
      
    
    

         
        
        if (!parent) { // wait for the state variable to be updated
          return <div>Loading...</div>;
        }
        
  
  
  
  
  return (

    <div>

      <Navbar name={parent.name} greeting="hello"/>
            
         

      <h1>{parent.Mob_no}</h1>
      <h1>{parent.child_name}</h1>
      <h1>{parent.address}</h1>

      <Link to="/Contactteacher"><button>Contact Teacher</button></Link>
      <Link to="/Checkdetails"><button>Check Student details</button></Link>
      <Link to="/Selecttutors"><button>Select tutors</button></Link>
    </div>
  )
}

export default Parent;