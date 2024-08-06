import { TaskController } from './task';
import { UserController } from './user';

const taskController = new TaskController();
const userController = new UserController();

export const controller = {
    createTask: taskController.createTask,
    getAllTasks: taskController.getAllTasks,
    getTaskById: taskController.getTaskById,
    completeTask: taskController.completeTask,
    createUser: userController.createUser,
    getUserById: userController.getUserById,
};
