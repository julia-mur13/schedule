import { LOG_IN } from './types';

export function logIn(name, key) {
    return {
        type: LOG_IN,
        payload: {username: name, password: key},
    };
}
