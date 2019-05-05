import { message } from 'antd';
import API from '../../../../../services/API';
import { history } from '../../../../../services/configure-store';

export function sendRegistrationData(user) {
    return API.registrationPost(['REGISTRATION_DATA', () => {
        message.success('Вам пришел на почту пароль! Регистрация выполнена успешнo');
        history.push('/login');
    }, () => {
        message.error('Регистрация не произошла');
    }], user, 'Регистрация не произошла');
}
