import React, { useEffect, useState } from 'react'
import { Carousel } from '../components/Carousel';
import { Layout } from '../layout/Layout'
import { redirectRoutes } from '../routes/constants';
import fetchImages from '../services/api/apiConnection';
const Coming = (props) => {
    const [data, setData] = useState ('');
    useEffect(() => {
      const getData= async () => {
        const images = await fetchImages("coming-back");
        
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
                        <h3>{redirectRoutes.coming.title}</h3>
                        <p className="fs-7">
                            SERIES
                        </p>
                        <p className="fs-9">In July 2021 I started a road trip to my city, Genova.
From A Coruña, the city where I live in Spain, I have crossed Castilla y Leon, the Basque Country and France to finally return to Italy, after two years of absence.
This series talks about the feelings of traveling again after a long time and the return to the origins.
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

export {Coming}