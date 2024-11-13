
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
          
            <Link href="https://dgp.cnpq.br/dgp/espelhogrupo/4623" target="_blank" rel="noopener noreferrer">
              <Image src="/images/lemas.jpg" alt="OMS Logo" width={300} height={300} />
            </Link>
       
      </div>
    );
}