import { Alert } from 'react-native';
import usersData from '../../data/users.json';
import fs from 'fs';

export function handleRegister(username, password) {
    const formData = {
        username: username,
        password: password
    };

    const jsonData = JSON.stringify(formData);

    fs.writeFile('../../data/users.json', jsonData, 'utf8', (err) => {
        if (err) {
            console.error('Error al escribir en el archivo JSON:', err);
        } else {
            console.log('Datos guardados en el archivo JSON');
        }
    });
}
