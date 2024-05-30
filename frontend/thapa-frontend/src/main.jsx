import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { AuthProvider } from './store/auth.jsx'
import {ToastContainer} from 'react-toastify'
// hr page me toast krna hai is liye
import "react-toastify/dist/ReactToastify.css"

ReactDOM.createRoot(document.getElementById('root')).render(
  <AuthProvider>
   
  <React.StrictMode>
    {/* use context ke liye  */}
    <App />

   <ToastContainer
position="top-right"
bodyClassName="toastBody"
autoClose={3000}
hideProgressBar={false}
newestOnTop={false}
closeOnClick
rtl={false}
pauseOnFocusLoss
draggable
pauseOnHover
theme="colored"
/>

  </React.StrictMode>
  </AuthProvider>
)
