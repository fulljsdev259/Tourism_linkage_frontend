import {
    LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT_REQUEST, LOGOUT_SUCCESS,
    SIGNUP_REQUEST, SIGNUP_SUCCESS, SIGNUP_FAILURE, COMMON_ERROR, CLEAR_ERROR
} from './types.js';
//import {url} from '../config.js';

export function reduxFormInitial( data ) {
    return {
        type: 'ReduxFormInitial',
        data
    };
}

export function requestLogin( creds ) {
    return {
        type: LOGIN_REQUEST,
        isFetching: true,
        isAuthenticated: true,
        creds
    }
}

export function receiveLogin() {

    return {
        type: LOGIN_SUCCESS,
        isFetching: false,
        isAuthenticated: true,
        //token: user.token
    }
}

export function loginError( message ) {
    return {
        type: LOGIN_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        message
    }
}

//Logout
export function requestLogout() {
    return {
        type: LOGOUT_REQUEST,
        isFetching: true,
        isAuthenticated: true
    }
}

export function receiveLogout() {
    return {
        type: LOGOUT_SUCCESS,
        isFetching: false,
        isAuthenticated: false
    }
}

//Signup

export function requestSignUp( creds ) {
    return {
        type: SIGNUP_REQUEST,
        isFetching: true,
        isAuthenticated: false,
        creds
    }
}

export function receiveSignUp() {

    return {
        type: SIGNUP_SUCCESS,
        isFetching: false,
        isAuthenticated: true,

    }
}

export function errorSignUp( error ) {

    return {
        type: SIGNUP_FAILURE,
        isFetching: false,
        isAuthenticated: false,
        message: error
    }
}

export function commonError( error ) {

    return {
        type: COMMON_ERROR,
        message: error
    }
}

export function clearError() {
    console.log( 'hello' )
    return {
        type: CLEAR_ERROR,

    }
}

// Logs the user out
export function logoutUser( router, params ) {

    return dispatch => {
        dispatch( requestLogout() )
        localStorage.removeItem( 'token' );
        localStorage.removeItem( 'role' );
        router.push( `/main` );
        dispatch( receiveLogout() )

    }
}

// export function loginUser(creds,router) {
//   return dispatch => {
//     const config={
//       'method':'POST',
//       'mode':'cors',
//       'headers': { 'Content-Type':'application/x-www-form-urlencoded' },
//       'body':`email=${creds.email}&password=${creds.password}`
//     }
//     console.log(creds)
//     // We dispatch requestLogin to kickoff the call to the API
//     dispatch(requestLogin(creds))
//     fetch(`${url}/signin`,config)
//     .then(response =>
//             response.json()
//             .then(user => ({ user, response }))
//           )
//       .then(({user,response})=>{
//         if (!response.ok) {
//                   //If there was a problem, we want to
//                   //dispatch the error condition
//                  dispatch(loginError(user.message))
//                   return Promise.reject(user)
//                 }
//                 else {

//                   //If login was successful, set the token in local storage
//                  localStorage.setItem('token', user.token)
//                  localStorage.setItem('role', user.role)
//                   //Dispatch the success action
//                  dispatch(receiveLogin(user))

//                  if(user.role==='admin'){
//                   router.push('/admin')
//                  }
//                   if(user.role==='user'){
//                     router.push('/user')
//                  }
//                }

//       })
//       .catch((err)=>{
//         console.log(err)

//       })
//     }
// }

// export function userSignUp(creds,router) {
//   return dispatch => {
//     const config={
//       'method':'POST',
//       'mode':'cors',
//       'headers': { 'Content-Type':'application/x-www-form-urlencoded' },
//       'body':`email=${creds.email1}&password=${creds.password1}&userName=${creds.userName}&firstName=${creds.firstName}&lastName=${creds.lastname}
//               &mobile=${creds.mobile}`
//     }
//     console.log(creds.email1)
//     // We dispatch requestLogin to kickoff the call to the API
//     dispatch(requestSignUp(creds))
//     fetch(`${url}/signup`,config)
//     .then(response =>{
//       console.log(response)
//       if(!response.ok){
//           console.log('error');
//       }

//       response.json().then((data)=>{
//            localStorage.setItem('token', data.token)
//            localStorage.setItem('role', data.role)
//            dispatch(receiveSignUp(data))
//            if(data.role==='admin'){
//                 router.push('/admin')
//               }
//            if(data.role==='user'){
//                   router.push('/user')
//               }

//       })
//     }

//           )

//       .catch((err)=>{
//         console.log(err)

//       })
//     }
// }
