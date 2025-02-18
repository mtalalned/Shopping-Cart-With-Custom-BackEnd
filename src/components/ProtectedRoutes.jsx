import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const ProtectedRoutes = ({ component }) => {

    const [loading , setLoading] = useState(true)
    const navigate = useNavigate()
    
    useEffect(() => {
        
        const CheckFunction = async () => {
            try {
                const accessToken = localStorage.getItem('accessToken')

                if (!accessToken) return navigate('/')

                const protectedRoute = await axios.get ('https://plain-toinette-mtkconsultant-b465e3eb.koyeb.app/api/v1/userData' , 
                    {
                        headers: {
                        'Authorization': `Bearer ${accessToken}`, 
                        'Content-Type': 'application/json'
                        },
                    }
                )
                console.log (protectedRoute)
                if (protectedRoute.data.message === 'valid access token') {
                    setLoading(false)
                    return
                }
            } catch (error) {
                if (error.response.data.message === 'invalid token') {
                        localStorage.removeItem('accessToken')
                        try {
                            const regenerateToken = await axios.post('https://plain-toinette-mtkconsultant-b465e3eb.koyeb.app/api/v1/generateAccessToken');
                            if(regenerateToken.data.accesToken) {
                                localStorage.setItem('accessToken' , regenerateToken.data.accesToken)
                                setLoading(false)
                            } else {
                                navigate('/')
                            }
                        } catch (errr) {
                            console.log (errr)
                        }
                    }
            }
        }

        CheckFunction()
    }, [])

    return (
        loading ? <h1>Loading...</h1> :  component
    )
}

export default ProtectedRoutes