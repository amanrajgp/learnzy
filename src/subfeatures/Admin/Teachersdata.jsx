import React from 'react'
import teachers_data from '../../databases/teachers_database'

const Teachersdata = () => {




  return (

    
    teachers_data.map((teacher)=>{
          return (
            <div className='card'>
                <h1>{teacher.name}</h1>
                <h1>{teacher.subjects}</h1>
                <h1>{teacher.students}</h1>
                <h1>{teacher.mob_no}</h1>
                <h1>{teacher.class}</h1>
                <h1>{teacher.address}</h1>
            </div>

          )
        })
  )
}

export default Teachersdata;