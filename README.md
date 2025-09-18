# Vanilla JS To-Do List ✅

A feature-rich to-do list application built entirely with vanilla JavaScript, HTML, and CSS. This project is structured using ES Modules and Object-Oriented Programming (OOP) principles to create a maintainable and organized codebase, focusing on clean separation of concerns.



---
## Live Demo

[Link to your live project](https://your-username.github.io/your-repo-name/)

---
## Features

- **Task Creation:** Add new tasks with a title, due date, priority level (high, medium, low), and assign them to a project.
- **Dynamic Display:** View all tasks in a clean, organized list.
- **Project Filtering:** Filter the task list by project category using the sidebar navigation.
- **Task Deletion:** Remove tasks from the list individually.
- **Persistent UI State:** The currently selected filter in the navigation remains highlighted.

---
## How It Works

This project is built from scratch without any frameworks to demonstrate a solid understanding of core web technologies.

-   **Modular Design:** The application is split into ES Modules, each with a specific responsibility:
    -   `create-task.js`: Handles the creation of task objects and the main data store.
    -   `display.js`: Manages the rendering and re-rendering of tasks to the DOM.
    -   `navigation.js`: Controls the logic for the project filtering sidebar.
    -   `deleteButton.js`: Manages the deletion of tasks using event delegation.
-   **State Management:** A central array named `shelf` (exported from `create-task.js`) acts as the single source of truth for all to-do items.
-   **OOP Principles:** The logic is encapsulated in classes (`task`, `display`, `navigation`, `deleteButton`) to manage different aspects of the application.
-   **DOM Manipulation:** The UI is rendered and updated dynamically using vanilla JavaScript DOM manipulation methods.

---
## Getting Started

To get a local copy up and running, follow these simple steps.

### Prerequisites

You only need a modern web browser.

### Installation

1.  Clone the repository:
    ```bash
    git clone [https://github.com/your-username/your-repo-name.git](https://github.com/your-username/your-repo-name.git)
    ```
2.  Navigate to the project directory:
    ```bash
    cd your-repo-name
    ```
3.  Open the `index.html` file in your web browser.
    > **Note:** For the ES Modules (`import`/`export`) to work correctly, it's best to serve the project with a local server. You can use the "Live Server" extension in VS Code.
