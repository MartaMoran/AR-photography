import React, { useEffect, useState } from 'react'
import useSWR from "swr";
import { Layout } from '../layout/Layout'
import fetchPosts from '../services/api/apiConnection';

const Projects = () => {
    const [data, setData] = useState ('');
    useEffect(() => {
      const getData= async () => {
        const result = await fetchPosts("posts");
        console.log(result)
        setData(result);
      };
      getData()
    }, []);
    const posts = data.objects;
    return (
        <>
        <Layout>
        {data ?
        
        posts.map((post) => (
            <div key={post.slug} style={{ marginBottom: 20 }}>
              {post.metadata.hero && (
                <div>
                  <img alt="" src={`${post.metadata.hero.imgix_url}?w=400`} />
                </div>
              )}
              <div>{post.title}</div>
            </div>
          ))
          : <div>Loading...</div> }
        
        </Layout>
        </>
    )

}

export {Projects}