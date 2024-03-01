// functions to set local  storage
function setTokenLocalStorage(token) {
    
    localStorage.setItem('token', token)

}

export {setTokenLocalStorage};

// GET LOCAL STORAGE
 function getTokenLocalStorage(){

    return localStorage.getItem('token');

}

export { getTokenLocalStorage };

// Remove Token Local Storage
 function removeTokenFromLocalStorage(){
    return localStorage.removeItem('token');

}

export { removeTokenFromLocalStorage };

// Add User to Local Storage
 function addUserLocalStorage(user){
    const userString = JSON.stringify(user);
    localStorage.setItem('user', userString);

}

export { addUserLocalStorage };

// Add User to Local Storage
 function removeUserFromStorage(){
    return localStorage.removeItem('user');

}

export { removeUserFromStorage };