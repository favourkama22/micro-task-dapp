import crypto from "node:crypto";

export class Task {
  id;
  owner;
  description;
  reward;
  createdAt;
  completed;
  participant;

  /**
   * ### Task model required data
   * @param {*} owner address (eg.: "0x...")
   * @param {*} description string
   * @param {*} reward number
   */
  constructor(owner, description, reward) {
    this.id = crypto.randomUUID();
    this.owner = owner;
    this.description = description;
    this.reward = reward;
    this.createdAt = Date.now();
    this.completed = false;
    this.participant = null;
  }

  /**
     * ### Task getData
     * @description returns task basic data.
     * @returns task {
            id: UUID,
            owner: address (eg.: "0x..."),
            description: string,
            reward: number,
            createdAt: number,
            completed: boolean,
            participant: address (eg.: "0x...")
        }
     */
  getData() {
    return {
      id: this.id,
      owner: this.owner,
      description: this.description,
      reward: this.reward,
      createdAt: this.createdAt,
      completed: this.completed,
      participant: this.participant,
    };
  }

  /**
   * ### Task completeTask
   * @description Mark the task as completed.
   * @param {*} participant address (eg.: "0x...")
   */
  completeTask(participant) {
    this.completed = true;
    this.participant = participant;
  }
}
