import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import "./forum.css";
import Marcador from "../assets/marcador.svg";
import MarcadorVazio from "../assets/marcadorvazio.svg";

export const Forum = () => {
  return (
    <div className="base">
      <div>
        <Navbar></Navbar>
      </div>
      <div className="topicos">
        <div id="entrada">
          <div className="marcadoretitulo">
            <h2>Remuneração</h2>
            <img id="marcador" src={Marcador} alt="marcador" />
          </div>
          <p>Papos sobre #salários, #cargos e #equidade</p>
          <div className="marcadoretitulo">
            {" "}
            <h2>Remuneração</h2>
            <img id="marcador" src={Marcador} alt="marcador" />
          </div>
          <p>Papos sobre #salários, #cargos e #equidade</p>
          <div className="marcadoretitulo">
            {" "}
            <h2>Remuneração</h2>
            <img id="marcador" src={Marcador} alt="marcador" />
          </div>
          <p>Papos sobre #salários, #cargos e #equidade</p>
        </div>
        <div id="entrada">
          <div className="marcadoretitulo">
            <h2>Maternidade</h2>
            <img id="marcador" src={MarcadorVazio} alt="marcador" />
          </div>
          <p>
            Este tópico aborda questões relacionadas a maternidade e trabalho,
            jornada dupla, cultura organizacional e afins.
          </p>
          <div className="marcadoretitulo">
            <h2>Maternidade</h2>
            <img id="marcador" src={MarcadorVazio} alt="marcador" />
          </div>
          <p>
            Este tópico aborda questões relacionadas a maternidade e trabalho,
            jornada dupla, cultura organizacional e afins.
          </p>
          <div className="marcadoretitulo">
            <h2>Maternidade</h2>
            <img id="marcador" src={MarcadorVazio} alt="marcador" />
          </div>
          <p>
            Este tópico aborda questões relacionadas a maternidade e trabalho,
            jornada dupla, cultura organizacional e afins.
          </p>
        </div>
      </div>
      <div id="blocodois">
        <h1>#TópicosPopulares</h1>
        <div id="banner">
          <div id="textobanner">
            <h3>Banner</h3>
            <p>imagem + titulo do tópico</p>
          </div>
        </div>
        <div id="banner">
          <div id="textobanner">
            <h3>Banner</h3>
            <p>imagem + titulo do tópico</p>
          </div>
        </div>
        <div id="banner">
          <div id="textobanner">
            <h3>Banner</h3>
            <p>imagem + titulo do tópico</p>
          </div>
        </div>
        <h1>Junte-se a nós</h1>
        <Footer></Footer>
      </div>
    </div>
  );
};
