import React from 'react'
import { Layout } from '../layout/Layout'
import logo_AR from "../images/logo_AR.jpg"
import { Envelope } from 'react-bootstrap-icons'
const Contact = () => {

    return (
        <>
        <Layout>
        <div className="container text-center">
                <div className="row justify-content-center">
                    <div className="col-sm-4 mt-4">
                    <img src={logo_AR} className="img-fluid" alt="photographer's selfie in a broken glass"/>
                    </div>  
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-7 mt-5">
                        <p className="lh-sm">
                            You can contact me here for any inquiries or collaborations:
                        </p>
                        <p className="lh-sm">
                           <span><Envelope color="secondary" size={25}/></span> andrea.rattos@gmail.com
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
        </>
    )

}

export {Contact}