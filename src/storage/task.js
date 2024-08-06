class TaskStorage {
    tasks;

    constructor() {
        this.tasks = new Map();
    }

    /**
     * ### TaskStorage getAll
     * @description get all stored tasks.
     * @returns {*} list TaskModel[ ]
     */
    getAll() {
        return Array.from(this.tasks.values());
    }

    /**
     * ### TaskStorage addOne
     * @description store a single task.
     * @param {*} task TaskModel
     */
    addOne(task) {
        this.tasks.set(task.id, task);
    }

    /**
     * ### TaskStorage getOneById
     * @description get a single task given an id.
     * @param {*} id UUID
     * @returns TaskModel | undefined (not found)
     */
    getOneById(id) {
        return this.tasks.get(id);
    }

    /**
     * ### TaskStorage updateOne
     * @description update a single task.
     * @param {*} task TaskModel
     */
    updateOne(task) {
        this.tasks.set(task.id, task);
    }
}

export const taskStorage = new TaskStorage();
