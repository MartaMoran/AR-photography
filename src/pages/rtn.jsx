import React, { useEffect, useState } from 'react'
import { Carousel } from '../components/Carousel';
import { Layout } from '../layout/Layout'
import { redirectRoutes } from '../routes/constants';
import fetchImages from '../services/api/apiConnection';
const Rtn = (props) => {
    const [data, setData] = useState ('');
    useEffect(() => {
      const getData= async () => {
        const images = await fetchImages("rtn");
        
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
                        <h3>{redirectRoutes.rtn.title}</h3>
                        <p className="fs-7">
                            SERIES
                        </p>
                        <p className="fs-9">Take the car and wander aimlessly on back roads outside the cities, stopping to take photos when you find something that connects with you. This is the philosophy of this series, started in 2020 and that is still open today. Discovering the unknown just a few kilometers from home opens up an interesting reflection on our relationship with the environment we inhabit.
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

export {Rtn}