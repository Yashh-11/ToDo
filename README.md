# 📝 Task Manager – Todo Web App 

**Author: Yash Chandrani(Full Stack Developer)**

A clean and responsive **Task Manager (Todo) web application** built using **HTML, Bootstrap 5, and Vanilla JavaScript**.  
This app allows users to **add, view, edit, and delete tasks** dynamically without refreshing the page.

---

## 🚀 Features

- ➕ Add new tasks with title and description  
- 📋 Display tasks in a responsive table  
- ❌ Delete tasks instantly  
- ✏️ Edit existing tasks  
- 🔢 Auto-generated serial numbers  
- ⚡ Dynamic DOM manipulation  
- 🎨 Professional UI using Bootstrap 5  
- 📱 Fully responsive layout  

---

## 🛠️ Tech Stack

- **HTML5** – Structure  
- **Bootstrap 5** – Styling & responsiveness  
- **JavaScript (ES6)** – Logic & DOM manipulation  

---
## 📂 Project Structure
Task-Manager/
│
├── index.html
├── assets/
│ └── js/
│ └── script.js
└── README.md


---

## 🧠 How It Works

1. User enters **Title** and **Description**
2. On form submit:
   - A task object is created with a unique ID
   - Task is pushed into an array
3. Task list is rendered dynamically in a table
4. Each task row includes:
   - **Delete button** → removes task
   - **Edit button** → updates task details

---

## 📌 Task Object Structure

```js
{
  id: Date.now(),
  title: "Task Title",
  description: "Task Description",
  isComplete: false
}


## 📂 Project Structure

