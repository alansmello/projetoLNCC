
import Link from "next/link";

export default function Documentacoes() {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: '85vh',
      }}
    >
      <h1>Documentações</h1>
      <br></br>

      <ul style={{ listStyleType: 'disc', paddingLeft: '20px' }}>
        <li>
          <Link href={"ipca"} style={{fontWeight: 'bold', fontStyle: 'italic'}}>
            Cálculo IPCA
          </Link>
        </li>
        {/* <li>
          <Link href="/outra-documentacao" color="inherit" underline="hover">
            Outra Documentação
          </Link>
        </li>
        <li>
          <Link href="/mais-documentacao" color="inherit" underline="hover">
            Mais Documentação
          </Link>
        </li> */}
      </ul>
    </div>
  );
}
