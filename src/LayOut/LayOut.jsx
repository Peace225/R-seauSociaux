import React from 'react';
import {Outlet, RouterProvider, createBrowserRouter} from 'react-router-dom';

//Pages........
import Login from '../pages/login/Login';
import Signup from '../pages/signup/Signup';
import Home from '../home/Home';
import ChatBox from '../chatbox/ChatBox';
import Profile from '../components/profile/Profile';


//Components........
import Nav from '../components/nav/Nav';
import LeftBar from '../components/leftbar/LeftBar';
import RightBar from '../components/rightbar/RightBar';

export default function Layout() {
    
    //Feed.......
    const Feed =()=>{
        return(
            <>
            <Nav/>
            <main>
                <LeftBar/>
                <div className="container">
                    <Outlet/>
                </div>
                <RightBar/>
            </main>
            </>
        )
    }
    
    
    //Router........
    const router = createBrowserRouter ([
        {
            path:'/',
            element:<Feed/>,
            children: [
                {
                    path:'/',
                    element:<Home/>
                },
                {
                    path:'/profile/:id',
                    element:<Profile/>
                },
                {
                    path:'/chatbox/:id',
                    element:<ChatBox/>
                },
            ]
        },
        {
            path:'/login',
            element:<Login/>
        },
        {
            path:'/signup',
            element:<Signup/>
        },
    ])
  return (
    <>
        <RouterProvider router={router}/>
    </>
  )
}
