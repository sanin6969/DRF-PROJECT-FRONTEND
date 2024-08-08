import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Signin from "./components/Signin"
import SignUp from "./components/SignUp"
import HomepageView from "./Pages/Homepage"
import Profile from "./components/Profile"
import Adminpage from "./Pages/adminpage"
import Home from "./Pages/Home"
import PrivateRoute from './utils/Privateroute'
export default function App() {
  return (
    <>
    <Navbar/>
    
    <Routes>
      <PrivateRoute path='/' element={<Home />} />
      <Route path='/admin' element={<Adminpage />} />
      <Route path='/Homepage' element={<HomepageView />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/signin' element={<Signin />} />
     </Routes>
    </>
  )
}