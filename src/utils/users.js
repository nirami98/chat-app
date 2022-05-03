const users = []

// addUser
const addUser = ({id, username, room}) => {
    // Clean the data
    username = username.trim().toLowerCase()
    room = room.trim().toLowerCase()

    if(!users || !room) {
        return {
            error: 'Username and room are required'
        }
    }

    // Check for existing user
    const existingUser = users.find((user) => {
        return user.room === room && user.username === username
    })

    // validate username
    if(existingUser) {
        return {
            error: 'Username is in use'
        }
    }

    // Store user
    const user = {id, username, room}
    users.push(user)
    return {user}
}

const removeUser = (id) => {
    const index = users.findIndex((user) => {
        return user.id === id
    })

    if(index!==-1) {
        return users.splice(index, 1)[0]
    }
}

const getUser = (id) => {
    return users.find((user) => user.id === id)
}

const getUsersInRoom = (room) => {
    return users.filter((user) => user.room === room)
}

module.exports = {
    addUser,
    removeUser,
    getUser,
    getUsersInRoom
}

/* addUser({
    id: 22,
    username: 'Nirja',
    room: 'books'
})

addUser({
    id: 32,
    username: 'Jessi',
    room: 'books'
})

addUser({
    id: 21,
    username: 'Myra',
    room: 'movies'
})

const user = getUser(321)
console.log(user)

const userList = getUsersInRoom('books')
console.log(userList) */