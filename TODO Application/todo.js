/* This code is replicated from INTERNET for education purpose.
   Please do not make any copy or used for business purpose.
   Last updated- 29-09-2018 #Shubham Thakre 
   Code Version- version-1.0 
*/
//initializing code
var ul = document.getElementById("list");
var li;

var addButton = document.getElementById('add'); // add event code listener
addButton.addEventListener("click", addIteam);

var removeButton = document.getElementById('remove'); // remove event code listener
removeButton.addEventListener("click", removeItem)

//add button functionality
function addIteam(){
    console.log('Add Button Click');
    var input = document.getElementById('input');
    var iteam = input.value;
    ul = document.getElementById("list");
    var textnode = document.createTextNode(iteam);

    if (iteam === '') {
        return false;        
    }else{
        li = document.createElement('li');
        var checkbox = document.createElement('input');
        checkbox.type = "checkbox";
        checkbox.setAttribute('id','check');

        //create label
        var label = document.createElement('label');
        ul.appendChild(label); //add these elements on webpage
        li.appendChild(checkbox);
        label.appendChild(textnode);
        li.appendChild(label);
        ul.insertBefore(li,ul.childNodes[0]);
        
        setTimeout(() => {
            li.className = 'visual';
        }, 100);       
        input.value =""; //clear the input field

    }

    
};
//remove button functionality
function removeItem(){
    console.log('remove Button Click');
    li = ul.children
    for (let index = 0; index < li.length; index++) {
        // var element = li[index];
        // console.log(element);
        while (li[index] && li[index].children[0].checked) {
            ul.removeChild(li[index])
        }
        
    }
    
    
};