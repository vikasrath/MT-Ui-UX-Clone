import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements,Navigate  } from 'react-router-dom'
import Layout from './Layout'
 import Home from './Components/Home/Home.jsx'
import About from './Components/About/About.jsx'
import Courses from './Components/Courses/Courses.jsx'
import Contact from './Components/Contact/Contact.jsx'
import Contact2 from './Components/Contact/Contact2.jsx'
// import Login from './Components/Login/Login.jsx'


 const route=createBrowserRouter(
  createRoutesFromElements(

    <Route path='/' element={<Layout/>}>
     <Route index element={<Navigate to='home' />} />
      <Route path='Home' element={<Home/>}/>
      <Route path='about' element={<About/>}/> 
      <Route path='Courses' element={<Courses/>}/>
      <Route path='Contact' element={<Contact/>}/>
      <Route path='contact2' element={<Contact2/>}/>
      {/* <Route path='Login' element={<Login/>}/> */}
    </Route>
  )
 )


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={route}/>
  </React.StrictMode>,
)
