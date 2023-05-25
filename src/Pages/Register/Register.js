import './Register.css';

import { useState } from 'react';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { getAuth } from 'firebase/auth';

import { useNavigate } from 'react-router-dom'; // Importa o useNavigate, para navegar para a página.

export default function Home() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    const handleRegister = () => {
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Registro bem-sucedido, você pode fazer algo aqui, como redirecionar para outra página.
                window.alert('Registro bem-sucedido!', userCredential.user);
                console.log('Registro bem-sucedido!', userCredential.user);
                navigate('/');
            })
            .catch((error) => {
                // Ocorreu um erro durante o registro.
                window.alert('Erro ao registrar:', error);
                console.log('Erro ao registrar:', error);
            });
    };

    return (
        <div className='Card-Box-register'>
            <h1>REGISTER</h1>
            <div className='Infos-register'>
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
            <div className='Infos-register'>
                <span>SENHA</span>
                <input
                    type='password'
                    placeholder='Senha'
                    name='senha'
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <button className='btn-register' onClick={handleRegister}>
                REGISTRAR
            </button>
        </div>
    )
}

