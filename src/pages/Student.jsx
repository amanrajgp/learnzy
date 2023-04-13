import React,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import axios from "axios";
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';

const Student = (props) => {
  const navigate=useNavigate();
  
  const [student,setStudent]=useState(null);


  useEffect(() => {
    axios.get("http://localhost:3001/Student").then(function(response){
      console.log("incoming data at /Student:", response.data);
      if(response.data != false){
        setStudent(response.data);
      } else {
        navigate("/");
      } 
    })
  }, []);
  
  

  
        
        
      
    
    

         
        
        if (!student) { // wait for the state variable to be updated
          return <div>Loading...</div>;
        }
        
  
  
  
  
  return (

    <div>

      <Navbar name={student.name} greeting="hello"/>
            
         
          
      
      
        
      
      {/* <h1>{student.Name}</h1> */}
      <h1>{student.roll_no}</h1>
      <h1>{student.class}</h1>
      <h1>{student.section}</h1>
      <h1>{student.parent}</h1>
      <h1>{student.subjects}</h1>
      <h1>{student.teachers}</h1>
      <h1>{student.dob}</h1>
      <h1>{student.address}</h1>
      {/* <h1>{student.Parent_Name[0] +" "+ student.Parent_Name[1]}</h1> */}
      <h1>{student.mob_no}</h1>

      <Link to="/Assignment"><button>Assignments</button></Link>
      <Link to="/Checkyourdetail"><button>Check your details</button></Link>
      <Link to="/Lecture"><button>Lecture</button></Link>
      {/* <button name="logout" href="/Student">Logout</button> */}
    </div>
  )
}

export default Student;







