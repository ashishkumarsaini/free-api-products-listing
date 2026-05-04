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
}: {
  method?: string;
  url: string;
}) => {
  try {
    const response = await api({
      method,
      url: `${API_BASE_URL}${url}`,
    });

    return response.data;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (error: any) {
    console.error("API Error:", error?.message);
    throw error?.message || "An unknown error occurred";
  }
};