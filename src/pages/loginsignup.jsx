import Axios from "axios";
import { useNavigate } from "react-router-dom";
import "./loginsignup.css";
import { Navbar } from "../components/navbar";


export const LoginSignup = () => {
  const handleSubmit = (event) => {
    // evita que atualize a pagina
    event.preventDefault();

    // ler inputs
    const email = document.getElementById("email").value;

    const password = document.getElementById("password").value;

    Axios.post("http://localhost:5000/login", { email, password });
  };

  const navigate = useNavigate();

  const redirecionaParaCadastro = (event) => {
    event.preventDefault();

    return navigate("/cadastro");
  };

  return (
    <div className="tela">
        <div> <Navbar>
      </Navbar> </div>
      <form className="login">
        <div>
          <label>
            Email: <input type="email" name="email" id="email" required />
          </label>
        </div>
        <div>
          <label>
            Senha:{" "}
            <input type="password" name="password" id="password" required />
          </label>
        </div>
        <div>
          <button onClick={handleSubmit}>Entre</button>
          <button onClick={redirecionaParaCadastro}>Junte-se a nós</button>
        </div>
      </form>
      </div>
          
  );
};
