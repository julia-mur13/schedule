function requestLoginInformation() {
    const user = {
        role: 'TEACHER',
        email: '',
        password: ''
    };
    localStorage.setItem('user', JSON.stringify(user));
    const data = JSON.parse(localStorage.getItem('user'));
    if (data && data.text === 'Bad credentials') {
        return '';
    }
    return data;
}

export default requestLoginInformation;
