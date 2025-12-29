import Copyright from "@/components/copyright";
import Navigator from "@/components/navigator";
import Box from "@mui/material/Box";
//import Image from "next/image";
//import { Inter } from "next/font/google";



//const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '85vh',
        }}>

    <p>A cooperação cientifica entre o grupo de pesquisa da Coordenação de Modelagem Computacional - COMOD do Laboratório Nacional de Computação Científica – LNCC e o Laboratório de Estatística e Aplicada a Saúde - LEMAS do instituto de Medicina Social – IMS da Universidade do Estado do Rio de Janeiro, tem como objetivo concentrar esforços em interesses em temas que venham a complementar os seus conhecimentos e experiências dentro das suas respectivas áreas de atuações.</p>
      <p>Nesse sentido, o grupo da COMOD atuando na área de modelagem computacional com vasta experiência no processamento de alto desempenho, Ciências de dados entre outras especialidades vem convergir com o grupo do LEMAS com ênfase na Saúde Coletiva e com experiência nas estatísticas, modelos matemáticos aplicados a saúde em diversos estudos sobre custos com doenças no SUS, medicamentos entre outros num projeto sobre os custos das internações no Sistema Único de Saúde – SUS, no que tange as análises estatísticas, modelagem e análises de séries temporais.</p>
      <p>O projeto se justifica porque os gastos com as doenças são críticos, causam problemas econômicos e financeiros e pressionam o orçamento público em quase todos os países. Este sítio se propõe em apresentar as análises econômicas de modo a explorar múltiplos aspectos da gestão em saúde e dos gastos com as internações no Sistema Único de Saúde (SUS), no período de 2012 até 2023. Os resultados das análises permitirão aos gestores públicos, o planejamento e a organização dos serviços relacionados visando o monitoramento e a avaliação do estado de saúde da população, bem como os custos dispendidos pelo SUS. </p>
      <p>Por meio de uma metodologia própria foram extraídos os registros de Oncologia  e Cardiologia desses anos com os campos constantes no Botão “Campos utilizados”..</p>
      <br></br>
  
          </div>
  );
}
