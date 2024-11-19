
import Link from '@mui/material/Link';
import Image from 'next/image';

export default function Ims() {
  
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '85vh',
        }}>
          
            <Link 
              href="https://dgp.cnpq.br/dgp/espelhogrupo/4623" 
              target="_blank" rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'black' }}
              >
              <h1 style={{  fontWeight: 'normal' }}>LEMAS/IMS</h1>
            </Link>
       
      </div>
    );
}