import axios from "axios";

export async function api_post_service(url, data) {
  try {
    let response = await axios.post(
      `http://localhost:5000/api/v1/${url}`,
      data
    );
    return response;
  } catch (error) {
    console.log(error);
  }
}
