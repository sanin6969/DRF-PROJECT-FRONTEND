import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { jwtDecode } from "jwt-decode";
import { useNavigate } from 'react-router-dom';
import axios from "axios";
const AuthContext = createContext()

export default AuthContext
export const AuthProvider = ({ children }) => {

    let [authTokens, setAuthTokens] = useState(() => localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null)
    let [user, setUser] = useState(() => localStorage.getItem('authTokens') ? jwtDecode(localStorage.getItem('authTokens')) : null)
    let [loading, setLoading] = useState(true)

    const navigate = useNavigate()
    const [doc, setDoc] = useState({ doctor: { username: '', email: '', first_name: '', last_name: '' }, department: '', profile_picture: '', doctor_proof: '' });


    // get doctor
    const GetDoctor = async (e) => {
        try {
            let response = await axios.get('http://127.0.0.1:8000/api/doctorgetedit/', {
                headers: {
                    'Authorization': `Bearer ${authTokens.access}`
                }
            });
            console.log('doctorview', response.data);

            if (response.status === 200) {
                setDoc(response.data);
            }
        } catch (error) {
            toast.error(error.message);
        }
    }


    const LoginUser = async (e) => {
        e.preventDefault();
        try {
            let response = await fetch('http://127.0.0.1:8000/api/token/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 'email': e.target.email.value, 'password': e.target.password.value })
            });
    
            if (!response.ok) {
                toast.error('Invalid login credentials or you are blocked');
                // alert('Invalid login credentials or you are blocked')
                return;
            }
    
            let data = await response.json();
            const decodedUser = jwtDecode(data.access);
    
            if (decodedUser.allow_admin) {
                toast.error('Admin tag not verified');
                console.log(' Admin TAg not verified');
                
                navigate('/signin');
                return;
            }
    
            setAuthTokens(data);
            setUser(decodedUser);
            localStorage.setItem('authTokens', JSON.stringify(data));
            navigate(decodedUser.is_admin ? '/admin' : '/');
            toast.success('Logged in successfully');
    
        } catch (error) {
            toast.error('An error occurred. Please try again later.');
            console.error('Login error:', error);
        }
    };
    // SIGNOUT 
    let SignOut = () => {
        navigate('/')
        setAuthTokens(null)
        setUser(null)
        localStorage.removeItem('authTokens')
        toast.info('You are signed Out')

    }


    // updating accestoken 

    let updateRefresh = async () => {
        console.log('token updated');
        let response = await fetch('http://127.0.0.1:8000/api/token/refresh/', {
            method: 'POST',
            headers: {
                'content-Type': 'application/json'
            },
            body: JSON.stringify({ 'refresh': authTokens.refresh })
        })
        let data = await response.json()
        if (response.status === 200) {
            setAuthTokens(data)
            setUser(jwtDecode(data.access))
            localStorage.setItem('authTokens', JSON.stringify(data))
        } else {
            console.log('signed out');
            SignOut()

        }
    }

    // updating refresh token  in 4 minutes
    useEffect(() => {
        // console.log('useeffect worked');

        let interval = setInterval(() => {
            if (authTokens) {
                // console.log('update refesreh in useefect worked');
                updateRefresh()
            }
        }, 1000 * 60 * 4);
        return () => clearInterval(interval)
    }, [authTokens, loading])





    let contextData = {
        SignOut: SignOut,
        user: user,
        LoginUser: LoginUser,
        authTokens: authTokens,
        GetDoctor: GetDoctor,
        doc: doc,
        setDoc: setDoc
    }

    return (
        <AuthContext.Provider value={contextData}>
            {children}
        </AuthContext.Provider>
    )
}