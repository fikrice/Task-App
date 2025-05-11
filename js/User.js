// file ini digunakan untuk mengurus busines logic
// file ini digunakan untuk mengelola data seperti create, read, update, etc

class User {

    constructor() {
        this.users = this.getUser() || [];
    }

    saveUser(userData){
        const newUser = {
            id : Date.now(),
            ...userData,
        };
        this.users.push(newUser);
        localStorage.setItem('users', JSON.stringify(this.users));
        // return window.location.href = '../signin.html';
        // console.log(userData);
        return {
            success: true,
        }; 
    }

    signInUser(usernameByInput){
        // proses pemeriksaan data username pada localstorage
        const userExists = this.users.some(user => user.username.toLowerCase() === usernameByInput.toLowerCase());

        if(userExists) {
            // console.log(username);
            // proses pengembalian data ke signIn.js controller
            
            return {
                success: true,
                username,
            };
        }
        else {
            return {
                success: false,
                message: 'Data tidak ditemukan',
            };
        }
         
    }

    getUser(){
        return JSON.parse(localStorage.getItem('users')) || [] ;
    }
}