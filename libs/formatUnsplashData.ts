import { UnplashFormattedData } from "../types/UnsplashFormattedData";

function formatUnsplashData(data): UnplashFormattedData {
  return {
    id: data.id,
    links: data.urls.small,
    createdAt: data.created_at,
    alt: data.alt_description,
    url: data.links.html,
    user: data.user.name,
    userLink: data.user.links.html
  };
}

export default formatUnsplashData;
