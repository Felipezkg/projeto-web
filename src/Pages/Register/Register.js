
import './Register.css';

export default function Home() {
    
    return (
        <div className='Card-Box-register'>
            <h1>REGISTER</h1>
            <div className='Infos-register'>
                <span className='label'>E-MAIL</span>
                <input className='email' type='text' placeholder='E-Mail' name='email' />
            </div>
            <div className='Infos-register'>
                <span>SENHA</span>
                <input type='text' placeholder='Senha' name='senha' />
            </div>
            <button className='btn-register'>REGISTRAR</button>
        </div>
    )
}

