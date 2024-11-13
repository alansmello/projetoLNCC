import React from 'react';

export default function CamposPesquisa() {
  return (
    <div
    style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '85vh',
      }}>
      <h1 >Campos de Pesquisa</h1>
      <br></br>
      <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
        <li style={{fontWeight: 'bold', fontStyle: 'italic'}}>Dr. José Karam Filho (LNCC)</li>
        <li style={{fontWeight: 'bold', fontStyle: 'italic'}}>Dr. Fabiano Saldanha Gomes de Oliveira (IMS)</li>
        <li style={{fontWeight: 'bold', fontStyle: 'italic'}}>Dr. Paulo Cesar Filho (LNCC)</li>
        <li style={{fontWeight: 'bold', fontStyle: 'italic'}}>Dr. Gerson Nunes da Cunha (FAETERJ)</li>       
      </ul>
    </div>
  );
}