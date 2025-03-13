// AIzaSyCkeu22JW1Kvm-boNUhs5iwCPem3HhvAYc
// https://www.googleapis.com/books/v1/volumes?q=твой_запрос

import axios from "axios";

export const fetchData = async (topic, page) => {
  const startIndex = (page - 1) * 5;

  const response = await axios.get(
    `https://www.googleapis.com/books/v1/volumes?q=${topic}&printType=books&maxResults=5&startIndex=${startIndex}&langRestrict=en`
  );

  return {
    items: response.data.items,
    totalItems: response.data.totalItems,
  };
};
