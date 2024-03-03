import axios from "axios";

const ACCESS_KEY = "LCkU8nFSau_xFz8nf_a5FgJjCLRNfdKK5ojfQ-t-WAQ";
axios.defaults.baseURL = "https://api.unsplash.com/";

export const fetchImages = async (searchQuery, page) => {
  const response = await axios.get(`/search/photos`, {
    params: {
      query: searchQuery,
      per_page: 12,
      page,
    },
    headers: {
      Authorization: `Client-ID ${ACCESS_KEY}`,
      "Accept-Version": "v1",
    },
  });
  return response.data;
};
