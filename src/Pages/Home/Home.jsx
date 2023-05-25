import './Home.css';

import { useState } from 'react';

import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';

import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

export default function Home() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleLogin = () => {
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Login bem-sucedido, você pode fazer algo aqui, como redirecionar para outra página.
                window.alert('Login bem-sucedido!');
                console.log('Login bem-sucedido!', userCredential.user);
                navigate('/Inicio');
            })
            .catch((error) => {
                // Ocorreu um erro durante o login.
                window.alert('Erro ao fazer login:', error);
                console.log('Erro ao fazer login:', error);
            });
    };

    return (
        <div className='Card-Box-home'>
            <h1>LOGIN</h1>
            <div className='Infos-home'>
                <span className='label'>E-MAIL</span>
                <input
                    className='email'
                    type='text'
                    placeholder='E-Mail'
                    name='email'
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className='Infos-home'>
                <span>SENHA</span>
                <input
                    type='password'
                    placeholder='Senha'
                    name='senha'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button className='btn-login-home' onClick={handleLogin}>
                LOGAR
            </button>
            <Link to='/Register'>
                <button className='btn-register-home'>CADASTRAR</button>
            </Link>
        </div>
    );
}