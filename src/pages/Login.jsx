import React,{useState,useEffect} from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';



const Login = (props) => {
    const [username,setusername]=useState("");
    const [password,setpassword]=useState("");
    const navigate=useNavigate();
    
    

    
    
    
    
        
    
        
    


    

    async function Handlepost(e){



        e.preventDefault();

        
       
        await axios.post("http://localhost:3001/"+props.category+"Login",{
        username:username,
        password:password}).then(await axios.get("http://localhost:3001/"+props.category+"Login").then(function(response){

        
        console.log("incomin data at StudentLogin:",response.data);
        if(response.data===true){
            
           
           navigate("/"+props.category);
           
            
            
        }else{
            // alert(props.category+" "+ response.data)
            
            navigate("/");
            
            

        } 
        
        
        
        })

    )
    

        

        
        
        

        

        
        
        
        

        
        
    }

    

    
    return (
        
        <div>
            <form>
                    <label>Login as {props.category}</label>
                    <input type="text" placeholder='username' onChange={(e)=>{setusername(e.target.value)}} value={username}  />
                    <input type="text" placeholder='Password' onChange={(e)=>{setpassword(e.target.value)}} value={password} />
                    <button type='submit' onClick={Handlepost} className='login_btn' >Login</button>
                   
            </form>
            
            
            
        
        </div>
    )
}

export default Login
