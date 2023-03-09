import React from 'react'
import { Navbar } from '../components/Navbar'


const Layout = (props) => {
    return (
        <>
        <Navbar/>
        <div class="container-fluid">
        
        
            {props.children}
        </div>
        </>
    )
}


export {Layout}