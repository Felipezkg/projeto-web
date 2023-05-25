
import './Navbar.css';

import { VscHome } from "react-icons/vsc";
import { VscDiffAdded } from "react-icons/vsc";

import { Link } from 'react-router-dom';

export function Navbar() {

    return (
        <div className="side-menu">
            <div className="menu-content">
                <a>MENU</a>
                <Link to='/Inicio'>
                    <div className='menu-item-box'>
                        <span><VscHome size={35} title='Inicio' /></span>
                        <a>Inicio</a>
                    </div>
                </Link>
                <Link to='/Cadastrar'>
                    <div className='menu-item-box'>
                        <span><VscDiffAdded size={35} title='Adicionar' /></span>
                        <a>Cadastrar</a>
                    </div>
                </Link>
            </div>
        </div >
    );
}
