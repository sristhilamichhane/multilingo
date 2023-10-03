# MULTILINGO Setup Guide

MULTILINGO is a language learning application with separate backend and frontend components. Follow the steps below to set up the backend and frontend.

## Backend Setup

### Prerequisites

- [Node.js](https://nodejs.org/)
- [pnpm](https://pnpm.io/)

### Installation

1. Install `pnpm` using PowerShell:

   ```powershell
   iwr https://get.pnpm.io/install.ps1 -useb | iex
   ```

2. Navigate to the `backend` folder:

   ```bash
   cd backend
   ```

3. Install project dependencies:

   ```bash
   pnpm install
   ```

4. Apply database migrations:

   ```bash
   pnpm prisma db push
   ```

### Running the Backend

5. Start the backend server:

   ```bash
   node index.js
   ```

## Frontend Setup

### Prerequisites

- [Node.js](https://nodejs.org/) installed
- [Yarn](https://yarnpkg.com/) installed

### Installation

1. Install project dependencies. From the project root, navigate to the `frontend` folder:

   ```bash
   cd frontend
   ```

2. Install dependencies using Yarn:

   ```bash
   yarn
   ```

### Running the Frontend

3. Start the development server:

   ```bash
   yarn dev
   ```

---

## Enjoy learning languages with MULTILINGO!
