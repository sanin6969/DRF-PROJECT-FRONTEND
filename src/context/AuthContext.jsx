import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
const AuthContext = createContext()

export default AuthContext
export const AuthProvider = ({ children }) => {

    let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    // console.log('authtokens',authTokens);
    
    let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')) : null)
    let [loading,setLoading]=useState(true)
    let [username,setUsername]=useState(null)
    
    const navigate = useNavigate()
    let LoginUser = async (e) => {
        e.preventDefault()
        let response = await fetch('http://127.0.0.1:8000/api/token/', {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify({ 'email': e.target.email.value, 'password': e.target.password.value })
        })

        let data = await response.json()
        console.log('usernameeee', data);
        // console.log('data detail', data.detail);
        // console.log('response', response);

        if (response.status === 200) {
            toast.success('Logged in successfully')
            setAuthTokens(data)
            console.log('authtokens',authTokens);
            
            // console.log('tokens', authTokens);
            const decodedUser = jwtDecode(data.access);
            setUser(decodedUser);
            // console.log('decoded data:', jwtDecode(data.access));
            // console.log('user', user);
            localStorage.setItem('authTokens', JSON.stringify(data))
            // navigate('/admin')
            navigate(decodedUser.is_admin || decodedUser.is_manager ? '/admin' : '/');

        } else {

            toast.error(data.detail)

        }

    }
    // SIGNOUT 
    let SignOut = () => {
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        toast.info('You are signed Out')
        navigate('/')
        
    }
    

    // updating accestoken 

    let updateRefresh  = async()=>{
        console.log('token updated');
        let response = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify({ 'refresh':authTokens.refresh})
        })
        let data =await response.json()
        if (response.status===200) {
            setAuthTokens(data)
            setUser(jwtDecode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
        }else{
            console.log('signed out');
            
            SignOut()
        }
    }

    // updating refresh token  in 4 minutes
    useEffect(()=>{
        // console.log('useeffect worked');
        
        let interval =setInterval(() => {
            if(authTokens){
                // console.log('update refesreh in useefect worked');
                updateRefresh()
            }
        }, 1000*60*4);
        return ()=>clearInterval(interval)
    },[authTokens,loading])





    let [run,setRun]=useState()
    //  setRun=DoctorProfilesViews()
    let contextData = {
        SignOut: SignOut,
        user: user,
        LoginUser: LoginUser,
        authTokens:authTokens,
        run:run
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}