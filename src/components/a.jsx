import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';
import { useParams } from 'react-router';
import { useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import axios from 'axios';
function Profile() {

    const { user ,authTokens} = useContext(AuthContext)
    console.log(user,'user details');
    const id=user.user_id
    console.log('id',id);
    console.log('user id',user.user_id);
    let [userDetail,setUserDetail]=useState([])

    const UserViews = async () => {
        try {
            const response = await axios.get(`http://127.0.0.1:8000/api/user/${id}`, {
                headers: {
                    'Authorization': `Bearer ${authTokens.access}`
                }
            });
            if (response.status === 200) {
                setUserDetail(response.data)
                console.log('userdata', response.data);
            }
        } catch (error) {
            console.error(error.response?.data || error.message);
            toast.error(error.response?.data?.detail || error.message);
        }
    };
    useEffect(() => {
        UserViews();
    }, []);
    
    return (
      <>
      
      
      </>
    );
}

export default Profile;
