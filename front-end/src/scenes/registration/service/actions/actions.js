import { message } from 'antd';
import API from '../../../../service/API';
import { history } from '../../../../service/configure-store';

export function sendRegistrationData(user) {
    return API.registrationPost(['REGISTRATION_DATA', () => {
        message.success('Вам пришел на почту пароль! Регистрация выполнена успешнo');
        history.push('/login');
    }, () => {
        message.error('Регистрация не произошла');
    }], user, 'Регистрация не произошла');
}
