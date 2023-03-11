import React from 'react'
import { Layout } from '../layout/Layout'
import homepageimg from "../images/homepageimg.jpg"

const Homepage = () => {

    return (
        <>
        <Layout>
            <div className="container text-center">
                <div className="row justify-content-center">
                    <div className="col-sm-6 mt-4">
                    <img src={homepageimg} className="img-fluid" alt="shadow of the photographer in the back of a man"/>
                    </div>  
                </div>
                <div className="row justify-content-center mt-5">
                    <div className="col">
                        <p className="fs-5 fw-bold">
                        "I live photographing the world to understand it, to understand me"
                        </p>
                    </div>

                </div>
            </div>
        </Layout>
        </>
    )

}

export {Homepage}