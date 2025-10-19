function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        // Create a new list item
        let li = document.createElement("li");
        li.textContent = inputBox.value;

        // Optionally, add a close button or click event later

        // Append to the list
        listContainer.appendChild(li);

        // Clear the input
        inputBox.value = '';
    }
}
