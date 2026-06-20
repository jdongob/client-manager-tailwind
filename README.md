# Client Manager - React + Tailwind

Client management application built with React, Tailwind CSS, Context API and React Router.
It consumes a REST API built with JSON Server.

---

## Features

- Create clients
- Read clients list
- Update client data
- Delete clients
- Navigation with React Router
- Global state management with Context API
- REST API integration using JSON Server
- Responsive UI with Tailwind CSS

---

## Tech Stack

Frontend:
- React
- Vite
- JavaScript

Styling:
- Tailwind CSS

State Management:
- Context API

Routing:
- React Router

Backend (Mock API):
- JSON Server

---

## Project Structure

```text
src/
├── components/
│   └── ClientForm.jsx
├── pages/
│   ├── Home.jsx
│   ├── CreateClient.jsx
│   └── EditClient.jsx
├── context/
│   └── ClientContext.jsx
├── services/
│   └── api.js
└── layouts/
    └── DashboardLayout.jsx
```

---

## Installation

1. Install dependencies:
```bash
npm install
```

2. Run the project:
```bash
npm run dev
```
---

## 🌐 Live Demo

https://client-manager-tailwind.vercel.app/

It consumes a REST API built with JSON Server deployed on Render.

---

## Author

GitHub: https://github.com/jdongob