import { useState } from "react";
import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import YouTube from "react-youtube";
import AnimeDetails from "./AnimeDetails";

const AnimeCard = (props) => {
  console.log(props);

  const [showVideo, setShowVideo] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  // key={i}
  //             title={e.attributes.titles.en}
  //             image={e.attributes.posterImage.small}
  //             rating={e.attributes.averageRating}
  //             video={e.attributes.youtubeVideoId}
  //             id={e.id}
  //             titlejp={e.attributes.titles.ja_jp}
  //             titleenjp={e.attributes.titles.en_jp}
  //             status={e.attributes.status}
  //             synopsis={e.attributes.synopsis}
  //             description={e.attributes.description}

  const card = (
    <React.Fragment>

      
        <CardContent>
        <img className="animdblogo" src="/animdblogo.png" alt="" />

        {!showVideo && <img className="posteranimecard" src={props.image} alt=""></img>}

          <Typography className="typoanimecard">English Title: {props.title}</Typography>
          <Typography className="typoanimecard">Romaji: {props.titleromaji}</Typography>
          

          <Typography className="videolink" variant="body2">
            <Button
              className="trailerbutton"
              onClick={() => setShowVideo(!showVideo)}
            >
            
              {showVideo ? "Hide" : "Trailer"}
            </Button>
            

            {showVideo && <YouTube className="youtubevideo" videoId={props.video} />}
          </Typography>

  
        </CardContent>

      
    </React.Fragment>
    
  );

  return (
    <div>

    <Box >
      <Card className="animecards">
        {card}
      </Card>
      <Typography className="ratinganimecard">{props.rating}</Typography>

    </Box>

    <div>

        <Button className='sortbutton'
              
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? "Hide" : "Details"}
            </Button>
            
            {showDetails && 
            <AnimeDetails
             titlejp={props.titlejp} 
              titleenjp={props.en_jp}
              status={props.status}
              synopsis={props.synopsis}
              description={props.description}
             />
            }
            </div>


            </div>
  );
};

export default AnimeCard;
