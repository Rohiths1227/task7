fetch("https://jsonplaceholder.typicode.com/todos/")
.then(response => response.json())
.then(data => {
    console.log("Data received");
})
.catch(error => {
    console.log("Server Error");
})
.finally(() => {
    console.log("Process Completed");
});