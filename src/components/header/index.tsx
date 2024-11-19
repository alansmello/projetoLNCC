import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import HelpIcon from '@mui/icons-material/Help';
import IconButton from '@mui/material/IconButton';
import Link from '@mui/material/Link';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import Image from 'next/image';

const lightColor = 'rgba(255, 255, 255, 0.7)';

interface HeaderProps {
  onDrawerToggle: () => void;
}

export default function Header() {
 

  return (
    <React.Fragment>
      {/*
      <AppBar color="primary" position="sticky" elevation={0}>
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            <Grid sx={{ display: { sm: 'none', xs: 'block' } }} item>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={onDrawerToggle}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs />
            <Grid item>
              <Link
                href="/participantes"
                variant="body2"
                sx={{
                  textDecoration: 'none',
                  color: lightColor,
                  '&:hover': {
                    color: 'common.white',
                  },
                }}
                rel="noopener noreferrer"
                target="_blank"
              >
                Go to docs
              </Link>
            </Grid>
            <Grid item>
              <Tooltip title="Alerts • No alerts">
                <IconButton color="inherit">
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <IconButton color="inherit" sx={{ p: 0.5 }}>
                <Avatar src="/static/images/avatar/1.jpg" alt="My Avatar" />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
              */}
             
             <AppBar
        component="div"
        position="sticky"
        elevation={10}
        sx={{ backgroundColor: '#101f33', zIndex: 0 }}
        
      >
        <Toolbar>
        <Grid container alignItems="center" justifyContent="space-between">
  {/* Primeira imagem alinhada à esquerda */}
  <Grid item>
    <Link href="http://www.lncc.br" target="_blank" rel="noopener noreferrer">
      <Image src="/images/lnccPrincipal.png" alt="LNCC Logo" width={250} height={250} />
    </Link>
  </Grid>
  
  {/* Segunda imagem alinhada ao centro */}
  <Grid item>
    <Link href="https://dgp.cnpq.br/dgp/espelhogrupo/4623" target="_blank" rel="noopener noreferrer">
      <Image src="/images/lemas.png" alt="OMS Logo" width={300} height={300} />
    </Link>
  </Grid>
  
  {/* Terceira imagem alinhada à direita */}
  <Grid item>
    <Link href="https://www.ims.uerj.br/" target="_blank" rel="noopener noreferrer">
      <Image src="/images/ims4.png" alt="OMS Logo" width={300} height={300} />
    </Link>
  </Grid>
</Grid>

        </Toolbar>
      </AppBar>
      
    </React.Fragment>
  );
}