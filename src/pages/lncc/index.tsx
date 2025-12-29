import Copyright from "@/components/copyright";
import Box from "@mui/material/Box";



export default function Lncc() {
  
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '85vh',
        }}>
       
       <h1>GRUPO DE PESQUISA (Ordem Alfabética)</h1>
       <br></br>
       <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
        <li style={{fontWeight: 'bold', fontStyle: 'italic'}}>Dr. Cid Manso de Mello Vianna - Titular IMS/UERJ</li>
        <li style={{fontWeight: 'bold', fontStyle: 'italic'}}>Dr. Fabiano Saldanha Gomes de Oliveira - IMS/UERJ</li>
        <li style={{fontWeight: 'bold', fontStyle: 'italic'}}>Dra. Gabriela Bittencourt Gonzalez Mosegui - Titular ISC/UFF</li>       
        <li style={{fontWeight: 'bold', fontStyle: 'italic'}}>Dr. Gerson Nunes da Cunha - FAETERJ</li>
        <li style={{fontWeight: 'bold', fontStyle: 'italic'}}>Dr. José Karam Filho - LNCC</li>
        <li style={{fontWeight: 'bold', fontStyle: 'italic'}}>Dr. Paulo Cabral Filho - LNCC</li>       
      </ul>
        
      </div>
    );
}