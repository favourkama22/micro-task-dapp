import { Task } from '../model/task';
import { RollupStateHandler } from '../shared/rollup-state-handler';
import { taskStorage } from '../storage/task';

export class TaskController {
    /**
     * ### TaskController createTask
     * @description Create a task.
     * @param {*} data {owner: address ("0x..."), description: string, reward: number}
     */
    async createTask(data) {
        return await RollupStateHandler.advanceWrapper(() => {
            const newTask = new Task(data.owner, data.description, data.reward);
            taskStorage.addOne(newTask);

            return {
                ok: true,
                message: `Task created successfully!`,
                data: newTask.getData(),
            };
        });
    }

    /**
     * ### TaskController getAllTasks
     * @description Get all tasks.
     */
    async getAllTasks() {
        return await RollupStateHandler.inspectWrapper(() =>
            taskStorage.getAll()
        );
    }

    /**
     * ### TaskController getTaskById
     * @description Get a task by ID.
     * @param {*} data task id (UUID)
     */
    async getTaskById(data) {
        const taskId = data[0];
        const storageRequest = taskStorage.getOneById(taskId);

        if (!storageRequest?.id)
            return await RollupStateHandler.handleReport({
                error: `Task not found for id '${taskId}'.`,
            });

        return await RollupStateHandler.inspectWrapper(() => ({
            data: storageRequest.getData(),
        }));
    }

    /**
     * ### TaskController completeTask
     * @description Mark a task as completed.
     * @param {*} data {taskId: UUID, participant: address ("0x...")}
     */
    async completeTask(data) {
        const taskId = data.taskId;
        const task = taskStorage.getOneById(taskId);

        if (!task.id) {
            return await RollupStateHandler.handleReport({
                error: `Task not found for id '${taskId}'`,
            });
        }

        return await RollupStateHandler.advanceWrapper(() => {
            task.completeTask(data.participant);
            taskStorage.updateOne(task);

            return {
                ok: true,
                message: `Task completed successfully by participant '${data.participant}'!`,
                data: task.getData(),
            };
        });
    }
}
