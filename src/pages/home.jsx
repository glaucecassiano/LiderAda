import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import "./home.css";

export const Home = () => {
  return (
    <div>
      <Navbar />

      <div className="vertical">
        <div id="um">
          <div>
            <h2 id="titulo">Somos a LíderAda</h2>
          </div>
        </div>

        <div id="dois">
          <p>
            Nossa comunidade <strong>acolhe</strong> mulheres,{" "}
            <strong>incentiva</strong> o desenvolvimento profissional e{" "}
            <strong>fortalece</strong> as conexões que são o futuro.
          </p>
        </div>

        <div id="tres">
          <h2>Onde estão as lideranças?</h2>
          <p>
            O Brasil tem apenas 38% dos cargos de liderança ocupados por
            mulheres – e esse número é ainda menor quando olhamos para o âmbito
            político. Queremos mudar esse cenário e criar um espaço seguro para
            que mais de nós possam mudar esses números até 2030.
          </p>
          <div>
            <div className="quatro">
              <div className="dadosum">
                <h3 className="porcentagem">38%</h3>
              </div>
              <div className="dadosdois">
                <p>Mulheres em cargos de liderança*</p>
              </div>

              <div className="dadosum">
                <h3 className="porcentagem">38%</h3>
              </div>
              <div className="dadosdois">
                <p>Mulheres em cargos de liderança*</p>
              </div>
              <div className="dadosum">
                <h3 className="porcentagem">38%</h3>
              </div>
              <div className="dadosdois"></div>
              <p>Mulheres em cargos de liderança*</p>
            </div>
          </div>
          <p>*Fonte:</p>
        </div>
        <div className="vertical">
          <div id="cinco"></div>

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

        <div id="sete">navegue pelas categorias, listas</div>

        <div id="oito">
          <button className="assineaqui">
            <h1>Assine nossa newsletter</h1>
          </button>
        </div>
      </div>
      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};
