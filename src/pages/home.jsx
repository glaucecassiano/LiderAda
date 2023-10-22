import { Footer } from "../components/footer";
import { Navbar } from "../components/navbar";
import "./home.css";
import BannerDois from "../assets/Bannerdois.svg";

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
          <img src={BannerDois} alt="" />
          <p>
            Nossa comunidade <strong>acolhe</strong> mulheres,
            <strong>incentiva</strong> o desenvolvimento profissional e
            <strong>fortalece</strong> as conexões que são o futuro. <br></br>
            <button>Saiba Mais</button>
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
              <div className="bolaum">
                <h3 className="porcentagem">38%</h3>
              </div>
              <div className="dadosdois">
                <p>Mulheres em cargos de liderança*</p>
              </div>

              <div className="boladois">
                <h3 className="porcentagem">38%</h3>
              </div>
              <div className="dadosdois">
                <p>Mulheres em cargos de liderança*</p>
              </div>
              <div className="bolatres">
                <h3 className="porcentagem">38%</h3>
              </div>
              <div className="dadosdois"></div>
              <p>Mulheres em cargos de liderança*</p>
            </div>
          </div>
          <p>*Fonte: IBGE Censo 2013.</p>
        </div>
      </div>
      <div className="banners">
        <div id="cinco">
          <h1>#TópicosPopulares</h1>
        </div>
        <div id="seis">
          <div id="banner">
            <div id="textobannerum">
              <h3>Remuneração</h3>
              <p>O que estão falando sobre #salários, #cargos e #valor</p>
            </div>
          </div>
        </div>

        <div id="sete">
          <div id="banner">
            <div id="textobannerdois">
              <h3>Saúde Mental</h3>
              <p>
                Os principais assuntos sobre #saudemental, #autocuidado e
                #equilibro
              </p>
            </div>
          </div>
        </div>

        <div id="oito">
          <div id="banner">
            <div id="textobannertres">
              <h3>Maternidade</h3>
              <p>Como lidar com a #jornadadupla, #mãesolo e #mãeslíderes</p>
            </div>
          </div>
        </div>
      </div>
      <div id="nove"></div>

      <div id="newsletter">
        <h2 className="newsletter-title">Assine nossa newsletter</h2>
        <div className="newsletter-content">
          <div className="noticias">
            <h2>
              Fique por dentro das <br></br> notícias da LíderAda
            </h2>
          </div>
          <div className="email">
            <input type="text" placeholder="Email" className="email" />
            <button>Inscrever-se</button>
          </div>
        </div>
      </div>
      <div></div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};
