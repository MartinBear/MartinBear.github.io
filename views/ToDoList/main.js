var todoList = document.getElementById('todos');
var doneList = document.getElementById('dones');

//felhanterare
function taskFunc(){
	var newTask = document.getElementById('input').value;
	if(newTask){
		createNew(newTask);	
	}
    else{
		alert('One does not simply add a task without any text');  
	}	
}

//Lägger till nya sysslor via input
function createNew(newTask){
	
	var text = document.createTextNode(newTask); 
	var item = document.createElement('li');
	todoList.appendChild(item);
	item.appendChild(text);

    //Knapp till sysslor som är klara
	var compButton = document.createElement('button');
	compButton.textContent = 'Complete';
	item.appendChild(compButton);
    compButton.addEventListener('click', switcheru);
	//knapp till att ta bort sysslor
	var deleteButton = document.createElement('button');
	deleteButton.textContent = "Remove";  
	item.appendChild(deleteButton);	
	deleteButton.onclick = deleteItem;
	
    compButton(item);
    deleteButton(item);
}	
//function till Removeknappen
function deleteItem(event){ 
	var deleteButton = event.target;
	var listItem = deleteButton.parentElement;
	var todoList = listItem.parentElement;
	todoList.removeChild(listItem);
}
//function till Completeknappen
function doneItem(event){
    var compButton = this.parentNode.parentNode.children;
    var doneListItem = document.getElementById('dones');
    dones.appendChild(this.parentNode);
    this.parentNode.removeChild(this);
}
//function som byter från todo till complete med en eventListener
function switcheru(){
    var newText = this.parentNode.parentNode.children;
    var klar = document.getElementById(doneList);
    doneList.appendChild(this.parentNode);
    this.parentNode.removeChild(this);
}