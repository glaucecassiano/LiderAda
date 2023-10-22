import { Navbar } from "../components/navbar";
import "./quemsomos.css";
import { Footer } from "../components/footer";

export const QuemSomos = () => {
  return (
    <div className="vertical">
      <div>
        {" "}
        <Navbar> </Navbar>
      </div>
      <div id="um">
        <h2>Somos a LíderAda</h2>
        <p>
          Uma comunidade feita por e para mulheres, líderes, empreendedoras e
          dispostas a trocar conhecimentos. Queremos ver mais mulheres tomando
          as decisões em empresas privadas, públicas e em todos os setores.
          Nosso espaço foi feito para você conhecer, se conectar e inspirar
          outras mulheres. Vamos juntas?
        </p>
        <img src="" alt="" />
      </div>

      <div id="dois">
        <h2>O que você encontra na LíderAda</h2>
        <p>
          <img src="" alt="" />
          Conversas abertas sobre trabalho, maternidade, equidade e muito mais
        </p>
        <p>
          <img src="" alt="" />
          Materiais de apoio para você aprofundar seus conhecimentos
        </p>
        <p>
          <img src="" alt="" />
          Mentorias individuais e em grupo para avançar cada vez mais na sua
          carreira
        </p>
        <p>
          <img src="" alt="" />
          Conexões com lideranças de diversos segmentos, níveis e lugares do
          mundo
        </p>
      </div>

      <div id="tres">
        <p>
          O Brasil tem apenas 38% dos cargos de liderança ocupados por mulheres
          – e esse número é ainda menor quando olhamos para o âmbito político.
          Queremos mudar esse cenário e criar um espaço seguro para que mais de
          nós possam mudar esses números até 2030.
          <button>Conheça o Compromisso</button>
          <h2> Entre na conversa</h2>
        </p>
      </div>

      <div className="horizontal">
        <div id="quatro"></div>

        <div id="cinco"></div>

        <div id="seis"></div>
      </div>

      <div id="sete"></div>

      <div id="oito"></div>

      <div id="nove" className="faca_Parte"></div>

      <div id="dez">
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
      </div>

      <div>
        <Footer></Footer>
      </div>
    </div>
  );
};
