function makeUser(formData) {
    const user = {
        name: formData.get('name'),
        hp: 30,
        gil: 0,
        tapes: 0,
        completed: {}
    };

    return user;
}

export const newMakeUser = (formData) => ({
    name: formData.get('name'),
    hp: 30,
    gil: 0,
    tapes: 0,
    completed: {}

});

export default makeUser;