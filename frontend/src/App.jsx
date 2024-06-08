import Login from "./Pages/Login/login"
import Signup from "./Pages/Signup/Signup"
import Navbar from "./Components/Navbar"
import Home from "./Pages/Home/home"

function App() {
  return (

    <div className="h-fit">
      <Navbar />
      <div className='p-4 flex flex-col'>
        <Home />
      </div>
    </div>

  )
}

export default App
