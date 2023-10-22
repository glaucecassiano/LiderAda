import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from "react-router-dom";
import { Navbar } from "../components/navbar";
import { Footer } from "../components/footer"

export const Cadastro = () => {
  // toast.configure()
  const fetchUser = () => {
    return toast.success("Cadastro Realizado com sucesso")
    // return navigate("/login");
  }
  
  const handleSubmit = (event) => {
    // evita que atualize a pagina
    event.preventDefault();

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const name = document.getElementById("name").value;
    const username = document.getElementById("username").value;
    const age = document.getElementById("age").value;
    const raca = document.getElementById("raca").value;
    const genero = document.getElementById("genero").value;
    const uf = document.getElementById("uf").value;
    
    const newUser = {
      email,
      password,
      name,
      username,
      age,
      raca,
      genero,
      uf
    }


      fetch("http://localhost:8000/users/create", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser)
      }).then(fetchUser)
    

  };

  const navigate = useNavigate();

  const redirecionaParaCadastro = (event) => {
    event.preventDefault();

    return navigate("/login");
  };

  return (
  
    <div>
        <div> <Navbar>
      </Navbar></div>
      <h1>Lidere Conosco</h1>
      <form>
        <div>
          <label>
            Nome: <input type="text" name="name" id="name" required />
          </label>
        </div>
        <div>
          <label>
            Username: <input type="text" name="username" id="username" required />
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
            Idade: <input type="text" name="age" id="age" />
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
