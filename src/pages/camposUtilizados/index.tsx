import React from 'react';

export default function CamposUtilizados() {
  return (
    <div
    style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '85vh',
      }}>
      <h1 >Campos Utilizados</h1>
      <br></br>
      <iframe
          src="/documentosPDF/tabela.pdf"
          style={{
            width: '100%',
            height: 'calc(85vh - 50px)', // Ajuste a altura conforme necessário
            border: 'none',
          }}
        ></iframe>
    
    </div>
  );
}