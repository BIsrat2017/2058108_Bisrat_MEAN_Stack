let array=new Array();
var numItems:number = 0;

function addItem(name:string,price:string) :void{
    var itemCounter:number=1;
    var obj = {iName:name,itemP:price,counter:itemCounter}
    if(array.length==0){
        array.push(obj);
    }
    else{
        for (let i = 0; i < array.length; i++) {
            if(obj.iName==array[i].iName){
                array[i].counter++;
                //alert(array[i].iName);
                break;
            }else if(i == (array.length-1)){
                array.push(obj);
                i++;
            }
        } 
    }

    sessionStorage.setItem("itemObj",JSON.stringify(array));
    getNumItems();
}

function remove(item:string):boolean{
    if(confirm("Are you sure you want to remove all added Items of "+ item +" from the cart?")==true){
        for (let i = 0; i < array.length; i++) {
            if(item == array[i].iName){
                numItems -= array[i].counter;
                array.splice(i,1);
                sessionStorage.setItem("itemObj",JSON.stringify(array));
                getNumItems();
                return true;
            }
        }
    }else{
        return false;
    }
}

function getNumItems():void{
    numItems=0;
    for (let i = 0; i < array.length; i++) {
        numItems+=array[i].counter;
    }

    (document.getElementById("cartsize") as HTMLInputElement).value = String(numItems);
}

function disp() :void{
    let itemObj = sessionStorage.getItem("itemObj")
    let itemJson = JSON.parse(itemObj);
    let total:number = 0;

    var putT= `<table border=1 width=50% class='thead-light table-hover'><tr><th>Item Name</th><th>Price</th><th>Number of Items</th></tr>`;

    for (let i = 0; i < itemJson.length; i++) {
        putT+=`<tr><td>${itemJson[i].iName}</td><td>$${itemJson[i].itemP}</td><td>${itemJson[i].counter}</td></tr>`;  
        total+=parseInt(itemJson[i].itemP)*itemJson[i].counter;      
    }
    putT+=`</table>`;
    var tot=`<table border=1 width=25% class='thead-light table-hover'><tr><td><b><i>Total Price</i></b></td><td>$${total}</td></tr></table>`;
    
    (document.getElementById("items")as HTMLInputElement).innerHTML=putT;
    (document.getElementById("totals")as HTMLInputElement).innerHTML=tot;

}