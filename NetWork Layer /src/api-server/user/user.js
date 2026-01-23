import apiRequest from "../api/api";
import Endpoints from "../endpoints";

export async function getUsers() {
  try {
    const response = apiRequest({
      url: Endpoints.USERS,
      method: "get",
    });

    return response;
  } catch (error) {
    throw error;
  }
}
