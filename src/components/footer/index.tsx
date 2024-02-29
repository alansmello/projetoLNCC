import React from 'react';
import {CssBaseline, Typography, createStyles, Theme, Container, Link} from "@mui/material";
import {makeStyles} from "@mui/material/styles";


export default function StickyFooter() {
    return (
     
       
        <footer
          style={{
            padding: '3px 2px',
            marginTop: 'auto',
            backgroundColor: 'gray', // Adjust this color according to your theme
          }}
        >
          <Container maxWidth="sm">
            <Typography variant="body1" color="white">My sticky footer can be found here.</Typography>
            <Typography variant="body2" color="white">
              {'Copyright © '}
              <Link color="inherit" href="https://mui.com/">
                Your Website
              </Link>{' '}
              {new Date().getFullYear()}
              {'.'}
            </Typography>
          </Container>
        </footer>
 
    );
  }