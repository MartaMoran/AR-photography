import Cosmic from "cosmicjs";
const api = Cosmic();
// Set these values, found in Bucket > Settings after logging in at https://app.cosmicjs.com/login
const bucket = api.bucket({
  slug: "andrea-rattos-web",
  read_key: "2Npi5jaxAgksnF2db4ShKFjXLCjhu5a5XJVsCyQU6QLIbdwIGA",
});
const fetchPosts = async (value) => {
    console.log(value)
  const data = await bucket.objects
    .find({
      type: value,
    })
    .props("slug,title,metadata"); // Limit the API response data by props
    console.log(data)
  return data;
};

export default fetchPosts;