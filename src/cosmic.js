import React from "react";
import useSWR from "swr";
import Cosmic from "cosmicjs";
const api = Cosmic();
// Set these values, found in Bucket > Settings after logging in at https://app.cosmicjs.com/login
const bucket = api.bucket({
  slug: "andrea-rattos-web",
  read_key: "2Npi5jaxAgksnF2db4ShKFjXLCjhu5a5XJVsCyQU6QLIbdwIGA",
});
const fetchPosts = async () => {
  const data = await bucket.objects
    .find({
      type: "posts",
    })
    .props("slug,title,metadata"); // Limit the API response data by props
  return data;
};
function cosmic() {
  const { data, error } = useSWR("fetch-posts", fetchPosts); // Use SWR hook
  if (!data) return <div>Loading...</div>;
  const posts = data.objects;
  return (
    <div>
      {posts.map((post) => (
        <div key={post.slug} style={{ marginBottom: 20 }}>
          {post.metadata.hero && (
            <div>
              <img alt="" src={`${post.metadata.hero.imgix_url}?w=400`} />
            </div>
          )}
          <div>{post.title}</div>
        </div>
      ))}
    </div>
  );
}
export default cosmic;