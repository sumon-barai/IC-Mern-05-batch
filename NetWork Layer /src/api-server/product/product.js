import apiRequest from "../api/api";
import Endpoints from "../endpoints";

export async function getProducts() {
  try {
    const response = apiRequest({
      url: Endpoints.PRODUCTS,
      method: "get",
    });

    return response;
  } catch (error) {
    throw error;
  }
}
