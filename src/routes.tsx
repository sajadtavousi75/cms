import React from "react"
import Courses from "./Pages/Courses/Courses"
import Dashbord from "./Pages/Dashbord/Dashbord"
import AddCourse from "./Pages/AddCourse/AddCourse"

const routes=[
    {path: '/' , element: <Dashbord />},
    {path: '/courses' , element: <Courses />},
    {path: '/addcourse' , element:<AddCourse /> },

]


export default routes