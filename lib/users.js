let Users = [
    { id: 1, username: "Shabaw", lastname: "Hermann", firstname: "Vincent", joined: "2020-09-20" },
    { id: 2, username: "Guineer", lastname: "Guinot", firstname: "Jean", joined: "2020-09-20" }
]

// user : { username, lastname, firstname }
export function createUser (user) {
    let date = new Date();
    Users.push({
        id: Users[Users.length - 1].id + 1,
        ...user,
        joined: [date.getFullYear(), date.getMonth(), date.getDate()].join("-")
    });
}

export function getAllUsers () {
    return Users;
}

export function getUserData (id) {
    return Users[id - 1];
}

export function getAllUserIds () {
    return Users.map(({ id, firstname, lastname }) => {
        return {
            params: {
                id: [id, firstname, lastname].join("-").toLowerCase()
            }
        }
    })
}