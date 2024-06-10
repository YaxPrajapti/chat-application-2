
import { Navigate, Route, Routes } from "react-router-dom"
import { Toaster } from 'react-hot-toast';
import Navbar from "./Components/Navbar.jsx"
import Home from "./Pages/Home/home.jsx"
import Login from './Pages/Login/login.jsx'
import Signup from "./Pages/Signup/Signup.jsx"
import { useAuthContext } from "./Context/AuthContextProvider.jsx";

function App() {
  const { authuser } = useAuthContext();
  console.log(authuser);
  return (
    <div className="h-fit">
      <Toaster />
      <Navbar />
      <div className='p-4 flex flex-col'>
        <Routes>
          <Route path="/" element={authuser ? <Home /> : <Login />} />
          <Route path="/login" element={authuser ? <Navigate to="/" /> : <Login />} />
          <Route path="/signup" element={authuser ? <Navigate to="/" /> : <Signup />} />
        </Routes>
      </div>
    </div>

  )
}

export default App
