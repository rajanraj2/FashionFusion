
---

# Fashion Fusion Project

Welcome to the Fashion Fusion project, a full-stack web application built with the MERN (MongoDB, Express.js, React.js, Node.js) stack. This innovative application empowers users to effortlessly upload images of their clothing items, thereby creating a comprehensive digital wardrobe. Through cutting-edge technology, users can receive personalized outfit recommendations tailored to their unique style preferences and the occasion at hand. This guide will walk you through the steps to set up and run the project on your local machine.


![Website home page](homepage.png)

## Prerequisites

Before you begin, ensure you have the following installed on your system:

- Node.js (https://nodejs.org/en/download)
- React (https://react.dev/learn/installation)

## Getting Started

Follow these steps to run the Fashion Fusion project:

1. Clone this repository to your local machine.

    ```bash
    git clone https://github.com/rajanraj2/FashionFusion.git
    ```

2. Navigate into the version2 folder.

    ```bash
    cd FashionFusion/version2
    ```
    

3. To run the frontend, navigate to the client folder.

    ```bash
    cd client
    ```

4. Install dependencies and start the frontend server.

    ```bash
    npm install
    ```

    ```bash
    npm run dev
    ```

    The frontend will load on port 5173 by default: [http://localhost:5173](http://localhost:5173).

5. To run the backend, navigate to the server folder.

    ```bash
    cd server
    ```

    If you are already in the `client` folder, use `cd ../server` to navigate to the server folder.


6. Configure the `.env` file: (Creatre .env file at same location where server.js exists [In server folder] )

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

7. Download and save the three AI models from the given link in the server folder: (Don't change the name of the files)
    Download and save the following 3 files : "FFmy_model.h5"    "Tr_cnn.h5"    "Ts_cnn.h5"
    Link - https://drive.google.com/drive/folders/1Ch5HxHfMXUnS1zcQdkFJNuBEVba-8U7z?usp=sharing


8. Install dependencies and start the backend server.

    ```bash
    npm install
    ```

    ```bash
    npm start
    ```

    or if you prefer automatic server restart on file changes:

    ```bash
    nodemon server.js
    ```

    or if nodemon is not working properly use node:
    ```bash
    node server.js
    ```

    The backend will load on port 3060 by default: [http://localhost:3060](http://localhost:3060).

Now you are ready to explore the website. Have fun!

![alt text](servicespage.png)

---
