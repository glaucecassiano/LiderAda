import Axios from "axios";
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer";

export const Cadastro = () => {
  const handleSubmit = (event) => {
    // evita que atualize a pagina
    event.preventDefault();

    // ler inputs
    const email = document.getElementById("email").value;
    console.log(email);

    const password = document.getElementById("password").value;
    console.log(password);

    const name = document.getElementById("name").value;
    console.log(name);

    const age = document.getElementById("age").value;
    console.log(age);

    const genero = document.getElementById("genero").value;
    console.log(genero);

    const raca = document.getElementById("raca").value;
    console.log(raca);

    const uf = document.getElementById("uf").value;
    console.log(uf);

    Axios.post("http://localhost:8000/users/create", { email, password });
  };

  const navigate = useNavigate();

  const redirecionaParaCadastro = (event) => {
    event.preventDefault();

    return navigate("/login");
  };

  return (
    <div>
      <div>
        {" "}
        <Navbar></Navbar>
      </div>
      <h1>Lidere Conosco</h1>
      <form>
        <div>
          <label>
            Nome: <input type="text" name="name" id="name" required />
          </label>
        </div>
        <div>
          <label>
            Username:{" "}
            <input type="text" name="username" id="username" required />
          </label>
        </div>
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
          <label>
            Idade: <input type="date" name="age" id="age" />
          </label>
        </div>
        <div>
          <label>
            Gênero:{" "}
            <select type="select" name="genero" id="genero">
              <option value="F">Feminino</option>
              <option value="M">Masculino</option>
            </select>
          </label>
        </div>
        <label>
          Raça:
          <select type="select" name="raca" id="raca">
            <option value="B">Branca</option>
            <option value="P">Preta</option>
            <option value="I">Indigena</option>
          </select>
        </label>

        <div>
          <div>
            <label>
              Estado: <input type="text" name="uf" id="uf" />
            </label>
          </div>
          <button onClick={handleSubmit}>Cadastrar</button>
          <button onClick={redirecionaParaCadastro}>Faça Login</button>
        </div>
      </form>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};
