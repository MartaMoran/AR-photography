import React from 'react'
import { Layout } from '../layout/Layout'
import aboutImg from "../images/aboutImg.jpg"
import { NavLink } from 'react-router-dom'
import { redirectRoutes } from '../routes/constants'

const About = () => {

    return (
        <>
        <Layout>
        <div className="container text-center">
                <div className="row justify-content-center">
                    <div className="col-sm-3 mt-4">
                    <img src={aboutImg} className="img-fluid" alt="photographer's selfie in a broken glass"/>
                    </div>  
                </div>
                <div className="row justify-content-center">
                    <div className="col-md-7 mt-4">
                        <p className="lh-sm">
                            Hi, I’m Andrea, an Italian photographer (Genova, 1976) based in A Coruña, Spain since 2005.
                            I have been attracted to photography since I was a kid. I remember taking pictures with my grandfather’s camera over the family summer holidays.
                            The camera has accompanied me on my trips across the world.
                            In recent years I have been drawn to the street photography, which to me now means a way of documenting society with a critical view.
                        </p>
                        <p className="lh-sm">
                            In April 2018 I complete a Crowdfunding in the Kickstarter platforme to rise the funds to print the photobook of my project {<NavLink className="link-dark fw-bolder" to={redirectRoutes.europa.url}>“Europa”</NavLink>}. The book was released in September 2018 and was presented in A Coruña, Genova, Barcelona, Torino, Madrid and more. The first edition of 150 photobook is now sold out.
                        </p>
                        <p className="lh-sm">
                            In November 2018 I also started my new project about gentrification in Lavapiés, Madrid.
                            In 2019 I released the book / fanzine {<NavLink className="link-dark fw-bolder" to={redirectRoutes.lavapies.url}>“Lavapiés”</NavLink>} that I self-edited with the sociologist Marta Morán, author of the texts that, together with my photos, aim to create an informative set to understand the gentrification process in general and in the Madrid neighborhood in particular.
                        </p>
                        <p className="lh-sm">
                            "Road to Nowhere" have a different philosophy. I take the car and wander aimlessly on back roads outside the cities, stopping to take photos when I find something that connects with me. I started this series in 2020 and is still open today. Discovering the unknown just a few kilometers from home opens up an interesting reflection on our relationship with the environment we inhabit.
                        </p>
                        <p className="lh-sm">
                            In June 2020 I lauched {<a className="link-dark fw-bolder" href='https://www.instagram.com/woofermagazine/?hl=en'>Woofermagazine</a>} and i'm curating the IG page. In 2023 I´ll start the web page of this project.
                        </p>
                    </div>
                </div>
            </div>
        </Layout>
        </>
    )

}

export {About}