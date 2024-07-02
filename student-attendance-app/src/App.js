import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import Attendance from './Customer/Attendance';
import "font-awesome/css/font-awesome.min.css";
import StudentAttendence from './Admin/StudentAttendence';
import UpdateAttendance from './Admin/UpdateAttendance';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
            {/* customer side */}
          <Route path='/' element={<Attendance/>}/>
          {/* admin side */}
          <Route path='/admin-login/studentattendence' element={<StudentAttendence/>} />
          <Route path='/admin-login/updateattendence/:id' element={<UpdateAttendance/>} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
