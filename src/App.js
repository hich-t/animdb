import { useContext, useState } from "react";
import { AnimeContext } from "./context/AnimeContext";
import "./App.css";
import MiniCard from "./components/MiniCard";
import AnimeCard from "./components/AnimeCard";
import TopRating from "./components/TopRating";

const App = () => {
  const { value, value2, value3,value6, value7 } =
    useContext(AnimeContext);
  const [data2, setData2] = value;
  const [data, setData] = value2;
  const [query, setQuery] = value3;
  const [query2, setQuery2] = value6;
  const [data3, setData3] = value7;

  // Ajout d'un state pour le tri par pop Up ou Down
  const [sortType, setSortType] = useState(""); 


  // Methode Sort pour tri des animes
  const sortedData = data2.sort((a, b) => {
    if (sortType === "ratingUp") {
      return b.attributes.averageRating - a.attributes.averageRating;
    }
    if (sortType === "ratingDown") {
      return a.attributes.averageRating - b.attributes.averageRating;
    }
  });

  

  console.log(data);

  return (
    <div className="allcards">
      {data && !query && <img className="top10" src="/top10.png" alt="" />}
      {data && query && <img className="searchresultimg" src="/searchresult.png" alt="coucou" />} 

      <div className="topcards">
        {data && !query && (
          data.map((e, i) =>
            e.attributes.titles.en ? (
              <MiniCard
                key={i}                
                title={e.attributes.titles.en}
                image={e.attributes.posterImage.small}
                rating={e.attributes.averageRating}
              />) : (""))) 
              }
      </div>
      
      <div>
      <div className="sortButton">

      {query && data2 &&
        <button className="sortbutton" onClick={() => setSortType("ratingUp")}>Most Popular</button> }
        {query && data2 &&
        <button className="sortbutton" onClick={() => setSortType("ratingDown")}>Least Popular</button>}
        </div>
        {data2 ? (
          sortedData.map((e, i) => (
            <AnimeCard 
              key={i}
              title={e.attributes.titles.en}
              image={e.attributes.posterImage.small}
              rating={e.attributes.averageRating}
              video={e.attributes.youtubeVideoId}
              id={e.id}
              titlejp={e.attributes.titles.ja_jp}
              titleromaji={e.attributes.titles.en_jp}
              status={e.attributes.status}
              synopsis={e.attributes.synopsis}
              description={e.attributes.description}

            />
          ))
        ) : (
          <h1>Loading</h1>
        )}
      </div>
      <div>
        {query2 &&
          data3 &&
          data3.map((e, i) => (
            <TopRating
              key={i}
              title={e.attributes.titles.en}
              image={e.attributes.posterImage.small}
              rating={e.attributes.averageRating}
              video={e.attributes.youtubeVideoId}
              id={e.id}
              titlejp={e.attributes.titles.ja_jp}
            />
          ))}
      </div>
    </div>
  );
};

export default App;
