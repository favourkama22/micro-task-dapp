<a id="readme-top"></a>
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <h3 align="center">Micro-Task Platform</h3>

  <p align="center">
    A decentralized application (dapp) for posting and completing small tasks for rewards.
  </p>
</div>

## About

<p>
    The Micro-Task Platform is a decentralized application (dapp) powered by Cartesi rollups technology.
</p>
<p> 
    It allows users to post small

 tasks that others can complete in exchange for rewards. 
</p>

### Modules

- **Model:** Defines the data structure for tasks and users.
- **Controller:** Handles the business logic for creating, retrieving, and completing tasks, as well as user creation.
- **Storage:** Manages in-memory storage for tasks and users.

### Prerequisites

- Node.js
- Docker
- Cartesi rollups

### Getting Started

1. Clone the repository:
```bash
git clone https://github.com/victor/micro-task-platform.git
```

2. Install dependencies:
```bash
npm install
```

3. Set up Docker and Cartesi rollups as per the Cartesi documentation.

4. Run the application:
```bash
npm start
```

### Usage

#### Endpoints

- **Create Task:** `POST /createTask`
  - Request Body: `{ "owner": "0x...", "description": "Task description", "reward": 100 }`
- **Get All Tasks:** `GET /getAllTasks`
- **Get Task By ID:** `GET /getTaskById`
  - Request Body: `{ "id": "task-id" }`
- **Complete Task:** `POST /completeTask`
  - Request Body: `{ "taskId": "task-id", "participant": "0x..." }`
- **Create User:** `POST /createUser`
  - Request Body: `{ "address": "0x..." }`
- **Get User By ID:** `GET /getUserById`
  - Request Body: `{ "id": "user-id" }`

<p align="right">(<a href="#readme-top">back to top</a>)</p>