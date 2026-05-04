import axios from "axios";

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'https://api.freeapi.app/api/v1';

const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

export const apiClient = async ({
  method = "GET",
  url,
}) => {
  try {
    const response = await api({
      method,
      url: `${API_BASE_URL}${url}`,
    });

    return response.data;
  } catch (error) {
    console.error("API Error:", error.message);
    throw error.message;
  }
};