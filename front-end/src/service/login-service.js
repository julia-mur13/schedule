function requestLoginInformation() {
    const user = {
        role: 'GUEST',
        email: 'admin',
        password: 'admin'
    };
    localStorage.setItem('user', JSON.stringify(user));
    const data = JSON.parse(localStorage.getItem('user'));
    if (data && data.text === 'Bad credentials') {
        return '';
    }
    return data;
}

export default requestLoginInformation;
