
export default function TotalEstadoOrdemDec() {
  
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '85vh',
        }}>
     
        <iframe
          src="/documentosPDF/cardiologia-totalRegistrosPorEstadosOrdemDecrescente.pdf"
          style={{
            width: '100%',
            height: 'calc(85vh - 50px)', // Ajuste a altura conforme necessário
            border: 'none',
          }}
        ></iframe>
      </div>
    );
  }
