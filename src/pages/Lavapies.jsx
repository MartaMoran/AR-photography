import React, { useEffect, useState } from 'react'
import { Carousel } from '../components/Carousel';
import { Layout } from '../layout/Layout'
import fetchImages from '../services/api/apiConnection';
const Lavapies = (props) => {
    const [data, setData] = useState ('');
    useEffect(() => {
      const getData= async () => {
        const images = await fetchImages("lavapies");
        
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
                        <h3>LAVAPIÉS</h3>
                        <p className="fs-7">
                            FANZINE
                        </p>
                        <p className="fs-9">A gentrification story.
                        </p>  
                        <p className="fs-9">
                            Lavapiés is a neighborhood in Madrid and it is not just any neighborhood.
                        </p>
                        <p className="fs-9">
                        Its history tells us about a place of working-class tradition, which was previously a place of reception for immigrant labor from the rest of Spain, and then the nerve center of several foreign communities that settled there. Its present tells us that it is one of the neighborhoods that stand out worldwide for their power of attraction in terms of tourism, culture and leisure. What has happened is called gentrification.
                        </p>
                        <p className="fs-9">
                        In 2019 I self-edited a fanzine with the sociologist Marta Morán, author of the texts that, together with my photos, aim to create an informative set to understand the gentrification process in general and in the Madrid neighborhood in particular.
                        </p>
                                                    
                    </div>

                </div>
                <Carousel props={data}/>
                </div>
                : <div>loading</div>
            }
        
        </Layout>
        </>
    )

}

export {Lavapies}