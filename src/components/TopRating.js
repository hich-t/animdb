import { useState } from "react";
import React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import YouTube from "react-youtube";
import AnimeDetails from "./AnimeDetails";

const TopRating = (props) => {
  

  const [showVideo, setShowVideo] = useState(false);
  const [showDetails, setShowDetails] = useState(false);

  const card = (
    <React.Fragment>
      
        <CardContent>
        {!showVideo && <img className="posteranimecard" src={props.image} alt=""></img>}

          <Typography className="typoanimecard">{props.title}</Typography>

          <Typography className="typoanimecard">{props.rating}</Typography>
          <Typography className="videolink" variant="body2">
            <Button
              className="trailerbutton"
              onClick={() => setShowVideo(!showVideo)}
            >
              {showVideo ? "Hide" : "Trailer"}
            </Button>

            {showVideo && <YouTube videoId={props.video} />}
          </Typography>

          <Typography>
            <Button
              
              onClick={() => setShowDetails(!showDetails)}
            >
              {showDetails ? "Hide" : "Details"}
            </Button>

            {showDetails && 
            <AnimeDetails title={props.titlejp} />
            }
          </Typography>
        </CardContent>
    </React.Fragment>
  );

  return (
    <Box className="animecards">
      <Card>
        {card}
      </Card>
      {/* {cardComment ? <CardsComment id={props.idcomment}/> : ""} */}
    </Box>
  );
};

export default TopRating;
