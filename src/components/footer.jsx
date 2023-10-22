import "./footer.css";
import {Link} from "react-router-dom";


export const Footer = () => {


    return(
        <footer className="footer">

            <h1>LíderAda</h1>

            <ul>
                <h3>LíderAda</h3>
                <li>
                <Link to="/quemsomos">Quem Somos</Link>
                </li>
                <li>
                <Link to="/faleconosco">Fale Conosco</Link>
                </li>
                <li>
                <Link to="/termosdeuso">Termos de Uso</Link>
                </li>
                <li>
                <Link to="/centrodeprivacidade">Centro de Privacidade</Link>
                </li>
                <li>
                <Link to="/parceires">Parceires</Link>
                </li>
                <div>
                   <img src="" alt="instagram" />
                   <img src="" alt="email" />
                   <img src="" alt="linkedin" />
                </div>
            </ul>
            <ul>
                <h3>Categorias</h3>
                <li>
                <Link to="/discussao">Discussáo</Link>
                </li>
                <li>
                <Link to="/topicospopulares">Tópicos Populares</Link>
                </li>
                <li>
                <Link to="/inicieumaconversa">Inicie uma Conversa</Link>
                </li>
            </ul>
            <hr></hr>
            <p className="copy">Copyright 2023. LíderAda criada durante Hackaton das Manas edição 2023. Todos os direitos reservados.</p>
        </footer>
    )
}