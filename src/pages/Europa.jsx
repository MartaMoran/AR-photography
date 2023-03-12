import React, { useEffect, useState } from 'react'
import { Carousel } from '../components/Carousel';
import { Layout } from '../layout/Layout'
import fetchImages from '../services/api/apiConnection';
const Europa = () => {
    const [data, setData] = useState ('');
    useEffect(() => {
      const getData= async () => {
        const images = await fetchImages("europa");
        
        const result= images.media.map((item, i)=>( item.url))
        setData(result);
      };
      getData()
    }, []);
   
    return (
        <>
        <Layout>

            {
                data ?
                <div className="container text-center">
                    <div className="row justify-content-center mt-5">
                    <div className="col mb-4">
                        <h3>EUROPA</h3>
                        <p className="fs-7">
                             PHOTOBOOK 
                        </p>
                        <p className="fs-9">In 2017, I walked the streets of 26 European countries with my camera in a fully independent journey, taking about 85,000 photos.
                            At first sight, this may seem insane, but actually, it was just my personal attempt to the answer to two primary questions that I have been asking myself in the light of the current economic, political and social evolution we are facing:
                            Does the European society exist as a whole? And if it does, how does it work?
                            </p>  
                            <p className="fs-9">
                            The desire to get these questions answered led me to make long trips, in which I have been full-time dedicated to the search of images describing or just conveying sensations which might reveal the true nature of such European society in 2017, from my very own point of view.
                            This journey has helped me to evolve and grow on my initial thoughts, adding nuances that I was not able to observe from the comfort of my house by only getting filtered and simplified information from the media. In my attempt to remove that filter I have approached many people in their daily life, observing what is happening on the streets of Europe, but trying to be invisible and only taking “candid” and “unstaged” photos.
                            The final 85 photos that I have selected to be part of this book summarize my vision of Europe by focusing on the common points of society discovered in my journey, on the different scenarios and countries I had the chance to describe; hints of what society holds in common and, in short, of what we are.
                            In April 2018 I complete a Crowdfunding in the Kickstarter platforme to rise the funds to print the photobook of my project “Europa”.
                        </p>
                                                    
                    </div>

                </div>
                <Carousel props={data}/>
                </div>
                : 
                <div class="d-flex justify-content-center mt-5">
                <div class="spinner-grow" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
                </div>
            }
        
        </Layout>
        </>
    )

}

export {Europa}