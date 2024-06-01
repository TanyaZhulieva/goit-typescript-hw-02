import axios from "axios";

const API_KEY = "BAIHqE3gLRBqivcNCSr9zD_QcvZuidt1nXlsnI7GNDg";

axios.defaults.baseURL = "https://api.unsplash.com/search/photos/";

export const fetchImages = async (searchQuery, currentPage) => {
  const response = await axios.get("", {
    params: {
      query: searchQuery,
      page: currentPage,
      orientation: "landscape",
      per_page: 12,
      client_id: API_KEY,
    },
  });
  return response.data.results;
};
