import './StoredData.css';

import { useState, useEffect } from 'react';
import { getDatabase, ref, onValue } from 'firebase/database';

export function StoredData() {
    const [usuarios, setUsuarios] = useState([]);

    useEffect(() => {
        const database = getDatabase();
        const usuariosRef = ref(database, 'Usuarios');

        // Escuta as mudanças no banco de dados e atualiza o estado 'usuarios'
        onValue(usuariosRef, (snapshot) => {
            const data = snapshot.val();
            const usuariosList = data ? Object.values(data) : [];
            setUsuarios(usuariosList);
        });
    }, []);

    return (
        <div className="page-content">
            <div className='stored-data'>
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Primeiro Nome</th>
                            <th>Último Nome</th>
                            <th>Dt Nascimento</th>
                            <th>Telefone</th>
                            <th>CPF</th>
                            <th>Endereço</th>
                            <th>E-Mail</th>
                        </tr>
                    </thead>
                    <tbody>
                        {usuarios.map((item, index) => (
                            <tr key={index}>
                                <td>{index}</td>
                                <td>{item.firstName}</td>
                                <td>{item.lastName}</td>
                                <td>{item.dob}</td>
                                <td>{item.telephone}</td>
                                <td>{item.cpf}</td>
                                <td>{item.address}</td>
                                <td>{item.email}</td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
