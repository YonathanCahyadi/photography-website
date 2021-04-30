import axios from "axios";

async function queryUnplash(endpoint, params = {}, timeoutMs = 0) {
  const baseUrl = "https://api.unsplash.com/";
  const accessKey = process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY;

  const urlWithEndpoint = new URL(endpoint, baseUrl);

  for (const key in params) {
    urlWithEndpoint.searchParams.append(key, params[key]);
  }

  return axios.get(urlWithEndpoint.href, {
    headers: {
      "Accept-Version": "v1",
      Authorization: `Client-ID ${accessKey}`
    },
    timeout: timeoutMs
  });
}

export default queryUnplash;
