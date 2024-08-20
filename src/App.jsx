import { Routes, Route } from 'react-router-dom'
import Navbar from "./components/Navbar"
import Signin from "./components/Signin"
import SignUp from "./components/SignUp"
import HomepageView from "./Pages/Homepage"
import Profile from "./components/Profile"
import Adminpage from "./Pages/adminpage"
import Home from "./Pages/Home"
import { AuthProvider } from './context/AuthContext'
import Verify_Email from './components/Verify_Email'
export default function App() {
  return (
    <>
    <AuthProvider>
    <Navbar/>
    <Routes>

      <Route path='/' element={<Home />} />
      <Route path='/verifyemail' element={<Verify_Email />} />
      <Route path='/admin' element={<Adminpage />} />
      <Route path='/Homepage' element={<HomepageView />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/signup' element={<SignUp />} />
      <Route path='/signin' element={<Signin />} />
     </Routes>
    </AuthProvider>
    </>
  )
}