// ===================== SETUP =====================


// Select the <main> element from the HTML
const main = document.querySelector("main");

// --- Style the main container ---
main.style.display = "flex";              // Use flexbox layout
main.style.flexDirection = "column";      // Stack children vertically
main.style.alignItems = "center";         // Center children horizontally
main.style.justifyContent = "center";     // Center children vertically
main.style.height = "100vh";              // Take up full screen height
// main.style.backgroundColor = "#ff0000";   // Red background
main.style.fontFamily = "Arial, sans-serif"; // Set a clean font
main.style.gap = "12px";                  // Spacing between input, button, list
// Animated gradient background
main.style.background = "linear-gradient(270deg, #ff6b6b, #ffd93d, #6bcB77, #4d96ff, #ff6b6b)";
main.style.backgroundSize = "400% 400%";
main.style.animation = "gradientShift 10s ease infinite";

// Title: Let's Be Productive!
let title = document.createElement("h1");
title.innerHTML = "Let's Be <i>Productive!</i>"; // Set the title text
title.style.color = "#333"; // Dark gray color
title.style.fontSize = "32px";
title.style.marginBottom = "20px"; // Space below the title
title.style.textShadow = "1px 1px 2px rgba(0,0,0,0.1)"; // Subtle shadow for depth
title.style.fontWeight = "300"; // Make the title bold
title.style.textAlign = "center"; // Center the title

main.appendChild(title); // Add the title to the page
// ===================== INPUT BOX =====================

// Create an input box for typing tasks
let input = document.createElement("input");
input.placeholder = "Enter a task..."; // Placeholder text inside input

// --- Style the input box ---
input.style.padding = "10px";
input.style.fontSize = "16px";
input.style.borderRadius = "6px";
input.style.border = "1px solid #ccc";
input.style.width = "250px";
input.style.outline = "none";

// Add input box to the page
main.appendChild(input);


// ===================== ADD TASK BUTTON =====================

// Create the "Add Task" button
let button = document.createElement("button");
button.innerText = "Add Task"; // Button label

// --- Style the Add Task button ---
button.style.padding = "10px 20px";
button.style.fontSize = "16px";
button.style.border = "none";
button.style.borderRadius = "6px";
button.style.backgroundColor = "#28a745"; // Green
button.style.color = "#fff";
button.style.cursor = "pointer";

// Add button to the page
main.appendChild(button);


// ===================== TO-DO LIST CONTAINER =====================

// Create a container div to hold all task items
let toDoList = document.createElement("div");
toDoList.classList.add("to-do-list"); // Optional class for external CSS

// --- Style the to-do list container ---
toDoList.style.display = "flex";
toDoList.style.flexDirection = "column";
toDoList.style.alignItems = "center";   // Center each task horizontally
toDoList.style.gap = "8px";             // Space between tasks
toDoList.style.width = "300px";

// Add the container to the page
main.appendChild(toDoList);


// ===================== ADD TASK FUNCTIONALITY =====================

// Run this function every time the "Add Task" button is clicked
button.addEventListener("click", function() {

    // Stop if input is empty or just spaces
    if (input.value.trim() === "") return;

    // --- Create a div for one task ---
    let task = document.createElement("div");

    // Style the task container
    task.style.display = "flex";
    task.style.alignItems = "center";
    task.style.justifyContent = "space-between"; // Text left, buttons right
    task.style.width = "100%";
    task.style.padding = "10px";
    task.style.backgroundColor = "#fff";
    task.style.borderRadius = "6px";
    task.style.boxShadow = "0 1px 3px rgba(0,0,0,0.2)";

    // --- Create a span to hold the task's text ---
    let taskText = document.createElement("span");
    taskText.innerText = input.value; // Set text from input
    taskText.style.flex = "1";        // Take up remaining space
    taskText.style.textAlign = "left";
    taskText.style.wordBreak = "break-word"; // Wrap long text

    // Add the text span inside the task div
    task.appendChild(taskText);

    // Add the completed task to the to-do list
    toDoList.appendChild(task);

    // Clear the input box for the next task
    input.value = "";


    // --- Create the "Edit" button ---
    let editButton = document.createElement("button");
    editButton.innerText = "Edit";

    // Style the Edit button
    editButton.style.marginLeft = "8px";
    editButton.style.padding = "5px 10px";
    editButton.style.border = "none";
    editButton.style.borderRadius = "4px";
    editButton.style.backgroundColor = "#ffc107"; // Yellow
    editButton.style.cursor = "pointer";

    // When Edit is clicked, ask for new text and update only the text span
    editButton.addEventListener("click", function() {
        let newTask = prompt("Edit Task", taskText.innerText);

        if (newTask !== null && newTask.trim() !== "") {
            taskText.innerText = newTask; // Update text only
        }
    });

    // Add Edit button to the task
    task.appendChild(editButton);


    // --- Create the "Delete" button ---
    let deleteButton = document.createElement("button");
    deleteButton.innerText = "Delete";

    // Style the Delete button
    deleteButton.style.marginLeft = "8px";
    deleteButton.style.padding = "5px 10px";
    deleteButton.style.border = "none";
    deleteButton.style.borderRadius = "4px";
    deleteButton.style.backgroundColor = "#dc3545"; // Red
    deleteButton.style.color = "#fff";
    deleteButton.style.cursor = "pointer";

    // When Delete is clicked, remove this task from the list
    deleteButton.addEventListener("click", function() {
        toDoList.removeChild(task);
    });

    // Add Delete button to the task
    task.appendChild(deleteButton);
});