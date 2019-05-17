export function getSubjects(state) {
    return state.inputData.subjects;
}

export function getSubjectNames(state) {
    return state.inputData.subjects.map((el) => el.name);
}
