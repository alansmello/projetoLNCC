import * as React from 'react';
import Divider from '@mui/material/Divider';
import Drawer, { DrawerProps } from '@mui/material/Drawer';
import List from '@mui/material/List';
import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import HomeIcon from '@mui/icons-material/Home';
import PeopleIcon from '@mui/icons-material/People';
import DnsRoundedIcon from '@mui/icons-material/DnsRounded';
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
import SchoolIcon from '@mui/icons-material/School';
import MedicationIcon from '@mui/icons-material/Medication';


const categories = [
  {
    id: 'Linhas de Pesquisas',
    children: [
      {
        id: 'Cancer',
        icon: <LocalHospitalIcon />,
        active: true,
      },
      { id: 'Cardiologia', icon: <FavoriteBorderIcon /> },
      { id: 'Modelagem Computacional', icon: <ComputerIcon /> },
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
    id: 'Colaboradores',
    children: [
      { id: 'Uerj', icon: <SchoolIcon /> },
      { id: 'UFRJ', icon: <SchoolIcon /> },
      { id: 'INCA', icon: <MedicationIcon /> },
      
    ],
  },
];

const item = {
  py: '2px',
  px: 3,
  color: 'rgba(255, 255, 255, 0.7)',
  '&:hover, &:focus': {
    bgcolor: 'black',
  },
};

const itemCategory = {
  boxShadow: '0 -1px 0 rgb(255,255,255,0.1) inset',
  py: 1.5,
  px: 3,
};

export default function Navigator(props: DrawerProps) {
  const { ...other } = props;



  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        <ListItem sx={{ ...item, ...itemCategory, fontSize: 22, color: '#fff', background:'black' }}>
        <img src="/images/lnccPrincipal.png" alt="LNCC Logo" width={500} height={500} />
        </ListItem>
        <ListItem sx={{ ...item, ...itemCategory }}>
           {/* 
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
        <ListItemText>Cooperação Científica</ListItemText>*/}
        </ListItem>
        {categories.map(({ id, children }) => (
          <Box key={id} sx={{ bgcolor: 'black' }}>
            <ListItem sx={{ py: 2, px: 3 }}>
              <ListItemText  sx={{ color: '#fff' }}>{id}</ListItemText>
            </ListItem>
            {children.map(({ id: childId, icon, active }) => (
              <ListItem disablePadding key={childId}>
                <ListItemButton selected={active} sx={item}>
                  <ListItemIcon>{icon}</ListItemIcon>
                  <ListItemText>{childId}</ListItemText>
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