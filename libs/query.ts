import axios from "axios";

async function queryUnplash(endpoint, params = {}) {
  const baseUrl = "https://api.unsplash.com/";
  const accessKey = "GzXxeoxysLhWqbV4nui5RpVHZt4zP4-SnemZllT7PBA";

  const urlWithEndpoint = new URL(endpoint, baseUrl);

  for (const key in params) {
    urlWithEndpoint.searchParams.append(key, params[key]);
  }

  return axios.get(urlWithEndpoint.href, {
    headers: {
      "Accept-Version": "v1",
      Authorization: `Client-ID ${accessKey}`
    }
  });
}

export default queryUnplash;
