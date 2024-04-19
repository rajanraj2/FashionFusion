
---

# Fashion Fusion Project

Welcome to the Fashion Fusion project, a full-stack web application built with the MERN (MongoDB, Express.js, React.js, Node.js) stack. This innovative application empowers users to effortlessly upload images of their clothing items, thereby creating a comprehensive digital wardrobe. Through cutting-edge technology, users can receive personalized outfit recommendations tailored to their unique style preferences and the occasion at hand. This guide will walk you through the steps to set up and run the project on your local machine.

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (https://nodejs.org/en/download)
- React (https://react.dev/learn/installation)

## Getting Started

Follow these steps to run the TT_MERN project:

1. Clone this repository to your local machine.

    ```bash
    git clone https://github.com/rajanraj2/MERN.git
    ```

2. Navigate into the TT_MERN folder.

    ```bash
    cd MERN
    cd TT_MERN
    ```

3. Configure the `.env` file: (Creatre .env file at same location where server.js exists)

    ```plaintext
    # .env

    # Add your MongoDB connection URI
    MONGO_URI=your-mongodb-connection-link-goes-here

    # Assign any value you like to the JWT_SECRET key
    JWT_SECRET=assign-any-value-you-like-here

    # Copy these key & value in .env file
    PORT=3060
    PYTHONIOENCODING=utf-8
    TF_ENABLE_ONEDNN_OPTS=0 
    ```

4. To run the frontend, navigate to the client folder.

    ```bash
    cd client
    ```

5. Install dependencies and start the frontend server.

    ```bash
    npm install
    npm run dev
    ```

    The frontend will load on port 5173 by default: [http://localhost:5173](http://localhost:5173).

6. To run the backend, navigate to the server folder.

    ```bash
    cd server
    ```

    If you are already in the `client` folder, use `cd ../server` to navigate to the server folder.

7. Install dependencies and start the backend server.

    ```bash
    npm install
    node server.js
    ```

    or if you prefer automatic server restart on file changes:

    ```bash
    nodemon server.js
    ```

    The backend will load on port 3060 by default: [http://localhost:3060](http://localhost:3060).

Now you are ready to explore the website. Have fun!

---
