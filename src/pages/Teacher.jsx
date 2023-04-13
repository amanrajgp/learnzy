import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const Teacher = (props) => {
  const navigate=useNavigate();
  
  const [teacher,setTeacher]=useState(null);


  useEffect(() => {
    axios.get("http://localhost:3001/Teacher").then(function(response){
      console.log("incoming data at /teacher:", response.data);
      if(response.data != false){
        setTeacher(response.data);
      } else {
        navigate("/");
      } 
    })
  }, []);
  
  

  
        
        
      
    
    

         
        
        if (!teacher) { // wait for the state variable to be updated
          return <div>Loading...</div>;
        }
        
  
  
  
  
  return (

    <div>

      <Navbar name={teacher.name} greeting="hello"/>
            
         

      <h1>{teacher.subjects}</h1>
      <h1>{teacher.students}</h1>
      <h1>{teacher.mob_no}</h1>
      <h1>{teacher.class}</h1>
      <h1>{teacher.address}</h1>

      <Link to="/Assignments"><button>Assignments</button></Link>
      <Link to="/Studentslist"><button>Students list</button></Link>
      <Link to="/takeclass"><button>Take class</button></Link>
    </div>
  )
}

export default Teacher;