import { useState } from "react";
import axios from "axios";
import { v4 as uuid } from 'uuid';

const useAxios = (baseUrl, moreUrl="") => {
  const [data, setData] = useState([]);

  async function getData() {
    try {
      const response = await axios.get(`${baseUrl}${moreUrl}`);
      setData(data => [...data, { ...response.data, id: uuid() }])
    } catch (error) {
      console.log("Error!", error);
    }
  }
  return [data, getData];
};

export default useAxios;

