import './style.scss';
import introImg from '../../assets/intro-connection-light.jpg'

export function ChatIntro() {
    return (
        <div className='chatIntro'>
            <img src={introImg} alt="" />
            <h1>Mantenha seu celular conectado</h1>
            <h2>
                O WhatsApp conecta ao seu telefone para sincronizar suas mensagens. <br />
                Para reduzir o uso de dados, conecte seu telefone a uma rede Wi-fi.
            </h2>
        </div>
    );
}