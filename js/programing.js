var ProductName = document.getElementById('ProductName');
var ProductPrice = document.getElementById('ProductPrice');
var ProductQuantity = document.getElementById('ProductQuantity');


/////////////////////////
var abanoub;
//////////////////////////////////////////
var array = new Array ();
///////////////////////////////
if(localStorage.getItem("new") != null){

array = JSON.parse( localStorage.getItem("new"));
fill()
}




function takeData (){
   localStorage.setItem("new" , JSON.stringify(array))


   if( document.getElementById('mainButton').innerHTML=="Update"){
    resetData (abanoub);
    return;
   }
    

   var product = {
    name: ProductName.value , 
    price : Number( ProductPrice.value ), 
    quantity : Number( ProductQuantity.value )
   }


   array.push(product);
   localStorage.setItem("new" , JSON.stringify(array))
   clear();
   fill();

   

}


/////////////////////////////////////////////
function fill (){
var cartona = "";
for (var i=0 ; i<array.length; i++){
    cartona += `        
    <tr class="text-center">
    <td>${i+1}</td>
    <td>${array[i].name}</td>
    <td>${array[i].price}</td>
    <td>${array[i].quantity}</td>
    <td><button onclick="Update(${i})" class="btn btn-warning">Update</button></td>
    <td><button onclick="Delete(${i})" class="btn btn-danger">Delete</button></td> 
    </tr>`
}

document.getElementById("tbody").innerHTML = cartona;
}
///////////////////////////////////////////
function clear (){
    ProductName.value = "";
    ProductPrice.value = "";
    ProductQuantity.value = "";
}
////////////////////////////////////////////
function Delete (index){
array.splice(index, 1)
fill();
localStorage.setItem("new" , JSON.stringify(array))

}
////////////////////////////////////////////
function  Update (index){

    document.getElementById('mainButton').innerHTML="Update";
    ProductName.value = array[index].name;
    ProductPrice.value = array[index].price;
    ProductQuantity.value = array[index].quantity;
    abanoub = index;
}
///////////////////////////////////////////
function resetData (index){
   document.getElementById('mainButton').innerHTML="Add";

    array[index].name =  ProductName.value;
    array[index].price =  ProductPrice.value;
    array[index].quantity =  ProductQuantity.value;
    fill();
   localStorage.setItem("new" , JSON.stringify(array))

    clear();

}



