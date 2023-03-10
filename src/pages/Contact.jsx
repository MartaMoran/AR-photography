import React from 'react'
import { Layout } from '../layout/Layout'
import logo2 from "../images/logo2.jpg"
const Contact = () => {

    return (
        <>
        <Layout>
        <div class="container text-center">
                <div class="row justify-content-center">
                    <div class="col-sm-3 mt-4">
                    <img src={logo2} class="img-fluid" alt="photographer's selfie in a broken glass"/>
                    </div>  
                </div>
                <div class="row justify-content-center">
                    <div class="col-md-7 mt-5">
                        <p class="lh-sm">
                            You can contact me here for any inquiries or collaborations:
                        </p>
                        <p class="lh-sm">
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