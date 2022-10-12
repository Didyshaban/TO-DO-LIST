let addTodoButton = document.getElementById("addtodo");
let toDocontainer = document.getElementById("toDocontainer");
let Inputfield = document.getElementById("inputfield");
let removebtn = document.getElementById("remove");
let container=document.getElementById("container");


addTodoButton.addEventListener('click',function(){

var paragraph = document.createElement('p')
paragraph.classList.add('paragraph-styling');
paragraph.innerHTML = Inputfield.value;
toDocontainer.appendChild(paragraph);
Inputfield.value="";
paragraph.addEventListener('click' , function(){
    paragraph.style.textDecoration = "line-through";
})

    

removebtn.addEventListener('click', function(){

    toDocontainer.removeChild(paragraph);

})

})


// container.addEventListener("click",function(){
    
//     console.log(container);
//     container.style.backgroundColor="red";
// })
