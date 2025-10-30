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

const ul_brothList = document.getElementById('brothList');

addElement("1.5 pounds beef short ribs", ul_brothList)
addElement("¼ large onion, cut into quarters", ul_brothList)
addElement("1 carrot, cut into big chunks", ul_brothList)