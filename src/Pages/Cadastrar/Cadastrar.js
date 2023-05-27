
import './Cadastrar.css';

import React, { useState } from 'react';

import { Navbar } from '../../Components/Navbar/Navbar';
import { CadForm } from '../../Components/CadForm/CadForm';
import { StoredData } from '../../Components/StoredData/StoredData';

import { VscChromeClose } from "react-icons/vsc";

export default function Cadastrar() {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    return (
        <div className='Screen-Box'>
            <Navbar />
            <div>
                <div className='header-align'>
                    <div className='content-title'>
                        <a>Usuários Cadastrados</a>
                    </div>
                    <div className='button-align'>
                        <button className='add-button' onClick={handleOpenModal}>+</button>
                    </div>
                </div>
                <StoredData />
            </div>

            {isModalOpen && (
                <div className="modal-overlay">
                    <div className="modal">
                        <div className='modal-header'>
                            <h2>Cadastrar</h2>
                            <button onClick={() => setIsModalOpen(false)}><VscChromeClose size={25}/></button>
                        </div>
                        <div className='modal-content'>
                            <CadForm />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
