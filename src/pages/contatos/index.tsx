import React from 'react';

export default function Contatos() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '85vh',
        textAlign: 'center',
      }}>
      <h1 style={{ fontWeight: 'bold', fontSize: '1.5em', marginBottom: '20px'  }}>Contatos</h1>
      <h3 style={{ fontWeight: 'bold' }}>Laboratório Nacional de Computação Científica – LNCC</h3>
      <p>
        <a href="mailto:gestão-saude@lncc.br" style={{ textDecoration: 'none', color: 'inherit' }}>
          gestão-saude@lncc.br
        </a>
      </p>
    </div>
  );
}
