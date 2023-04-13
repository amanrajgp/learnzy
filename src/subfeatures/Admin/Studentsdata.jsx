import React from 'react'
import students_data from '../../databases/student_database'

const Studentsdata = () => {




  return (

    
    

        students_data.map((student)=>{
          return (

            <div className='card'>
                <h1>{student.name}</h1>
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
            </div>
          )
        })
      
   
  )
}

export default Studentsdata
