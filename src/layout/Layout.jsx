import React from 'react'
import { Footer } from '../components/Footer'
import { Navbar } from '../components/Navbar'


const Layout = (props) => {
    return (
        <>
        <Navbar/>
        <div class="container-fluid">
        
        
            {props.children}
        </div>
        <Footer/>
        </>
    )
}


export {Layout}