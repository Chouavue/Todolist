let inputValue = document.getElementById('inputtext').value;
let listValue = document.getElementById('list');

//adding items from input to list//
function addtolist(){
    var inputText = document.getElementById('inputtext').value;
    var listItem = document.getElementById('list');
    var newliItem = document.createElement("LI")
    var textItem = document.createTextNode(inputText);
        newliItem.appendChild(textItem)
        listItem.appendChild(newliItem);
        inputText=document.getElementById('inputtext').value='' ;

}


// // deleting list//
listValue.addEventListener('click',function(e){
    var removeList = e.target;
    removeList.style.textDecoration= 'line-through';
    setTimeout(() => removeList.remove(), 1000);   
    })




