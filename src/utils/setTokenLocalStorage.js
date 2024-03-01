// functions to set local  storage
function setTokenLocalStorage(token) {
    
    localStorage.setItem('token', token)

}

export default setTokenLocalStorage;

// GET LOCAL STORAGE
 function getTokenLocalStorage(){
    console.log(localStorage.getItem('token'))
    return localStorage.getItem('token');

}

export { getTokenLocalStorage };

// Remove Token Local Storage
 function removeTokenFromLocalStorage(){
    return localStorage.removeItem('token');

}

export { removeTokenFromLocalStorage };