import axios from "axios";
import { Photo } from "../types";
interface ApiResponse {
  results: Photo[];
  total_pages: number;
}

export default async function getPhotosBySearchValue(
  searchValue: string,
  page: number
) {
  const url = "https://api.unsplash.com/search/photos";
  const key = "BL2HusSZWztYq8lqWlRpvD8O3_k14PB-Mwf4XMPl5hY";
  try {
    const response = await axios.get<ApiResponse>(url, {
      params: {
        query: searchValue,
        client_id: key,
        page: page,
        per_page: 12,
      },
    });
    return response;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
