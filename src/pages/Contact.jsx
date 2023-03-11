import React from 'react'
import { Layout } from '../layout/Layout'
import logo2 from "../images/logo2.jpg"
const Contact = () => {

    return (
        <>
        <Layout>
        <div className="container text-center">
                <div className="row justify-content-center">
                    <div className="col-sm-3 mt-4">
                    <img src={logo2} className="img-fluid" alt="photographer's selfie in a broken glass"/>
                    </div>  
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-7 mt-5">
                        <p className="lh-sm">
                            You can contact me here for any inquiries or collaborations:
                        </p>
                        <p className="lh-sm">
                           email
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
        </>
    )

}

export {Contact}