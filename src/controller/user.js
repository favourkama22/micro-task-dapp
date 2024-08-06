import { User } from '../model/user';
import { RollupStateHandler } from '../shared/rollup-state-handler';
import { userStorage } from '../storage/user';

export class UserController {
    /**
     * ### UserController createUser
     * @description Create a user.
     * @param {*} data {address: string ("0x...")}
     */
    async createUser(data) {
        return await RollupStateHandler.advanceWrapper(() => {
            const newUser = new User(data.address);
            userStorage.addOne(newUser);

            return {
                ok: true,
                message: `User created successfully!`,
                data: newUser.getData(),
            };
        });
    }

    /**
     * ### UserController getUserById
     * @description Get a user by ID.
     * @param {*} data user id (UUID)
     */
    async getUserById(data) {
        const userId = data[0];
        const storageRequest = userStorage.getOneById(userId);

        if (!storageRequest?.id)
            return await RollupStateHandler.handleReport({
                error: `User not found for id '${userId}'.`,
            });

        return await RollupStateHandler.inspectWrapper(() => ({
            data: storageRequest.getData(),
        }));
    }
}
