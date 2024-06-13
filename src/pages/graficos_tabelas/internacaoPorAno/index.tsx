


export default function InternacaoPorAno() {
  
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '85vh',
      }}>
   
      <iframe
        src="/documentosPDF/1-quantidades-de-registros-por-ano.pdf"
        style={{
          width: '100%',
          height: 'calc(85vh - 50px)', // Ajuste a altura conforme necessário
          border: 'none',
        }}
      ></iframe>
    </div>
  );
}