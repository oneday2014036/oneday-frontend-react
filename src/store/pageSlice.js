import {createSlice, createAsyncThunk} from '@reduxjs/toolkit'
import axios from "axios";
import { jwtDecode } from "jwt-decode";


async function checkToken(token) {
    try {
        const res = await axios({
            method: 'POST',
            data: {token: token},
            url: '/api/users/auth/token',
        })
        const user_info_res = await axios.get(`/api/users/${jwtDecode(token).userid}`);
        return {'status': true, 'user_info': user_info_res.data, 'token': token}

    } catch (err) {
        console.log('err', err.response.data)
        return {'status': false, 'user_info': '', 'token': ''}
    }
}

const fetchUserLoginStatus = createAsyncThunk('page/checkToken', async () =>{
    const token = localStorage.getItem('token') ? localStorage.getItem('token') : sessionStorage.getItem('token');
    if (!token) {
        return {'status': false, 'user_info': '', 'token': ''}
    } else {
        return await checkToken(token)
    }
})

const pageSlice = createSlice({
    name: 'page',
    initialState: {
        'main-nav':[],
        'token': '',
        'isAuthenticated': false,
        'userInfo': ''
    },
    reducers: {
        setAuthStatus: (state, action) => {
            state.isAuthenticated = action.payload
        },
        setUserInfo: (state, action) => {
            state.userInfo = {...state.info, ...action.payload}
        }
    },
    extraReducers: (builder) => {
        builder.addCase(fetchUserLoginStatus.fulfilled, (state, action) => {
            state.isAuthenticated = action.payload.status;
            state.userInfo = action.payload.user_info;
            state.token = action.payload.token
        })
    }
})

export {fetchUserLoginStatus}
export const {setAuthStatus, setUserInfo} = pageSlice.actions;
export default pageSlice