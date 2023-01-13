
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { useContext } from "react";
import { AnimeContext } from "../context/AnimeContext";

const Navbar = () => {

  const {value6} = useContext(AnimeContext);
  const [query2, setQuery2] = value6



  const [anchorEl, setAnchorEl] = React.useState();
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

 
  console.log(query2)

  return (
    <div className='navbar'>

      <img className="logonav" src="/logotest2.png" alt="" />
      
      {/*  */}
      


    <div className="buttonblock">
      <Button className='animebutton'
        id="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Anime
      </Button>
      {/* <Button
              onClick={() => setQuery2("-averageRating") }
            >top rating</Button> */}
    
      <Menu
        id="fade-menu"
        MenuListProps={{
          'aria-labelledby': 'fade-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        TransitionComponent={Fade}
      >
        <MenuItem  onClick={() => setQuery2("-averageRating") }>Anime List By Ranking</MenuItem>
        <MenuItem  onClick={() => setQuery2("-titles") }>Anime list A-Z</MenuItem>
        <MenuItem  > Log In</MenuItem>
        <MenuItem  > Log Out</MenuItem>
      </Menu>
      
      
      
    </div>
   
    
    </div>
  );
}
export default Navbar