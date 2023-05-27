
import './Navbar.css';

import { VscHome } from "react-icons/vsc";
import { VscDiffAdded } from "react-icons/vsc";

import { Link } from 'react-router-dom';

export function Navbar() {

    return (
        <div className="side-menu">
            <div className="menu-content">
                <a>MENU</a>

                <div className='menu-item-box'>
                    <Link to='/Inicio'>
                        <span><VscHome size={35} title='Inicio' /></span>
                    </Link>
                </div>
                <div className='menu-item-box'>
                    <Link to='/Cadastrar'>
                        <span><VscDiffAdded size={35} title='Cadastrar Funcionário' /></span>
                    </Link>
                </div>
            </div>
        </div >
    );
}
