import axios from "axios";

axios.defaults.headers.common["Access-Control-Allow-Origin"] = "*";
const URL = "http://localhost:5000/api";
// const URL = "https://www.soshnft.io/api";

export const validateLinkApi = (url, token, category) => {
  var data = JSON.stringify({
    link: url,
  });

  var config = {
    method: "post",
    url: URL + `/V1/social/${category}/validatelink`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    data: data,
  };

  return axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.error(error?.Error, "error");
      return error;
    });
};

export const createAssetsApi = (data, token, uid) => {
  const hashtag = !data.hashtag?.startsWith("#")
    ? `#${data.hashtag}`
    : data.hashtag;
  data = JSON.stringify({
    hashtag: hashtag,
    awsObjectId: uid.bucket_link.ETag,
    post_url: uid.Validate_URL,
    bucketUrl: uid.bucket_link.Location,
    platform_type: data.category,
    description: data.caption,
    name: data.title,
  });

  var config = {
    method: "post",
    url: URL + "/V1/assets",
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    data: data,
  };

  return axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.error(error);
    });
};

export const updateAssetApi = (data, token, Id) => {
  var config = {
    method: "put",
    url: URL + `/V1/assets/${Id}`,
    headers: {
      Authorization: `Bearer ${token}`,
      "Content-Type": "application/json",
    },
    data: { tx_data: data },
  };

  return axios(config)
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      console.error(error);
    });
};
