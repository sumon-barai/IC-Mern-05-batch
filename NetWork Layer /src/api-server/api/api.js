import axios from "axios";

const api = axios.create({
  baseURL: "https://fakestoreapi.com",
  timeout: 5000,
});

function getAuthHeaders() {
  const token = localStorage.getItem("jwt");
  return token ? { Authorization: `Bearer ${token}` } : {};
}

async function apiRequest(config = {}) {
  try {
    const response = await api({
      ...config,
      headers: {
        ...config.headers,
        ...getAuthHeaders(),
      },
    });

    if (response.status === 200) {
      return response?.data;
    }
  } catch (error) {
    console.log(`Api request error`, error);
    throw error;
  }
}

export default apiRequest;
