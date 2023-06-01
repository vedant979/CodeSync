import React, { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import "../../Styles/NavBar.css";
import {Toolbar} from '@mui/material';
export const NavBar = ({html, css, js}) => {


  return (
    <>
    <AppBar sx={{backgroundColor:"black"}}>
      <Toolbar>
        <div className='leftNav-container'>
          <h2 className='header'>
            CodeSync
          </h2>
        </div>
        {/* <div className='rightNav-container'>
          <Button variant="contained" className='btn-btn-save' onClick={handleClick}>Save</Button>
        </div> */}
      </Toolbar>
    </AppBar>
    </>
  )
}
