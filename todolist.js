const addButton = document.querySelector(".add");
const container = document.getElementById("container");
const doneSection = document.getElementById("doneContainer");
const input = document.querySelector(".input");
const clearButton = document.querySelector(".clear");
const todolist = [];

const List = document.createElement("ul");
const doneList = document.createElement("ul");

addButton.addEventListener("click", function (e) {
  e.preventDefault();
  if (input.value.trim() !== "") {
    const listItem = document.createElement("li");
    let userInput = input.value;
    listItem.textContent = userInput;
    todolist.push(userInput);

    // Create Done and Delete buttons within the list item's scope
    const doneButton = document.createElement("button");
    doneButton.textContent = "Done!";
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";

    // Add click event listener for the Delete button
    deleteButton.addEventListener("click", function (e) {
      List.removeChild(listItem);
      doneList.removeChild(listItem);
      // Find a way to delete from doneList without deleting everything
    });

    // Add click event listener for the Done button
    doneButton.addEventListener("click", function (e) {
      e.preventDefault();
      List.removeChild(listItem);
      doneList.appendChild(listItem);
      doneSection.appendChild(doneList);
      listItem.removeChild(doneButton);
      listItem.removeChild(deleteButton);

      // Create the deleteDone button and its event listener within the Done button's scope
      const deleteDone = document.createElement("button");
      deleteDone.textContent = "Remove item";
      deleteDone.addEventListener("click", function (e) {
        doneList.removeChild(listItem);
      });

      // Append the deleteDone button to the list item
      listItem.appendChild(deleteDone);
    });

    // Append Done and Delete buttons to the list item
    listItem.appendChild(doneButton);
    listItem.appendChild(deleteButton);

    // Append the list item to the list
    List.appendChild(listItem);
    container.appendChild(List);
    console.log(userInput);
    input.value = "";
  }
});

clearButton.addEventListener("click", function (e) {
  e.preventDefault();
  while (List.firstChild) {
    List.removeChild(List.firstChild);
  }
});
