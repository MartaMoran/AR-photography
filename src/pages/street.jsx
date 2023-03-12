import React, { useEffect, useState } from 'react'
import { Carousel } from '../components/Carousel';
import { Layout } from '../layout/Layout'
import { redirectRoutes } from '../routes/constants';
import fetchImages from '../services/api/apiConnection';
const Street = (props) => {
    const [data, setData] = useState ('');
    useEffect(() => {
      const getData= async () => {
        const images = await fetchImages("street-photography");
        
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
                        <h3>{redirectRoutes.street.title}</h3>
                        <p className="fs-7">
                            PORTFOLIO
                        </p>
                        <p className="fs-9">This is a brief portfolio of my street photography, I hope you enjoy it.
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

export {Street}