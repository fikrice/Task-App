document.addEventListener('DOMContentLoaded', () => {
    // membuat instance dari object task
    const myTasks = new Task();
    // membuat variable untuk mengambil seluruh tasks
    const existingTasks = myTasks.getTasks();

    const taskWrapper = document.getElementById('taskWrapper');
    const taskWrapperEmpty = document.getElementById('taskWrapperEmpty');
    
    function displayAllTasks() {
        if(existingTasks.length === 0) {
            console.log('tidak ada task tersedia');
        }
        else {
            console.log('beberapa task tersedia dan siap ditampilkan');
        }
    }

    displayAllTasks();
});