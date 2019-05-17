export function getTeachers(state) {
    return state.inputData.teachers;
}

export function getTeacherFullNames(state) {
    return state.inputData.teachers.map((el) => el.lastName + ' ' +
        el.firstName[0].toUpperCase() + '.' +
        el.middleName[0].toUpperCase() + '.');
}