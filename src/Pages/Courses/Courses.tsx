import React from "react";
import Topbar from "../../components/Topbar/Topbar";

import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

import '../../components/Events/Events.css'

const columns: GridColDef[] = [
  { field: 'id', width: 90 },
  {
    field: 'firstName',
    headerName: 'First name',
    width: 150,
    editable: true,
  },
  {
    field: 'lastName',
    headerName: 'Last name',
    width: 150,
    editable: true,
  },
  {
    field: 'age',
    headerName: 'Age',
    type: 'number',
    width: 110,
    editable: true,
  },
  {
    field: 'fullName',
    headerName: 'Full name',
    description: 'This column has a value getter and is not sortable.',
    sortable: false,
    width: 160,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.firstName || ''} ${params.row.lastName || ''}`,
  },
];

const rows = [
  { id: 1, lastName: 'Snow', firstName: 'Jon', age: 14 },
  { id: 2, lastName: 'Lannister', firstName: 'Cersei', age: 31 },
  { id: 3, lastName: 'Lannister', firstName: 'Jaime', age: 31 },
  { id: 4, lastName: 'Stark', firstName: 'Arya', age: 11 },
  { id: 5, lastName: 'Targaryen', firstName: 'Daenerys', age: null },
  { id: 6, lastName: 'Melisandre', firstName: null, age: 150 },
  { id: 7, lastName: 'Clifford', firstName: 'Ferrara', age: 44 },
  { id: 8, lastName: 'Frances', firstName: 'Rossini', age: 36 },
  { id: 9, lastName: 'Roxie', firstName: 'Harvey', age: 65 },
];

export default function Courses() {
  return (
    <div className="courses mb-4">
      <Topbar />
      <div className="course-details flex items-center justify-between mt-5">
        <div className="flex flex-col gap-3">
          <button className="w-[250px] h-[80px] rounded-lg bg-gradient-to-br from-cyan from-10%  to-pink from-10% flex items-center justify-center gap-4 font-bold text-white font-quickb">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.7143 3.66069V13.8003C21.7143 16.1164 19.9194 18.0004 17.7143 18.0004H10.088L7.80229 20.4005H14.3851L17.4777 23.6478C17.6971 23.8776 17.988 24 18.2846 24C18.432 24 18.5811 23.97 18.7234 23.9082C19.152 23.7216 19.4286 23.2866 19.4286 22.7994V20.4005H21.1429C22.7183 20.4005 24 19.0547 24 17.4004V6.60016C24 5.15173 23.0166 3.9397 21.7143 3.66069Z"
                fill="#6D7992"
              />
              <path
                d="M17.7143 0H2.85714C1.28171 0 0 1.34583 0 3.00007V13.8003C0 15.4546 1.28171 16.8004 2.85714 16.8004H4.57143V19.1993C4.57143 19.6865 4.848 20.1215 5.27657 20.3081C5.41886 20.3699 5.568 20.3999 5.71543 20.3999C6.01257 20.3999 6.30286 20.2775 6.52229 20.0477L9.61486 16.8004H17.7143C19.2897 16.8004 20.5714 15.4546 20.5714 13.8003V3.00007C20.5714 1.34583 19.2897 0 17.7143 0ZM10.2857 13.2003C9.97029 13.2003 9.71429 12.9315 9.71429 12.6003C9.71429 12.2691 9.97029 12.0003 10.2857 12.0003C10.6011 12.0003 10.8571 12.2691 10.8571 12.6003C10.8571 12.9315 10.6011 13.2003 10.2857 13.2003ZM11.5286 8.66722C11.108 8.91022 10.8571 9.31043 10.8571 9.73824V10.2003C10.8571 10.5315 10.6017 10.8003 10.2857 10.8003C9.96971 10.8003 9.71429 10.5315 9.71429 10.2003V9.73824C9.71429 8.86642 10.1857 8.0732 10.976 7.61659C11.5389 7.28958 11.8211 6.61517 11.6771 5.93955C11.5606 5.40494 11.1389 4.96152 10.6274 4.83912C10.2223 4.74132 9.81543 4.82052 9.48286 5.06053C9.15257 5.29873 8.93086 5.67254 8.87486 6.08535C8.82971 6.41296 8.54743 6.64277 8.22743 6.59416C7.91543 6.54676 7.69829 6.24316 7.74286 5.91495C7.84514 5.17093 8.24286 4.49891 8.83543 4.0717C9.43429 3.64029 10.1623 3.49869 10.8811 3.66909C11.8257 3.8959 12.576 4.68312 12.7914 5.67494C13.0486 6.87737 12.5411 8.0786 11.5286 8.66722Z"
                fill="#6D7992"
              />
            </svg>
            Add new course
          </button>
          <div className="w-[250px] h-[150px] rounded-lg bg-gradient-to-br from-cyan from-10%  to-pink from-10% flex flex-col justify-center items-center gap-4 font-bold text-white font-quickb">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M21.7143 3.66069V13.8003C21.7143 16.1164 19.9194 18.0004 17.7143 18.0004H10.088L7.80229 20.4005H14.3851L17.4777 23.6478C17.6971 23.8776 17.988 24 18.2846 24C18.432 24 18.5811 23.97 18.7234 23.9082C19.152 23.7216 19.4286 23.2866 19.4286 22.7994V20.4005H21.1429C22.7183 20.4005 24 19.0547 24 17.4004V6.60016C24 5.15173 23.0166 3.9397 21.7143 3.66069Z"
                fill="#6D7992"
              />
              <path
                d="M17.7143 0H2.85714C1.28171 0 0 1.34583 0 3.00007V13.8003C0 15.4546 1.28171 16.8004 2.85714 16.8004H4.57143V19.1993C4.57143 19.6865 4.848 20.1215 5.27657 20.3081C5.41886 20.3699 5.568 20.3999 5.71543 20.3999C6.01257 20.3999 6.30286 20.2775 6.52229 20.0477L9.61486 16.8004H17.7143C19.2897 16.8004 20.5714 15.4546 20.5714 13.8003V3.00007C20.5714 1.34583 19.2897 0 17.7143 0ZM10.2857 13.2003C9.97029 13.2003 9.71429 12.9315 9.71429 12.6003C9.71429 12.2691 9.97029 12.0003 10.2857 12.0003C10.6011 12.0003 10.8571 12.2691 10.8571 12.6003C10.8571 12.9315 10.6011 13.2003 10.2857 13.2003ZM11.5286 8.66722C11.108 8.91022 10.8571 9.31043 10.8571 9.73824V10.2003C10.8571 10.5315 10.6017 10.8003 10.2857 10.8003C9.96971 10.8003 9.71429 10.5315 9.71429 10.2003V9.73824C9.71429 8.86642 10.1857 8.0732 10.976 7.61659C11.5389 7.28958 11.8211 6.61517 11.6771 5.93955C11.5606 5.40494 11.1389 4.96152 10.6274 4.83912C10.2223 4.74132 9.81543 4.82052 9.48286 5.06053C9.15257 5.29873 8.93086 5.67254 8.87486 6.08535C8.82971 6.41296 8.54743 6.64277 8.22743 6.59416C7.91543 6.54676 7.69829 6.24316 7.74286 5.91495C7.84514 5.17093 8.24286 4.49891 8.83543 4.0717C9.43429 3.64029 10.1623 3.49869 10.8811 3.66909C11.8257 3.8959 12.576 4.68312 12.7914 5.67494C13.0486 6.87737 12.5411 8.0786 11.5286 8.66722Z"
                fill="#6D7992"
              />
            </svg>
            <h1>86 Courses</h1>
          </div>
        </div>
        <div className="w-[250px] h-[250px] border-solid border-1 border-cyan rounded-lg text-white font-quickb font-bold flex flex-col items-center justify-around">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <h1>213 hr</h1>
              <svg
                width="36"
                height="24"
                viewBox="0 0 36 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34 4.72721L23.8182 11.9999L34 19.2727V4.72721Z"
                  stroke="url(#paint0_linear_494_115)"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.9091 1.81812H4.90909C3.30244 1.81812 2 3.12056 2 4.72721V19.2727C2 20.8793 3.30244 22.1818 4.90909 22.1818H20.9091C22.5157 22.1818 23.8182 20.8793 23.8182 19.2727V4.72721C23.8182 3.12056 22.5157 1.81812 20.9091 1.81812Z"
                  stroke="url(#paint1_linear_494_115)"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_494_115"
                    x1="2"
                    y1="1.81812"
                    x2="35.158"
                    y2="20.0792"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.411458" stop-color="#007997" />
                    <stop offset="0.713542" stop-color="#63638E" />
                    <stop offset="0.875" stop-color="#A75489" />
                    <stop offset="1" stop-color="#FF4081" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_494_115"
                    x1="2"
                    y1="1.81812"
                    x2="35.158"
                    y2="20.0792"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.411458" stop-color="#007997" />
                    <stop offset="0.713542" stop-color="#63638E" />
                    <stop offset="0.875" stop-color="#A75489" />
                    <stop offset="1" stop-color="#FF4081" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h1>video uploaded</h1>
          </div>
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-3">
              <h1>16</h1>
              <svg
                width="36"
                height="24"
                viewBox="0 0 36 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M34 4.72721L23.8182 11.9999L34 19.2727V4.72721Z"
                  stroke="url(#paint0_linear_494_115)"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M20.9091 1.81812H4.90909C3.30244 1.81812 2 3.12056 2 4.72721V19.2727C2 20.8793 3.30244 22.1818 4.90909 22.1818H20.9091C22.5157 22.1818 23.8182 20.8793 23.8182 19.2727V4.72721C23.8182 3.12056 22.5157 1.81812 20.9091 1.81812Z"
                  stroke="url(#paint1_linear_494_115)"
                  stroke-width="3"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_494_115"
                    x1="2"
                    y1="1.81812"
                    x2="35.158"
                    y2="20.0792"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.411458" stop-color="#007997" />
                    <stop offset="0.713542" stop-color="#63638E" />
                    <stop offset="0.875" stop-color="#A75489" />
                    <stop offset="1" stop-color="#FF4081" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_494_115"
                    x1="2"
                    y1="1.81812"
                    x2="35.158"
                    y2="20.0792"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0.411458" stop-color="#007997" />
                    <stop offset="0.713542" stop-color="#63638E" />
                    <stop offset="0.875" stop-color="#A75489" />
                    <stop offset="1" stop-color="#FF4081" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <h1>Articles uploaded</h1>
          </div>
        </div>
        <div className="relative">
          <img className="h-[250px]" src="./public/images/UX-design-course 1.png" alt="" />
          <div className="top absolute	top-0 h-[40px] flex items-center justify-center rounded-t-lg bg-icon w-[100%] bg-opacity-60">
            <h1 className="opacity-100 font-quickb font bold text-white">YOUR TOP COURSE</h1>
          </div>
          <div className="top absolute	bottom-0 h-[80px] flex flex-col gap-2 items-center justify-center rounded-b-lg bg-icon w-[100%] bg-opacity-60">
            <h1 className="opacity-100 font-quickb font bold text-white">Title of course</h1>
            <h1 className="text-white font-quickb ">982 <span className="font-quickr">Like</span> 1003 <span className="font-quickr">View</span></h1>
          </div>
        </div>
      </div>
      <div className="corses mt-5">
      <div className='h-[1px] bg-gradient-to-br from-pink   to-cyan'></div>
        <h1 className="my-4 text-white font-quickb font-bold text-lg">Courses</h1>
        <Box sx={{ height: 400, borderColor: 'green' }}>
      <DataGrid
      style={{borderColor: '#FF4081'}}
        rows={rows}
        columns={columns}
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 5,
            },
          },
        }}
        pageSizeOptions={[5]}
        checkboxSelection
        disableRowSelectionOnClick
        className='w-[300px] sm:w-[500px] md:w-[700px] lg:w-[100%] text-white rounded-lg'
      />
    </Box>
      </div>
    </div>
  );
}
