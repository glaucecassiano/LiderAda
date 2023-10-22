import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import "./home.css";


export const Home = () => {
  return (
    <div>
      <Navbar/>

      <div className="vertical">
        <div id="um">
            <div >
            <h2>Somos a LíderAda</h2>
            <p>Uma comunidade feita por e para <br></br> mulheres, líderes empreendedoras e dispostas a trocar conhecimentos.</p>
            </div>
        </div>

        <div id="dois">
          <p>objetivo da comunindade, link quem somos</p>
        </div>

        <div id="tres">
          <p> Dados sobre liderança feminina</p>
        </div>

        <div className="horizontal">
          <div id="quatro"></div>

          <p>tópicos quentes</p>

          <div id="cinco"></div>

          <p>tópicos quentes</p>
        </div>

        <div id="seis">navegue pelas categorias, listas</div>

        <div id="sete">
          <p> assine nossa newsletter</p>
        </div>

        <div id="rodape">
          <p> rodape </p>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};
