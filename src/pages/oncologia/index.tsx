import Link from "next/link";



export default function Oncologia() {
  
    return (
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '85vh',
        }}>
       
      <h1 style={{fontWeight: 'bold'}}>ONCOLOGIA</h1>
       <br></br>
       

      <h1>GRÁFICOS E TABELAS DISPONÍVEIS</h1>
      <br></br>
      <Link href={"/graficos_tabelas/internacaoPorAno"} style={{fontWeight: 'bold', fontStyle: 'italic'}}>1 – Quantidade de registros de internações por ano</Link>
      <Link href={"/graficos_tabelas/internacaoPorMes"} style={{fontWeight: 'bold', fontStyle: 'italic'}}>2 – Quantidade de registros de internações por mês</Link>
      <Link href={"/graficos_tabelas/registrosPorEstados"} style={{fontWeight: 'bold', fontStyle: 'italic'}}>3 – Quantidade de registros por estados</Link>
      <Link href={"/graficos_tabelas/totalGastoPorAno"} style={{fontWeight: 'bold', fontStyle: 'italic'}}>4 - Totais de gastos por ano e médias das AIHs por ano, corrigidos pelos índices ipca geral e de saúde</Link>
      <Link href={"/graficos_tabelas/totalGastoPorEstado"} style={{fontWeight: 'bold', fontStyle: 'italic'}}>5 – Total de gastos por estados da federação</Link>
      <Link href={"/graficos_tabelas/totalGastoPorRegiao"} style={{fontWeight: 'bold', fontStyle: 'italic'}}>6 – Total de gastos por região</Link>
      <Link href={"/graficos_tabelas/totalGastoPorQuantTipoUnidGestora"} style={{fontWeight: 'bold', fontStyle: 'italic'}}>7 – Total de gastos de internações, por quantidade de tipo de unidade gestora</Link>
      <Link href={"/graficos_tabelas/totalGastoPorQuantTipoUnidGestoraPorRegiao"} style={{fontWeight: 'bold', fontStyle: 'italic'}}>8 – Total de gastos de internações por quantidade de tipo de unidade gestora e por região</Link>
      <Link href={"/graficos_tabelas/totalGastoPorNatJurContInter"} style={{fontWeight: 'bold', fontStyle: 'italic'}}>9 – Total de gastos por natureza jurídica dos estabelecimentos de saúde com contagem de internações</Link>
      <Link href={"/graficos_tabelas/totalGastoPorCaraterInter"} style={{fontWeight: 'bold', fontStyle: 'italic'}}>10 – Total de gastos com contagem de internações por caráter da internação</Link>
      <Link href={"/graficos_tabelas/totalGastoPorCaraterInterRegiao"} style={{fontWeight: 'bold', fontStyle: 'italic'}}>11 – Total de gastos com contagem de internações por caráter da internação e por região</Link>
      <Link href={"/graficos_tabelas/totalGastoComplex"} style={{fontWeight: 'bold', fontStyle: 'italic'}}>12 – Total de gastos com contagem de autorização de internação hospitalar (AIH) por complexidade</Link>
      <Link href={"/graficos_tabelas/totalGastoComplexRegiao"} style={{fontWeight: 'bold', fontStyle: 'italic'}}>13 – Total de gastos com contagem de autorização de internação hospitalar (AIH) por complexidade e região</Link>
      <Link href={"/graficos_tabelas/totalGastoAIHRacaCor"} style={{fontWeight: 'bold', fontStyle: 'italic'}}>14 – Total de gastos com contagem de AIH por raça e cor</Link>
      <Link href={"/graficos_tabelas/totalGastoAIHRacaCorRegiao"} style={{fontWeight: 'bold', fontStyle: 'italic'}}>15 – Total de gastos com contagem de AIH por raça e cor, por região</Link>
      <Link href={"/graficos_tabelas/totalGastoAIHEtnias"} style={{fontWeight: 'bold', fontStyle: 'italic'}}>16 – Total de gastos com contagem de AIH por Etnias</Link>
      <Link href={"/graficos_tabelas/totalGastoAIHProcRealizados"} style={{fontWeight: 'bold', fontStyle: 'italic'}}>17 – Total de gastos com contagem de AIH por procedimentos realizados</Link>
      <Link href={"/graficos_tabelas/totalGastoAIHDiagPrinc"} style={{fontWeight: 'bold', fontStyle: 'italic'}}>18 – Total de gastos com contagem de AIH por diagnostico principal</Link>
      <Link href={"/graficos_tabelas/totalGastoAIHSexo"} style={{fontWeight: 'bold', fontStyle: 'italic'}}>19 – Total de gastos com contagem de AIH por sexo</Link>
      <Link href={"/graficos_tabelas/totalGastoAIHSexoDiagPrinc"} style={{fontWeight: 'bold', fontStyle: 'italic'}}>20 – Total de gastos com contagem de AIH por sexo e por diagnostico principal</Link>

      </div>
    );
}