import React from 'react';

export default function mou() {
  return (
    <div
    style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '85vh',
      }}>
      <h1 >Documento Mou</h1>
      <br></br>
      <iframe
          src="/documentosPDF/Minuta_de_mou.pdf"
          style={{
            width: '100%',
            height: 'calc(85vh - 50px)', // Ajuste a altura conforme necessário
            border: 'none',
          }}
        ></iframe>
    
    </div>
  );
}