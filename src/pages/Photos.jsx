import React, { useEffect, useState } from 'react'
import { Layout } from '../layout/Layout'
import fetchImages from '../services/api/apiConnection';
import {redirectRoutes} from '../routes/constants';
import { NavLink} from 'react-router-dom';
import './photos.css'

const Photos = () => {
    const [imgsRtn, setImgsRtn] = useState ('');
    const [imgsComing, setImgsComing] =useState ('');
    const [imgsStreet, setImgsStreet] = useState ('');
    useEffect(() => {
      const getData= async () => {
        const resultRtn = await fetchImages("rtn");
        setImgsRtn(resultRtn.media);
        const resultComing = await fetchImages("coming-back");
        setImgsComing(resultComing.media);
        const resultStreet= await fetchImages("street-photography");
        setImgsStreet(resultStreet.media);
      };
      getData()
    }, []);
    return (
        <>
        <Layout>
            { imgsRtn && imgsComing && imgsStreet ? 
        <div className="row row-cols-1 row-cols-md-2 g-4 mt-5">
            <div className="col">
                <NavLink className="link-dark" to={redirectRoutes.rtn.url}>
                <div className="card">
                <img src={imgsRtn[0].url} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title text-center fw-bold">Road to nowhere</h5>
                </div>
                </div>
                </NavLink>
            </div>
            <div className="col">
            <NavLink className="link-dark" to={redirectRoutes.coming.url}>
                <div className="card">
                <img src={imgsComing[1].url} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-center fw-bold">Coming back to what I know</h5>
                    </div>
                </div>
                </NavLink>
            </div>
            <div className="col card-photos">
            <NavLink className="link-dark" to={redirectRoutes.street.url}>
                <div className="card">
                <img src={imgsStreet[0].url} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-center fw-bold">Street photography</h5>
                    </div>
                </div>
                </NavLink>
            </div>
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

export {Photos}