import * as React from 'react';
import Divider from '@mui/material/Divider';
import Drawer, { DrawerProps } from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import TabIcon from '@mui/icons-material/Tab';
import PermContactCalendarIcon from '@mui/icons-material/PermContactCalendar';import PeopleIcon from '@mui/icons-material/People';
import HomeIcon from '@mui/icons-material/Home';
import GroupsIcon from '@mui/icons-material/Groups';import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
import PermMediaOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActual';
import PublicIcon from '@mui/icons-material/Public';
import SettingsEthernetIcon from '@mui/icons-material/SettingsEthernet';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';
import TimerIcon from '@mui/icons-material/Timer';
import SettingsIcon from '@mui/icons-material/Settings';
import PhonelinkSetupIcon from '@mui/icons-material/PhonelinkSetup';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ComputerIcon from '@mui/icons-material/Computer';
import FavoriteIcon from '@mui/icons-material/Favorite';
import SchoolIcon from '@mui/icons-material/School';
import MedicationIcon from '@mui/icons-material/Medication';
import Link from 'next/link';
import { useState } from 'react';
import Typography from '@mui/material/Typography';
import { useRouter } from 'next/router';


const categories = [
  {
    id: 'Linhas de Pesquisas',
    children: [
      {
        id: 'Oncologia' ,
        icon: <LocalHospitalIcon />,
        route: 'oncologia'
      },
      { 
        id: 'Cardiologia', 
        icon: <FavoriteIcon />,         
        route:'cardiologia'
         },
      // { 
      //   id: 'Modelagem Computacional', 
      //   icon: <ComputerIcon />,
      //   route:'modelagemComputacional'
      // },
       {/*{ id: 'Cardiologia', icon: <FavoriteBorderIcon /> },*/}
      /*{ id: 'Hosting', icon: <PublicIcon /> },
      { id: 'Functions', icon: <SettingsEthernetIcon /> },
      {
        id: 'Machine learning',
        icon: <SettingsInputComponentIcon />,
      },
      { id: 'Teste 2', icon: <SettingsEthernetIcon /> },*/
    ],
  },
  {
    id: 'Grupos de Pesquisas',
    children: [
      { 
        id: 'LEMAS/IMS', 
        icon: <MedicationIcon/>,
        route: 'ims' 
       },
      { 
        id: 'LNCC', 
        icon: <SchoolIcon />,
        route:'lncc'
       },
       { 
        id: 'Campos de Pesquisa', 
        icon: <SchoolIcon />,
        route:'camposPesquisa'
       }
      /*{ 
        id: 'FAETERJ', 
        icon: <SchoolIcon />,
        route:'faeterj'
       },*/
      
    ],
  },
  {
    id: '',
    children: [
      { 
        id: 'Documentações', 
        icon: <TabIcon/>,
        route: 'documentacoes' 
       },
     
      
    ],
  },
  {
    id: '',
    children: [
      { 
        id: 'Contatos', 
        icon: <PermContactCalendarIcon/>,
        route: 'contatos' 
       },
       { 
        id: 'Equipe de Desenvolvimento do Site', 
        icon: <GroupsIcon/>,
        route: 'equipeDesenvolvimento' 
       },
      
    ],
  },
];

const item = {
  py: '2px',
  px: 3,
  color: 'white',
  '&:hover, &:focus': {
    bgcolor: 'rgba(255, 255, 255, 0.08)',
  },
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  fontWeight:'bold' ,
  py: 1.5,
  px: 3,
};

export default function Navigator(props: DrawerProps) {
  const { ...other } = props;
  const [activeItem, setActiveItem] = useState('Apresentacao');
  const router = useRouter();
  
  const handleItemClick = (route: string | undefined, active: string) => {
    
    router.push(`/${route}`);
    setActiveItem(active);
  };
  
  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
      <ListItemButton onClick={() => router.push('/') }>
        <ListItem sx={{ ...item, ...itemCategory, fontSize: 18, color: '#fff', height:'100px' }}>
        <Typography color="inherit" variant="h5" component="h1">
                Cooperação Científica 
              </Typography>
        </ListItem>
        </ListItemButton>
       
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: '#101F33'}}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText   sx={{ fontWeight: 'bold', color: '#ff0000', '& span': { fontWeight: 'bold' } }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, route }) => (
              <ListItem disablePadding key={childId}>
              
              <ListItemButton selected={activeItem === childId} sx={item} onClick={() => handleItemClick(route, activeItem)}>
              <ListItemIcon
                    sx={{
                      color: childId === 'Contatos' || childId === 'Equipe de Desenvolvimento do Site' ? '#ff0000' : 'inherit',
                    }}
                  >
                    {icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={childId}
                    sx={{
                      color: childId === 'Contatos' || childId === 'Equipe de Desenvolvimento do Site' ? '#ff0000' : 'inherit',
                    }}
                  />
                </ListItemButton>
              
              </ListItem>
            ))}
            <Divider sx={{ mt: 2 }} />
          </Box>
        ))}
      </List>
    </Drawer>
  );
}