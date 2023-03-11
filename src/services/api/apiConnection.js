import Cosmic from "cosmicjs";

const api = Cosmic();
// Set these values, found in Bucket > Settings after logging in at https://app.cosmicjs.com/login
const bucket = api.bucket({
  slug: "andrea-rattos-web",
  read_key: "2Npi5jaxAgksnF2db4ShKFjXLCjhu5a5XJVsCyQU6QLIbdwIGA",
});
const fetchImages = async (value) => {
  const data = await bucket.media
    .find({
      folder: value,
    })
    .props("name,url,metadata"); // Limit the API response data by props
    
  return data;
};

export default fetchImages;