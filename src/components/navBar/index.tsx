import { useState } from "react";
import { AppBar, Toolbar, IconButton, Typography, Stack, Button, Menu, MenuItem} from "@mui/material";
import MenuBookIcon from '@mui/icons-material/MenuBook';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Link from "next/link";


export default function NavBar() {
    const[ancora, setAncora] = useState <null | HTMLElement> (null);

    const open = Boolean(ancora);

    const handleClick = (event: React.MouseEvent<HTMLButtonElement>): void => {
       setAncora(event.currentTarget);
    }

    const handleClose = (): void  =>{
        setAncora(null);
    }

    return (
      <div>
        <AppBar position="static" style={{background: 'gray'}}>
            <Toolbar>
                <Link href={'/'}>
                <IconButton size="large" edge="start" color="inherit" aria-label="logo">
               
                        <MenuBookIcon/>
                   
                </IconButton>
                </Link>
               
                <Typography variant="h6" component="div" sx={{flexGrow:1}} >
                    <Link href={'/'}>
                    PROJETO LNCC
                    </Link>
                </Typography>
               
                <Stack direction='row' spacing={2}>
                    <Link href={'/participantes'}>
                        <Button color="inherit"> Participantes</Button>
                    </Link>
                    {/* eslint-disable-next-line */}
                    <Button 
                        color="inherit" 
                        id='resources-menu' 
                        onClick={handleClick} 
                        aria-controls={open ? 'resources-menu' : undefined} 
                        arias-haspopup='true' aria-expanded={open ? 'true': undefined} 
                        endIcon={<KeyboardArrowDownIcon/>}
                    > 
                        Projetos
                    </Button>
                    <Button color="inherit"> Análises</Button>
                    <Button color="inherit"> Quem Somos</Button>
                    <Button color="inherit"> Parcerias</Button>
                </Stack>
                <Menu 
                    id='resources-menu' 
                    anchorEl={ancora} 
                    open={open} 
                    MenuListProps={{'aria-labelledby': 'resources-button'}} 
                    onClose={handleClose} 
                >
                    <MenuItem onClick={handleClose}>Teste1</MenuItem>
                    <MenuItem onClick={handleClose}>Teste2</MenuItem>
                </Menu>
            </Toolbar>
        </AppBar>
      </div>
    );
}