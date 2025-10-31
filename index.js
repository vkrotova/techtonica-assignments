// Function to create checkboxes with labels in a list
function addElement(name, listname) {

    let newListItem = document.createElement('li');
    let checkbox = document.createElement("input");
    checkbox.type="checkbox"

    var label = document.createElement("label");

    label.htmlFor = "id";

    label.appendChild(document.createTextNode(name));

    newListItem.appendChild(checkbox);
    newListItem.appendChild(label);

    listname.appendChild(newListItem);


}

const ul_brothList = document.getElementById('brothList');


addElement("2 bay leaves", ul_brothList)
addElement("6-7 black peppercorns", ul_brothList)
addElement("1 Tbsp salt", ul_brothList)
addElement("12 cups water", ul_brothList)
addElement("1.5 pounds beef short ribs", ul_brothList)
addElement("¼ large onion, cut into quarters", ul_brothList)
addElement("1 carrot, cut into big chunks", ul_brothList)


const ul_borschtList = document.getElementById('borschtList');
addElement("2 Tbsp oil, divided", ul_borschtList)
addElement("1 medium onion, diced small", ul_borschtList)
addElement("2 cloves garlic chopped + 3-4 cloves garlic sliced", ul_borschtList)
addElement("2 carrots, peeled and grated", ul_borschtList)
