import React from 'react'
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const MiniCard = (props) => {

    // console.log(anime)

    const card = (
        <React.Fragment>

      <div className='card'>
      
      
          <CardContent>
      
            <Typography className="poster" sx={{ mb: 1.5 }} color="text.secondary">
              <img src={props.image} alt="" />
            </Typography>
         
         
          </CardContent>
          </div>
        </React.Fragment>
      );
      
      
      
        return (
          <div>


          <Box>

            <Card className="cardbox" variant="outlined">{card}</Card>
           </Box>
           <Typography className="rating" variant="body2">
                {props.rating}            
                </Typography>
          </div>
        );
      }

export default MiniCard