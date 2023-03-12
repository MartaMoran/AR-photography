import React, { useEffect, useState } from 'react'
import { Layout } from '../layout/Layout'
import fetchImages from '../services/api/apiConnection';
import {redirectRoutes} from '../routes/constants';
import { NavLink, useNavigate } from 'react-router-dom';
import { Europa } from './Europa';

const Projects = () => {
    const [imgsEuropa, setImgsEuropa] = useState ('');
    const [imgsLavapies, setImgsLavapies] =useState('')
    useEffect(() => {
      const getData= async () => {
        const result = await fetchImages("europa");
        setImgsEuropa(result.media);
        const img = await fetchImages("lavapies");
        setImgsLavapies(img.media);
      };
      getData()
    }, []);
    return (
        <>
        <Layout>
            { imgsEuropa && imgsLavapies ? 
        <div className="row row-cols-1 row-cols-md-2 g-4 mt-5">
            <div className="col">
                <NavLink className="link-dark" to={redirectRoutes.europa.url}>
                <div className="card">
                <img src={imgsEuropa[0].url} className="card-img-top" alt="..."/>
                <div className="card-body">
                <h5 className="card-title text-center fw-bold">Europa</h5>
                </div>
                </div>
                </NavLink>
            </div>
            <div className="col">
            <NavLink className="link-dark" to={redirectRoutes.lavapies.url}>
                <div className="card">
                <img src={imgsLavapies[1].url} className="card-img-top" alt="..."/>
                <div className="card-body">
                    <h5 className="card-title text-center fw-bold">Lavapies</h5>
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

export {Projects}