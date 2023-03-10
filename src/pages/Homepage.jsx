import React from 'react'
import { Layout } from '../layout/Layout'
import homepageimg from "../images/homepageimg.jpg"

const Homepage = () => {

    return (
        <>
        <Layout>
            <div class="container text-center">
                <div class="row justify-content-center">
                    <div class="col-sm-6 mt-4">
                    <img src={homepageimg} class="img-fluid" alt="shadow of the photographer in the back of a man"/>
                    </div>  
                </div>
                <div class="row justify-content-center">
                    <div class="col mt-5">
                        <p class="fs-5 fw-bold">
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