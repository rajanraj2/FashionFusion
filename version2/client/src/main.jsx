import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import './index.css'
import { AuthProvider } from './store/auth.jsx'
import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

// app.use(express.static("client/build"))
// app.get("*", (req, res) => {
//   res.sendFile(path.resolve(__dirname, "client", "build", "index.html"))
// });

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
    <React.StrictMode>
      <App />
      <ToastContainer />
    </React.StrictMode>
  </AuthProvider>
)
