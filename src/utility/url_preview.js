import get_preview_api_key from "../constants/preview_api_key";
import axios from "axios";


const fetchPreviewData = async (url) => {
    try {
    const preview_api_key = await get_preview_api_key();
      const response = await axios.get(
        `https://api.linkpreview.net/?key=${preview_api_key}&q=${encodeURIComponent(
          url
        )}`
      );
      return response.data;
    } catch (error) {
      console.error("Error:", error);
      return null;
    } 
  };

export default fetchPreviewData;

