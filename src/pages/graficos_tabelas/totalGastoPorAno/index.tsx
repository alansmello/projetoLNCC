export default function TotalGastoPorAno() {
  
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '85vh',
      }}>
   
      <iframe
        src="/documentosPDF/4-totais-gastos-por-ano-e-medias-das-aihs-por-ano--corrigidos-pelos-indices-ipca-geral-e-de-saude.pdf"
        style={{
          width: '100%',
          height: 'calc(85vh - 50px)', // Ajuste a altura conforme necessário
          border: 'none',
        }}
      ></iframe>
    </div>
  );
}