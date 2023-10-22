import { Link } from "react-router-dom";
import "./navbar.css";
import { useNavigate } from "react-router-dom";

export const Navbar = () => {
  const navigate = useNavigate();

  const CadastroPage = (event) => {
    event.preventDefault();

    return navigate("/cadastro");
  };

  return (
    <nav className="nav">
      <Link to="/">
        {" "}
        <h1>LíderAda</h1>
      </Link>

      <ul>
        <li>
          <Link to="/">Categorias</Link>
        </li>
        <li>
          <Link to="/forum">Fórum</Link>
        </li>
        <li>
          <Link to="/materiais">Materiais</Link>
        </li>
        <div>
          <button onClick={CadastroPage}>Faça Parte</button>
        </div>
      </ul>
    </nav>
  );
};
