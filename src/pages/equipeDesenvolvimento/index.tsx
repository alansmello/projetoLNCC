export default function EquipeDesenvolvimento() {
  
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '85vh',
        }}>
       
       <h1 style={{ textAlign: 'center', marginBottom: '20px',  fontWeight: 'bold', fontSize: '1.3em' }}>Equipe Desenvolvimento</h1>
       <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={{ border: '1px solid black', padding: '8px' }}>Nome Completo</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Vinculação</th>
            <th style={{ border: '1px solid black', padding: '8px' }}>Período</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>Alan de Souza Mello</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>Bolsista PIBIT-LNCC</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>setembro de 2022 até a presente data</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>Ana Paula de Oliveira Souza</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>Bolsista PIBIC-LNCC</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>setembro de 2022 até a presente data</td>
          </tr>
        </tbody>
      </table>

      </div>
    );
}