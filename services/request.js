import axios from "axios";
import { isEmpty } from "../utils/general";
export const apiUrl = process.env.API_URL;

export const apiCall = ({ method, url, data = "" }) => async () => {
  try {
    const response = await axios({
      method: method,
      url: apiUrl + url,
      data: data.data || "",
      headers: data.headers || "",
      params: { ...data.params, apiKey: process.env.APP_KEY },
      timeout: data.timeout || 0
    });
    return response.data;
  } catch (error) {
    if (error.response) {
      const { data } = error.response;
      if (!isEmpty(data.message)) {
        alert(data.message);
      } else {
        alert("Sorry, something went wrong there. Try again.");
      }
    }
      console.error(error);
      return
  }
};
