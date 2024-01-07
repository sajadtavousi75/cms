import React from 'react'

export default function TopCourses() {
  return (
    <div className='topCourses my-5 '>
        <div className='h-[1px] bg-gradient-to-br from-pink   to-cyan'></div>
        <div className="links  font-quickb mt-4 w-[250px] flex items-center justify-between">
            <a className='text-white' href="">Your Top Courses</a>
            <a className='text-white' href="">Most Viewed</a>
        </div>

        <div className="boxes my-4 flex">
          <div className="box">
            <img src="./public/images/UX-design-course 1.png" alt="" />
            <h1 className="title font-quickb font-bold mt-3 ml-2 text-white">Title Of Courses</h1>
            <p className='font-quickr mt-3 ml-2 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eum perferendis necessitatibus nam? Eveniet tenetur natus nam modi, autem explicabo!</p>
          </div>
          <div className="box">
            <img src="./public/images/UX-design-course 1.png" alt="" />
            <h1 className="title font-quickb font-bold mt-3 ml-2 text-white">Title Of Courses</h1>
            <p className='font-quickr mt-3 ml-2 text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab eum perferendis necessitatibus nam? Eveniet tenetur natus nam modi, autem explicabo!</p>
          </div>
        </div>
        <div className='h-[1px] bg-gradient-to-br from-pink   to-cyan'></div>
    </div>
  )
}
