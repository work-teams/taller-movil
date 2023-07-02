import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import RegisterForm from './RegisterForm';

describe('RegisterForm', () => {
    //El formulario realiza correctaente la busqueda de elementos de entrada
    //IMPORTANCIA:aseguramos que los elementos esperados esten presentes.
  test('renders correctly', () => {
    const { getByPlaceholderText } = render(<RegisterForm />);
    const usernameInput = getByPlaceholderText('Ingrese su nombre de usuario');
    const passwordInput = getByPlaceholderText('Ingrese su contraseña');
    const confirmPasswordInput = getByPlaceholderText('Ingrese su contraseña');

    expect(usernameInput).toBeTruthy();
    expect(passwordInput).toBeTruthy();
    expect(confirmPasswordInput).toBeTruthy();
  });
    //Se simula la entrada de tecto en los capos del formulario
  test('updates form data on input change', () => {
    const { getByPlaceholderText } = render(<RegisterForm />);
    const usernameInput = getByPlaceholderText('Ingrese su nombre de usuario');
    const passwordInput = getByPlaceholderText('Ingrese su contraseña');
    const confirmPasswordInput = getByPlaceholderText('Ingrese su contraseña');

    fireEvent.changeText(usernameInput, 'testuser');
    fireEvent.changeText(passwordInput, 'testpassword');
    fireEvent.changeText(confirmPasswordInput, 'testpassword');

    expect(usernameInput.props.value).toBe('testuser');
    expect(passwordInput.props.value).toBe('testpassword');
    expect(confirmPasswordInput.props.value).toBe('testpassword');
  });
  //Se simula el evento clic en el boton de "registrar nuevo usuario"
  //Verificar que  el boton se este presionando.
  test('calls console.log with form data on button press', () => {
    const { getByText, getByPlaceholderText } = render(<RegisterForm />);
    const usernameInput = getByPlaceholderText('Ingrese su nombre de usuario');
    const passwordInput = getByPlaceholderText('Ingrese su contraseña');
    const confirmPasswordInput = getByPlaceholderText('Ingrese su contraseña');
    const button = getByText('Registrar Nuevo Usuario');

    fireEvent.changeText(usernameInput, 'testuser');
    fireEvent.changeText(passwordInput, 'testpassword');
    fireEvent.changeText(confirmPasswordInput, 'testpassword');
    fireEvent.press(button);

    expect(console.log).toHaveBeenCalledWith({
      email: 'testuser',
      password: 'testpassword',
      confirm: 'testpassword',
    });
  });
});
