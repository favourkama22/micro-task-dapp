class UserStorage {
    users;

    constructor() {
        this.users = new Map();
    }

    /**
     * ### UserStorage getAll
     * @description get all stored users.
     * @returns {*} list UserModel[ ]
     */
    getAll() {
        return Array.from(this.users.values());
    }

    /**
     * ### UserStorage addOne
     * @description store a single user.
     * @param {*} user UserModel
     */
    addOne(user) {
        this.users.set(user.id, user);
    }

    /**
     * ### UserStorage getOneById
     * @description get a single user given an id.
     * @param {*} id UUID
     * @returns UserModel | undefined (not found)
     */
    getOneById(id) {
        return this.users.get(id);
    }
}

export const userStorage = new UserStorage();
