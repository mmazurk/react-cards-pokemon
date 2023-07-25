import { useState } from "react";
import axios from "axios";
import { v4 as uuid } from 'uuid';

const useAxios = (baseUrl) => {
  const [data, setData] = useState([]);

  async function getData(arg="") {

    // In PlayingCardList.js, if
    // I just passed the function name 
    // <button onClick={getCards}>Add a playing card!</button>
    // React would pass the event object

    // In React, when you write onClick={getCards}, you're effectively saying "when this element is clicked, call the getCards function and give it the click event object to work with". This is useful because there might be information in the event object that you need for the getCards function.

    // In this case, I would need to do this
    // const finalArg = arg && typeof arg === 'object' ? '' : arg;   
    // const url = `${baseUrl}${finalArg}`;

    // A way to safeguard against this is to use an anonymous function
    // so getCards() would be invoked with no arguments
    // <button onClick={() => getCards()}>Add a playing card!</button>

    const url = `${baseUrl}${arg}`;
    try {
      const response = await axios.get(url);
      setData(data => [...data, { ...response.data, id: uuid() }])
    } catch (error) {
      console.log("Error!", error);
    }
  }
  return [data, getData];
};

export default useAxios;

