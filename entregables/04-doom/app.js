const listItems = document.getElementsByTagName("tr");
console.log(document.nodeType);

for (const listItem of listItems) {
    console.log(listItem.nodeType);
}