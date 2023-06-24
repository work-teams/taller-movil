import { handleLogin } from './handleLogin';
import { Alert } from 'react-native';

describe('handleLogin', () => {
  let navigation;
  let alertSpy;

  beforeEach(() => {
    navigation = {
      navigate: jest.fn(),
    };
    alertSpy = jest.spyOn(Alert, 'alert');
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  test('should navigate to HomeScreen on correct credentials', () => {
    const username = 'Javier900';
    const password = 'Taller123';

    handleLogin(navigation, username, password);

    expect(navigation.navigate).toHaveBeenCalledWith('Inicio');
    expect(alertSpy).toHaveBeenCalledWith('Inicio de sesión exitoso');
  });

  test('should show error alert on incorrect credentials', () => {
    const username = 'incorrectUsername';
    const password = 'incorrectPassword';

    handleLogin(navigation, username, password);

    expect(navigation.navigate).not.toHaveBeenCalled();
    expect(alertSpy).toHaveBeenCalledWith('Error', 'Nombre de usuario o contraseña incorrectos');
  });
});