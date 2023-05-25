
import './Home.css';

import { Link } from 'react-router-dom';

export default function Home() {
    return (
        <div className='Card-Box-home'>
            <h1>LOGIN</h1>
            <div className='Infos-home'>
                <span className='label'>E-MAIL</span>
                <input className='email' type='text' placeholder='E-Mail' name='email' />
            </div>
            <div className='Infos-home'>
                <span>SENHA</span>
                <input type='text' placeholder='Senha' name='senha' />
            </div>
            <button className='btn-login-home'>LOGAR</button>
            <Link to='/Register'><button className='btn-register-home'>CADASTRAR</button></Link>
        </div>
    )
}

