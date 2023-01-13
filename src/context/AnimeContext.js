import { createContext, useState, useEffect } from "react";
import axios from "axios";

export const AnimeContext = createContext();

export const AnimeController = ({ children }) => {
  const [data, setData] = useState([]);
  const [query, setQuery] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [input, setInput] = useState("")
  const [data2, setData2] = useState([])
  const [query2, setQuery2] = useState("")
  const [data3, setData3] = useState([])



  const fetchData = async () => {
    try {
      const callData = await axios.get(
        "https://kitsu.io/api/edge/anime?page%5Blimit%5D=10&page%5Boffset%5D=0&sort=-averageRating"
      );
     setData(callData.data.data);
      setIsLoading(true);
    } catch (err) {
      console.log(err);
    }
  };
  const fetchData2 = async () => {
    try {
      const callData = await axios.get(
        `https://kitsu.io/api/edge//anime?filter[text]=${query}`
      );
      setData2(callData.data.data);
      setIsLoading(true);
    } catch (err) {
      console.log(err);
    }
  };


  useEffect(() => {
    query ? fetchData2() : fetchData();
  }, [query]);


  const fetchData3 = async () => {
    try {
      const callData = await axios.get(
        `https://kitsu.io/api/edge/anime?page%5Blimit%5D=20&page%5Boffset%5D=0&sort=${query2}`
      );
     setData3(callData.data.data);
      setIsLoading(true);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect (() => {
    query2 && fetchData3() 
  }, [query2]);

  return (
    <AnimeContext.Provider
      value={{
              value : [data2, setData2], 
              value2: [data, setData], 
              value3: [query, setQuery], 
              value4: [isLoading, setIsLoading], 
              value5: [input, setInput],
              value6: [query2, setQuery2], 
              value7: [data3, setData3], 

            }}
    >
            {isLoading && children }
    </AnimeContext.Provider>
  );
};
