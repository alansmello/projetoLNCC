import { Link, Typography } from "@mui/material";



export default function Copyright() {
  
 
        return (
            <Typography variant="body2" color="text.secondary" align="center">
              {'Copyright © '}
              <Link color="inherit" href="http://www.lncc.br">
                LNCC
              </Link>{' '}
              {new Date().getFullYear()}.
            </Typography>
          );
        }
