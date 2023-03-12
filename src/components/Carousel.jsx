import React, { useEffect, useState } from 'react'
import './carousel.css'

export function Carousel (props) {
    const [images, setimages] = useState ('');
        useEffect(() => {
            setimages(props.props)
          }, []);
    return (
        <div className="row justify-content-center">
            {  images ? images.map((item, i) => (
                <img src={item} className="carouselImg mb-4" alt="photographs"/> 
                ))
                 :
                <div clasName="spinner-grow" role="status">
                <span class="visually-hidden">Loading...</span>
            </div>
            }
             
        </div>      
    )
}