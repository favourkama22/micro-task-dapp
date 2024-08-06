import crypto from 'node:crypto';

export class User {
    id;
    address;
    createdAt;

    /**
     * ### User model required data
     * @param {*} address address (eg.: "0x...")
     */
    constructor(address) {
        this.id = crypto.randomUUID();
        this.address = address;
        this.createdAt = Date.now();
    }

    /**
     * ### User getData
     * @description returns user basic data.
     * @returns user {
            id: UUID,
            address: address (eg.: "0x..."),
            createdAt: number
        }
     */
    getData() {
        return {
            id: this.id,
            address: this.address,
            createdAt: this.createdAt,
        };
    }
}
