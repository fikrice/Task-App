// file ini digunakan untuk penghubung antara UI HTML dan model
document.addEventListener('DOMContentLoaded', () => {

    const userForm = document.getElementById('userForm');
    const userManager = new User();

    userForm.addEventListener('submit', (e) => {

        e.preventDefault();

        const usernameByInput = document.getElementById('username').value;
        

        const result = userManager.signInUser(usernameByInput);
        if (result.success){
            // alert('berhasil login');
            localStorage.setItem('usersnameLoggedIn', usernameByInput);
            return window.location.href = '../tasks.html';
        }
        else {
            alert('Username Tidak Ditemukan');
            console.log(result.message);
        }
        // console.log('Berhasil tersubmit');
    });

});