
export default function TotalRegistrosPorEstado() {
  
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '85vh',
        }}>
     
        <iframe
          src="/documentosPDF/POR_ESTADO.pdf"
          style={{
            width: '100%',
            height: 'calc(85vh - 50px)', // Ajuste a altura conforme necessário
            border: 'none',
          }}
        ></iframe>
      </div>
    );
  }