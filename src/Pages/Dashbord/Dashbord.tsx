import React from 'react'
import Topbar from '../../components/Topbar/Topbar'
import Charts from '../../components/Charts/Charts'
import Events from '../../components/Events/Events'
import TopCourses from '../../components/TopCourses/TopCourses'

export default function Dashbord() {
  return (
    <div className=''>
        <Topbar />
        <Charts />
        <Events />
        <TopCourses />
    </div>
  )
}
