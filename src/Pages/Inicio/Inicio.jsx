import './Inicio.css'

import dbImage from '../../Images/OIUH711_07.png';
import acsImage from '../../Images/OIUH711_17.png';
import infImage from '../../Images/OIUH711_34.png';

import { Navbar } from '../../Components/Navbar'

export default function Inicio() {
    return (
        <div>
            <Navbar />
            <div className='Screen-Box'>
                <div className='welcome'>
                    <a>Bem vindo, User</a>
                </div>
                <div className='disclaimer'>
                    <a>Com o nosso sistema você consegue:</a>
                </div>
                <div className='body-content'>
                    <div className='body-box'>
                        <img src={dbImage} alt="dbImg" className='scrImage' />
                        <span>Adicionar/Consultar/Retirar informações do Banco de Dados em Tempo Real.</span>
                    </div>
                    <div className='body-box'>
                        <img src={acsImage} alt="dbImg" className='scrImage' />
                        <span>Acesso a todas as informações referentes ao Negócio de forma fácil, eficiente e organizada.</span>
                    </div>
                    <div className='body-box'>
                        <img src={infImage} alt="dbImg" className='scrImage' />
                        <span>Todo o Sistema roda em Nuvem, sem a necessidade de se ter uma infraestrutura robusta.</span>
                    </div>
                </div>
            </div>
        </div>
    )
}