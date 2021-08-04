

  let array = new Array();

function appendData(){
    var cName = document.getElementById("clientName").value; 
    var pName = document.getElementById("projectName").value;
    var cBudget = document.getElementById("budget").value;

    let arrData = {client: cName, project: pName, budget : cBudget}

  

     array.push(arrData);
     console.log(array.length);

     localStorage.setItem("empObj",JSON.stringify(array));

     console.log("Data store in session and local storage");
}

