import React, { useReducer } from 'react'
import axios from 'axios'
import AuthContext from './AuthContext'
import AuthReducer from './AuthReducer'
import {
    REGISTER_SUCCESS,
    REGISTER_FAIL,
    USER_LOADED,
    AUTH_ERROR,
    LOGIN_SUCCESS,
    LOGIN_FAIL,
    LOGOUT,
    CLEAR_ERRORS
} from '../types'

const AuthState = props => {
    const initialState = {
        token: localStorage.getItem('token'),
        isAuth: null,
        loading: true,
        user: null,
        error: null
    }


    const [state, dispatch] = useReducer(AuthReducer, initialState);

    //Load User 

    //Register User 
    const register = async formData => {
        const config = {
            headers: {
                'Content-type': 'application/json'
            }
        }

        try {
            const res = await axios.post('/api/users', formData, config);

            dispatch({
                type: REGISTER_SUCCESS,
                payload: res.data
            });
            
        } catch (error) {
            dispatch({
                type: REGISTER_FAIL,
                payload: error.response.data.msg
            });
        }
    }

    //Login User

    //Logout

    //Clear Errors

    return (
        <AuthContext.Provider
            value={{
                token: state.token,
                isAuth: state.isAuth,
                loading: state.loading,
                user: state.user,
                error: state.error, 
                register
            }}
        >
            {props.children}
        </AuthContext.Provider>
    );

};

export default AuthState;