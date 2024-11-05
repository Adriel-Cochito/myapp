import { Link } from "react-router-dom";

function ErrorCliente() {
  return (
    <div className="error">
      <h2>Cliente não encontrado.</h2>
      <h5>Não foi possível encontrar o cliente buscado</h5>
      <br />
      <br />
      <Link to="/">Volte para pagina Inicial</Link>
    </div>
  );
}

export default ErrorCliente;
