// Function to create checkboxes with labels in a list
function addElement(name, listname) {

     let newListItem = document.createElement('li');
      let checkbox = document.createElement("input");

 var label = document.createElement("label");
  
 label.htmlFor = "id";
 
 label.appendChild(document.createTextNode(name));

  newListItem.appendChild(checkbox);
    newListItem.appendChild(label);

    listname.appendChild(newListItem);


}

