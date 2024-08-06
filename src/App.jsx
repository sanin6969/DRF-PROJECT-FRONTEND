import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Signin from "./components/Signin"
import SignUp from "./components/SignUp"
import HomepageView from "./components/Homepage"
import Profile from "./components/Profile"
import Adminpage from "./components/adminpage"
import Home from "./components/Home"
export default function App() {
  return (
    <>
    <Navbar/>
    <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/admin' element={<Adminpage />} />
      <Route path='/Homepage' element={<HomepageView />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/signin' element={<Signin />} />
     </Routes>
    </>
  )
}