// file ini digunakan untuk penghubung antara UI HTML dan model
document.addEventListener('DOMContentLoaded', () => {

    const taskForm = document.getElementById('taskForm');
    const taskManager = new Task();

    taskForm.addEventListener('submit', (e) => {

        e.preventDefault();

        const taskData = {
            taskName: document.getElementById('taskName').value,
            taskPriority: document.getElementById('taskPriority').value,
        };

        const result = taskManager.saveTask(taskData);
        if (result.success){
            // return window.location.href = '../signin.html';
            alert('berhasil tersimpan');
        }
        else {
            console.log('proses simpan data gagal');
        }
        // console.log('Berhasil tersubmit');
    });

});