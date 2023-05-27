import './CadForm.css';

import { useState } from 'react';

import { getDatabase, ref, push } from 'firebase/database';


export function CadForm() {

    const [usuarios, setUsuarios] = useState({
        id: null,
        firstName: null,
        lastName: null,
        dob: null,
        telephone: null,
        cpf: null,
        adress: null,
        email: null,
    })

    const cadastrarUsuario = () => {
        const database = getDatabase();
        const usuariosRef = ref(database, 'Usuarios');
        push(usuariosRef, usuarios)
            .then(() => {
                window.alert('Cadastrado com Sucesso!');
                console.log('Salvou!');
                // Limpar os campos do formulário após o cadastro
                setUsuarios({
                    id: null,
                    firstName: null,
                    lastName: null,
                    dob: null,
                    telephone: null,
                    cpf: null,
                    address: null,
                    email: null,
                });
            })
            .catch((error) => {
                window.alert('Erro ao Cadastrar.');
                console.log('Erro ao salvar mensagem ', error);
            });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuarios((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };

    
    return (
        <div className='container'>
            <div className='infoInput'>
                <div className='info-box'>
                    <span>Primeiro Nome:</span>
                    <input
                        type='text'
                        placeholder='Primeiro Nome'
                        name='firstName'
                        value={usuarios.firstName}
                        onChange={handleChange}
                    />
                </div>
                <div className='info-box'>
                    <span>Último Nome:</span>
                    <input
                        type='text'
                        placeholder='Último Nome'
                        name='lastName'
                        value={usuarios.lastName}
                        onChange={handleChange}
                    />
                </div>
                <div className='info-box'>
                    <span>Data de Nascimento:</span>
                    <input
                        type='text'
                        placeholder='00/00/0000'
                        name='dob'
                        value={usuarios.dob}
                        onChange={handleChange}
                    />
                </div>
                <div className='info-box'>
                    <span>Telefone:</span>
                    <input
                        type='text'
                        placeholder='(00)0 0000-0000'
                        name='telephone'
                        value={usuarios.telephone}
                        onChange={handleChange}
                    />
                </div>
                <div className='info-box'>
                    <span>CPF:</span>
                    <input
                        type='text'
                        placeholder='000.000.000-00'
                        name='cpf'
                        value={usuarios.cpf}
                        onChange={handleChange}
                    />
                </div>
                <div className='info-box'>
                    <span>Endereço:</span>
                    <input
                        type='text'
                        placeholder='Rua Pipipi, pópópó,...'
                        name='address'
                        value={usuarios.address}
                        onChange={handleChange}
                    />
                </div>
                <div className='info-box'>
                    <span>E-Mail:</span>
                    <input
                        type='text'
                        placeholder='E-Mail'
                        name='email'
                        value={usuarios.email}
                        onChange={handleChange}
                    />
                </div>

                <button className='btn-cad-form' onClick={cadastrarUsuario}>
                    CADASTRAR
                </button>
            </div>
        </div>
    )
}