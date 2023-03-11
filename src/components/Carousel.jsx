import React, { useEffect, useState } from 'react'

export function Carousel (props) {
    const [images, setimages] = useState ('');
        useEffect(() => {
            setimages(props.props)
          }, []);
    return (
        <div className="row justify-content-center">
            {  images? images.map((item, i) => (
                <img src={item} className="w-75 mb-4" alt="photographs"/> 
                )) :<p>loading</p>
            }
             
        </div>      
    )
}