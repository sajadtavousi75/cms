import React from "react"
import Courses from "./Pages/Courses/Courses"
import Dashbord from "./Pages/Dashbord/Dashbord"

const routes=[
    {path: '/' , element: <Dashbord />},
    {path: '/courses' , element: <Courses />},

]


export default routes