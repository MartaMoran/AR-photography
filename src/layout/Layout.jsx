import React from 'react'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'
import './layout.css'


const Layout = (props) => {
    return (
        <>
        <Navbar/>
        <div className="container-fluid layoutContainer">
        
        
            {props.children}
        </div>
        <Footer/>
        </>
    )
}


export {Layout}