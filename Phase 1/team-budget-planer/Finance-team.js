


function display(){


    let empObj = localStorage.getItem("empObj")
    let empJson = JSON.parse(empObj);

        
    let allTable ="";
    var tableContent = "";

    var startTable = "<table border=1 class='table' ><tr style='background-color: grey'><th>Client Name</th><th>Project Name</th><th>Budget</th></tr>"

    console.log(empJson.length);
    var totalBudget = 0;

    for (let i = 0; i < empJson.length; i++) {
            
        tableContent += "<tr><td>"+empJson[i].client+"</td><td>"+empJson[i].project+"</td><td>$"+empJson[i].budget+"</td></tr>"

        totalBudget+= parseInt(empJson[i].budget);
            
    }
    
    tableContent+="<tr><td colspan='2'>Total Budget</td><td>$"+totalBudget+"</td><tr>";
    console.log(totalBudget)
    var endTable = "</table>"

    allTable = startTable + tableContent + endTable;

    document.getElementById("mydiv").innerHTML = allTable;
}