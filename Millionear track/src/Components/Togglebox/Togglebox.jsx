import React from 'react'
import { NavLink } from 'react-router-dom'

function Togglebox() {
  return (
    <>
      <div className=' w-200'>
        <ul>
            <li>
                 <NavLink to="/Home"
                      className={({isActive})=>
                      isActive ? " text-orange-500 " : " text-black"
                    }>Home</NavLink>
            </li>
            <li>
                  <NavLink  to="/about"
                     className={({isActive})=>
                     isActive ?" text-orange-500":" text-black"
                    }>About</NavLink>
            </li>
            <li>
                 <NavLink  to="/Courses"
                     className={({isActive})=>
                     isActive ?" text-orange-500":" text-black"
                    }>Courses</NavLink>
            </li>
            <li>
                  <NavLink  to="/Contact"
                     className={({isActive})=>
                     isActive ?" text-orange-500":" text-black"
                    }>Contact</NavLink>
            </li>
            <li>
                  <NavLink  to="/contact2"
                     className={({isActive})=>
                     isActive ? " text-orange-500":" text-black"
                    }>Contact2</NavLink>
            </li>
        </ul>
      </div>
    </>
  )
}

export default Togglebox