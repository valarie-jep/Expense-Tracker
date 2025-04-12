# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript and enable type-aware lint rules. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.

#  Expense Tracker

A modern React application that helps you keep track of your expenses with features like adding, filtering, sorting, and deleting entries. Built with Vite for fast performance and styled for a clean, intuitive experience.


##  Features

Add new expenses with the following details:
- Expense Name
- Description
- Category
- Amount
- Date

 View all expenses in a responsive table

 Filter expenses in real-time using a search bar

 Sort expenses alphabetically by:
- Category
- Description

Delete individual expenses

 Persistent data storage using **LocalStorage** (entries remain even after browser refresh)

---

##  Tech Stack

- ⚛️ React (via [Vite](https://vitejs.dev/))
-  CSS (custom, clean layout)
- 🗂 Local Storage for persistence

---

## Project Structure

expense-tracker/ ├── public/ ├── src/ │ ├── components/ │ │ ├── ExpenseForm.jsx │ │ ├── ExpenseTable.jsx │ │ ├── SearchBar.jsx │ │ └── SortControls.jsx │ ├── App.jsx │ ├── App.css │ └── main.jsx ├── package.json └── README.md


