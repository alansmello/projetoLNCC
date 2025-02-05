export default function EquipeDesenvolvimento() {
  
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '85vh',
          padding: '20px'
        }}>
       
       <h1 style={{ textAlign: 'center', marginBottom: '20px',  fontWeight: 'bold', fontSize: '1.3em' }}>Equipe de Desenvolvimento</h1>

       <hr style={{  width: '100%', marginBottom: '20px', borderColor: 'black', borderWidth: '0.5px' }} />

       <div style={{ textAlign: 'center', marginBottom: '20px' }}>
        <p style={{ margin: '0', fontWeight: 'bold' }}>Orientadores:</p>
        <p style={{ margin: '0' }}>Dr. Paulo Cabral Filho </p>
        <p style={{ margin: '0' }}>Dr. José Karam Filho </p>
       </div>


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
            <td style={{ border: '1px solid black', padding: '8px' }}>Fernanda Xabudé Moreira Bomfilioli</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>Bolsista PIBIC-LNCC</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>Dezembro de 2024 até a presente data</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>Gabriel Eduardo Pontes Amaral</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>Bolsista PIBIC-LNCC</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>Janeiro de 2025 até a presente data</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>Alan de Souza Mello</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>Bolsista PIBIT-LNCC</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>Setembro de 2022 até dezembro de 2024</td>
          </tr>
          <tr>
            <td style={{ border: '1px solid black', padding: '8px' }}>Ana Paula de Oliveira Souza</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>Bolsista PIBIC-LNCC</td>
            <td style={{ border: '1px solid black', padding: '8px' }}>Setembro de 2022 até dezembro de 2024</td>
          </tr>
        </tbody>
      </table>
     

      </div>
    );
}