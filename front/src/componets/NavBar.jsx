import React from 'react'
import '../App.css';
import {NavLink} from 'react-router-dom'
import { SocialIcon } from 'react-social-icons';


export default function NavBar() {
  return (
    <div className = " bg-red-600">
        <div className=' container mx-auto flex justify-between'>
            <nav className='flex'>
                <NavLink to='/'  className='inflex-flex items-center mt-1.5 py-6 px-3 mr-4 text-red-100 hover:text-green-800  font-bold cursive tracking-widest text-4xl'>
                    Home
                </NavLink>
                <NavLink to='/post' className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800'>
                    Blog Post
                </NavLink>
                <NavLink to='/project'  className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800'>
                    Projects
                </NavLink>
                <NavLink to = '/about'  className='inline-flex items-center py-3 px-3 my-6 rounded text-red-200 hover:text-green-800'>
                    About Me
                </NavLink>
            </nav>
            <div className=' inline-flex py-3 px-3 my-6'>
                <SocialIcon url='https://www.instagram.com/gabrysbaron/' className=' mr-4 ' target="_blank" fgColor='#ffff' style={{height: 35 , width : 35}}></SocialIcon>
                <SocialIcon url='https://www.facebook.com/profile.php?id=100008620276053' className=' mr-4' target="_blank" fgColor='#ffff' style={{height: 35 , width : 35}}></SocialIcon>
                <SocialIcon url='https://www.youtube.com/channel/UCU2KysYYEiJmqiBRpfZra_A' className=' mr-4' target="_blank" fgColor='#ffff' style={{height: 35 , width : 35}}></SocialIcon>
                <SocialIcon url='https://github.com/gabbaron105' className=' mr-4' target="_blank" fgColor='#ffff' style={{height: 35 , width : 35}}></SocialIcon>
            </div>
        </div>
    </div>
  )
}
