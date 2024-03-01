import { Link, Typography } from "@mui/material";

interface CopyrightProps {
  name: string;
  href: string;
}

export default function Copyright({ name, href }: CopyrightProps) {

 
 
        return (
            <Typography variant="body2" color="text.secondary" align="center">
              {'Copyright © '}
              <Link color="inherit" href={href}>
                {name}
              </Link>{' '}
              {new Date().getFullYear()}.
            </Typography>
          );
        }
