let http = require("http")
let url = require("url")
let allTasks=[];

let index=`
            <style>
            h2{
                color: #F5DF4D;
                background-color: #959A9C;
                font-style: italic;
                text-align: center;
            }
            h2:hover{
                color: wheat;
                background-color: black;
                font-style: italic;
            }
            </style>
            <h2>Welcome to the Task Planer Application</h2>
            <a href="addTask">Add Task</a> |
            <a href="deleteTask">Delete Task</a> |
            <a href="displayTasks">Display Tasks</a>
            `
let del=`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
        <h2>Delete Task</h2>
            <form action="deltask">
                <label for="delete">Task ID</label>
                <input type="text" name="taskid">
                <input type="submit" value="Delete Task">
            </form>
            <br>
            <a href="index">Back to main page</a> 
        </body>
        </html>
    `

let addTask=`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
            
        </head>
        <body>
            <h2>Add Task</h2>
                <form action="checkTask">
                    <label for="empid">Emp ID </label>
                    <input type="text" name="empid"><br>

                    <label for="taskID">Task ID </label>
                    <input type="text" name="taskid"><br>

                    <label for="task">Task </label>
                    <input type="text" name="task"><br>

                    <label for="deadline">Deadline </label>
                    <input type="date" name="deadline"><br>

                    <input type="submit" value="Submit">
                    <input type="reset" value="clear">
                </form>
                <a href="index">Back to Main Page</a>
        </body>
        </html>`



let totalData =`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta http-equiv="X-UA-Compatible" content="IE=edge">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Document</title>
        </head>
        <body>
            <h2>List of All Tasks</h2>
            <table border=1 style="width: 50%;">
            <tr><th>Employee ID</th><th>Task ID</th><th>Task</th><th>Deadline</th></tr>`
          


let server = http.createServer((request,response)=>{
    let urlInfo=url.parse(request.url,true)

    if(urlInfo.path=="/addTask"){
        response.write(addTask)
    }else if(urlInfo.pathname=="/checkTask"){
        let taskInfo = urlInfo.query
        let found = allTasks.find(task => task.taskid == taskInfo.taskid)
        console.log(found)
        if(found == undefined){
            allTasks.push(taskInfo)
            //response.write(index)
            response.writeHead(200,{"content-type":"text/html"})
            console.log(allTasks.length)
            response.write( "Successfully Added" )
            response.write(addTask)
        }else{
            //alert("Task ID must be Unique")
            response.writeHead(200,{"content-type":"text/html"})
            response.write("Add task rejected, Task ID must be Unique")
            response.write(addTask)
        }    

    }else if( urlInfo.path == "/deleteTask" ){
        response.write(del);
    }else if( urlInfo.pathname == "/deltask" ){
        let taskdel = urlInfo.query;
        let index = allTasks.findIndex(task=>task.taskid==taskdel.taskid)
        console.log(allTasks.length)
        if(index != -1){
            allTasks.splice(index,1)
            response.write( "Task Removed with task ID " + taskdel.taskid )
        }else{
            response.write( "No Task found with task ID " + taskdel.taskid )
        }
    }else if( urlInfo.path == "/displayTasks" ){
        //response.writeHead(200,{"content-type":"text/html"})  
        
        for (let i = 0; i < allTasks.length; i++) {
            totalData+= `<tr><td>`+allTasks[i].empid+`</td><td>`+allTasks[i].taskid+`</td><td>`+allTasks[i].task+`</td><td>`+allTasks[i].deadline+`</td></tr>`
        }   

        totalData+= `</table>
                <a href="index">Back to Main Page</a>
                </body>
                </html>`      
        response.write(totalData);

    }else{
        response.write(index)
    }
    response.end()
})

server.listen(9090,()=>console.log("Server is running in port number 9090"))