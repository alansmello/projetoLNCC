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

    <p>Os gastos com as doenças são críticos, causam problemas econômicos e financeiros e pressionam o orçamento público em quase todos os países. No Brasil, para além do atendimento e das estratégias de decisão dos gestores, a informação e a tecnologia da informação em saúde buscam garantir a transparência e a segurança dos dados como direito de cidadania, a fim de promover o exercício do controle social e a articulação da saúde com as demais políticas sociais e econômicas do país.</p>
      <p>Este trabalho se propõe em apresentar uma análise econômica de modo a explorar múltiplos aspectos da gestão em saúde e dos gastos com as internações por câncer no Sistema Único de Saúde (SUS), a partir de 2012 até presente data.</p>
      <p> Por meio de uma metodologia própria foram extraídos os registros desses anos com os campos constantes nesta tabela. </p>
      <p>A justificativa para este trabalho está calcada nos resultados das análises, que permitirá ao gestor público, o planejamento e a organização dos serviços relacionados visando o monitoramento e a avaliação do estado de saúde da população, bem como os custos dispendidos pelo SUS.</p>
      <br></br>
  
          </div>
  );
}
