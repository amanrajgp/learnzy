import React from "react";
import Reactdom from  "react-dom/client";
import App from "./App";
import Parent from "./pages/Parent";
import Student from "./pages/Student";
import Teacher from "./pages/Teacher";
import Tutor from "./pages/Tutor";
import Login from "./pages/Login";
import axios from "axios";
import {
  createBrowserRouter,
  Link,
  RouterProvider,
} from "react-router-dom";
import Check_details from "./subfeatures/Parent/Check_details";
import Contact_teacher from "./subfeatures/Parent/Contact_teacher";
import Select_tutors from "./subfeatures/Parent/Select_tutors";
import Assignment from "./subfeatures/Student/Assignment";
import Check_your_detail from "./subfeatures/Student/Check_your_detail";
import Lecture from "./subfeatures/Student/Lecture";
import Studentslist from "./subfeatures/Teacher/Studentslist";
import Takeclass from "./subfeatures/Teacher/Takeclass";
import Register from "./subfeatures/Tutor/Register";
import Assignments from "./subfeatures/Teacher/Assignments";
import Studentsdata from "./subfeatures/Admin/Studentsdata";
import Parentsdata from "./subfeatures/Admin/Parentsdata";
import Teachersdata from "./subfeatures/Admin/Teachersdata";
import Admin from "./pages/Admin";





const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
  },
  {
    path: "Student",
    element: <Student/>,
  },
  {
    path: "StudentLogin",
    element: <Login category="Student"/>,
  },
  {
    path: "Parent",
    element: <Parent/>,
  },
  
  {
    path: "Teacher",
    element: <Teacher/>,
  },
  {
    path: "Admin",
    element: <Admin/>,
  },
  {
    path: "ParentLogin",
    element: <Login category="Parent"/>,
  },
  
  {
    path: "TeacherLogin",
    element: <Login category="Teacher"/>,
  },
  {
    path: "AdminLogin",
    element: <Login category="Admin"/>,
  },
  // {
  //   path: "Checkdetails",
  //   element: <Check_details/>,
  // },
  // {
  //   path: "Contactteacher",
  //   element: <Contact_teacher/>,
  // },
  // {
  //   path: "Selecttutors",
  //   element: <Select_tutors/>,
  // },
  // {
  //   path: "Assignment",
  //   element: <Assignment/>,
  // },
  // {
  //   path: "Checkyourdetail",
  //   element: <Check_your_detail/>,
  // },
  // {
  //   path: "Lecture",
  //   element: <Lecture/>,
  // },
  // {
  //   path: "Assignments",
  //   element: <Assignments/>,
  // },
  // {
  //   path: "Studentslist",
  //   element: <Studentslist/>,
  // },
  // {
  //   path: "Takeclass",
  //   element: <Takeclass/>,
  // },
  // {
  //   path: "Register",
  //   element: <Register/>,
  // }
  ,{
    path:"Studentsdata",
    element:<Studentsdata/>
  },{
    path:"Teachersdata",
    element:<Teachersdata/>
  },
  {
    path:"Parentsdata",
    element:<Parentsdata/>
  }
]);

const root=Reactdom.createRoot(document.getElementById("root"));
root.render(
  <RouterProvider router={router}/>
);

