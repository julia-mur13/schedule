/* eslint-disable import/no-cycle */
import { errorProject, isLoading, getData } from '../main/services/actions/actions';
import { getUserData } from '../scenes/login/services/actions/actions';

const urlServer = 'https://exadelcats.herokuapp.com/';

function responseParse(response) {
    try {
        return response.ok ? response.json() : response.json().then(text => Promise.reject(text));
    } catch (e) {
        return Promise.reject(e);
    }
}

const API = {
    getTokenFromStore(state) {
        const token = state.logInInformation.user;
        if (token) {
            return token.token;
        }
        return null;
    },
    sendRequest(token, url, reqInit) {
        const headers = reqInit.headers ? reqInit.headers : new Headers();
        headers.append('Authorization', `Bearer ${token}`);
        headers.append('Content-Type', 'application/json');
        reqInit.headers = headers;
        reqInit.mode = 'cors';
        return fetch(new Request(url, reqInit));
    },
    sendRequestFile(token, url, reqInit) {
        const headers = reqInit.headers ? reqInit.headers : new Headers();
        headers.append('Authorization', `Bearer ${token}`);
        reqInit.headers = headers;
        reqInit.mode = 'cors';
        return fetch(new Request(url, reqInit));
    },
    login(path, data) {
        const url = `${urlServer}${path}`;
        return (dispatch) => {
            fetch(url, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                },
                body: JSON.stringify(data),
            })
                .then(response => response.text())
                .then((response) => {
                    localStorage.setItem('user', response);
                    dispatch(getUserData(JSON.parse(response)));
                })
                .catch(() => {
                    dispatch(errorProject('LogInData', 'Error!'));
                    localStorage.clear();
                });
        };
    },
    post(path, data, receiveAction, errorMessage) {
        const url = `${urlServer}${path}`;
        return (dispatch, getState) => {
            dispatch(isLoading(true));
            const token = API.getTokenFromStore(getState());
            API.sendRequest(token, url, {
                method: 'POST',
                body: JSON.stringify(data),
            })
                .then(responseParse)
                .then(items => dispatch(getData(receiveAction, items)))
                .catch(() => dispatch(errorProject(receiveAction, errorMessage)));
        };
    },
    postUploadFiles(path, data, receiveAction, errorMessage) {
        const url = `${urlServer}${path}`;
        return (dispatch, getState) => {
            dispatch(isLoading(true));
            const token = API.getTokenFromStore(getState());
            API.sendRequestFile(token, url, {
                method: 'POST',
                body: data,
            })
                .then(responseParse)
                .then(items => dispatch(getData(receiveAction, items)))
                .catch(() => dispatch(errorProject(receiveAction, errorMessage)));
        };
    },
    deleteRequest(path, data, receiveAction, errorMessage) {
        const url = `${urlServer}${path}`;
        return (dispatch, getState) => {
            dispatch(isLoading(true));
            const token = API.getTokenFromStore(getState());
            API.sendRequest(token, url, {
                method: 'DELETE',
                body: JSON.stringify(data),
            })
                .then(responseParse)
                .then(items => dispatch(getData(receiveAction, items)))
                .catch(() => dispatch(errorProject(receiveAction, errorMessage)));
        };
    },
    get(path, receiveAction, errorMessage) {
        const url = `${urlServer}${path}`;
        return (dispatch, getState) => {
            dispatch(isLoading(true));
            const token = API.getTokenFromStore(getState());
            API.sendRequest(token, url, {
                method: 'GET',
            })
                .then(responseParse)
                .then(items => dispatch(getData(receiveAction, items)))
                .catch(() => dispatch(errorProject(receiveAction, errorMessage)));
        };
    },
    put(path, data, receiveAction, errorMessage) {
        const url = `${urlServer}${path}`;
        return (dispatch, getState) => {
            dispatch(isLoading(true));
            const token = API.getTokenFromStore(getState());
            API.sendRequest(token, url, {
                method: 'PUT',
                body: JSON.stringify(data),
            })
                .then(responseParse)
                .then(items => dispatch(getData(receiveAction, items)))
                .catch(() => dispatch(errorProject(receiveAction, errorMessage)));
        };
    },
    registratePost(receiveAction, data, errorMessage) {
        const url = 'https://exadelcats.herokuapp.com/registration';
        return (dispatch) => {
            fetch(url, {
                method: 'POST',
                mode: 'cors',
                headers: {
                    'Content-Type': 'application/json; charset=utf-8',
                },
                body: JSON.stringify(data),
            })
                .then(responseParse)
                .then(items => dispatch(getData(receiveAction, items)))
                .catch(() => dispatch(errorProject(receiveAction, errorMessage)));
        };
    },
};

export default API;
