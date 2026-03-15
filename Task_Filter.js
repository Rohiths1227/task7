fetch("https://jsonplaceholder.typicode.com/todos/")
.then(response => response.json())
.then(data => {
    let completedTasks = data.filter(todo => todo.completed === true);

    completedTasks.forEach(todo => {
        console.log(todo.title);
    });
});