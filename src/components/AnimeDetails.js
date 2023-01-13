import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

const bull = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    •
  </Box>
);


              // titlejp={props.titlejp} 
              // titleenjp={props.en_jp}
              // status={props.status}
              // synopsis={props.synopsis}
              // description={props.description}



export default function AnimeDetails(props) {
  return (
    
    <Card className='animecards' style={{color:'white'}}>
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="white" gutterBottom>
          <h1> {props.titlejp} </h1>
        </Typography>
       
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
        
        </Typography>        
        <Typography variant="body1" component="p" gutterBottom>        
        <p className='synopsis'> {props.synopsis}</p>
          <br />
        </Typography>
      </CardContent>
   
    </Card>
   
  );
}