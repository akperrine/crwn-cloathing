import axios from "axios";
const CATEGORY_REST_API_URL = "http://localhost:8080/api/categories";

export const getCategories = async () => {
  const response = await fetch(CATEGORY_REST_API_URL).then((res) => res.json());
  // console.log(response);
  return response;
};
