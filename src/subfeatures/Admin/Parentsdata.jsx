import React from "react";
import parents_data from "../../databases/parent_database";

const Parentsdata = () => {




    return (
  
      
      
  
          parents_data.map((parent)=>{

            return (
            <div className="card">
              
                  <h1>Name:{parent.name}</h1>
                  <h1>Mob_No.:{parent.mob_no}</h1>
                  <h1>Child Name:{parent.child_name}</h1>
                  <h1>Address:{parent.address}</h1>
             
              </div>
            )
          }))
        
     
  }
  
  export default Parentsdata;