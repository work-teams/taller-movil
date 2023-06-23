import { Alert } from 'react-native';
import usersData from '../../data/users.json';

export function handleLogin(navigation, username, password){
	const user = usersData.users.find(
		(user) => user.username === username && user.password === password
	);

	if (user) {
		navigation.navigate("Inicio");
		Alert.alert('Inicio de sesión exitoso');
	} else {
		Alert.alert('Error', 'Nombre de usuario o contraseña incorrectos');
	}
};