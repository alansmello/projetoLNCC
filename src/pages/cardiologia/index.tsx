import Link from "next/link";


export default function Cardiologia() {
  
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '85vh',
        }}>
       
       <h1>Cardiologia</h1>
       <h1>GRÁFICOS E TABELAS DISPONÍVEIS</h1>
      <br></br>
      <Link href={"/graficos_tabelas/cardiologia/internacoesPorMes"} style={{fontWeight: 'bold', fontStyle: 'italic'}}>1 – Total de internações por Mês</Link>
      <Link href={"/graficos_tabelas/cardiologia/internacoesPorAno"} style={{fontWeight: 'bold', fontStyle: 'italic'}}>2 – Total de internações por Ano</Link>
      <Link href={"/graficos_tabelas/cardiologia/totalRegistrosPorRegiao"} style={{fontWeight: 'bold', fontStyle: 'italic'}}>3 – Total de Registros por Região</Link>
 
      <Link href={"/graficos_tabelas/cardiologia/totalRegistrosPorEstado"} style={{fontWeight: 'bold', fontStyle: 'italic'}}>4 - Total de Registros por Estado</Link>
      <Link href={"/graficos_tabelas/cardiologia/totalEstadoOrdemDec"} style={{fontWeight: 'bold', fontStyle: 'italic'}}>5 – Total de Registros por Estado em Ordem Decrescente</Link>
      <Link href={"/graficos_tabelas/cardiologia/totalEstadoOrdemCresc"} style={{fontWeight: 'bold', fontStyle: 'italic'}}>6 – Total de Registros por Estado em Ordem Crescente</Link>
      </div>
    );
}