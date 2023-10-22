import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import "./forum.css";
import Marcador from "../assets/marcador.svg";
import MarcadorVazio from "../assets/marcadorvazio.svg";

export const Forum = () => {
  return (
    <div>
      <div>
        <div>
          <Navbar></Navbar>
        </div>
        <div id="bloco um">
          <div id="entradaum">
            <h2>Remuneração</h2>
            <img id="marcador" src={Marcador} alt="marcador" />
            <p>Papos sobre #salários, #cargos e #equidade</p>
            <h2>Remuneração</h2>
            <img id="marcador" src={MarcadorVazio} alt="marcador" />

            <p>Papos sobre #salários, #cargos e #equidade</p>
            <h2>Remuneração</h2>
            <img id="marcador" src={MarcadorVazio} alt="marcador" />

            <p>Papos sobre #salários, #cargos e #equidade</p>
            <h2>Remuneração</h2>
            <img id="marcador" src={MarcadorVazio} alt="marcador" />

            <p>Papos sobre #salários, #cargos e #equidade</p>
            <h2>Remuneração</h2>
            <img id="marcador" src={MarcadorVazio} alt="marcador" />

            <p>Papos sobre #salários, #cargos e #equidade</p>
          </div>
          <div id="entradadois"></div>
          <h1>Maternidade</h1>
          <img id="marcador" src={MarcadorVazio} alt="marcador" />

          <p>
            Este tópico aborda questões relacionadas a maternidade e trabalho,
            jornada dupla, cultura organizacional e afins.
          </p>
          <div></div>

          <div id="blocodois">
            <h1>#TópicosPopulares</h1>
            <div id="banner">
              <div id="textobanner">
                <h3>Banner</h3>
                <p>imagem + titulo do tópico</p>
              </div>
            </div>

            <div id="seis"></div>

            <div id="banner">
              <div id="textobanner">
                <h3>Banner</h3>
                <p>imagem + titulo do tópico</p>
              </div>
            </div>
          </div>
          <div id="footerum"></div>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};
