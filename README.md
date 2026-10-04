# 🎨 Parkash Paints

A modern and responsive product showcase website developed for **Parkash Paint Industries**.

The website allows customers to explore different paint and construction-related products through a clean, user-friendly interface with categorized product listings.

## 🌐 Live Website

**[Visit Parkash Paints](https://parkash-paints.vercel.app/)**

---

## ✨ Features

- 🏠 Responsive homepage
- 🎨 Product showcase
- 🔍 Product browsing
- 📂 Product category filtering
- 🌈 Colour catalogue
- ℹ️ About section
- 📱 Mobile-friendly responsive design
- ⚡ Fast and modern React-based interface
- 🔗 Backend API integration
- 📦 Centralized product data

## 📦 Product Categories

The website organizes products into the following categories:

- Interior
- Exterior
- Wood & Metal
- Industrial
- Construction & Tile

## 🛠️ Tech Stack

### Frontend

- React.js
- Vite
- JavaScript
- HTML5
- CSS3
- React Router

### Backend

- Node.js
- Express.js
- REST API

### Tools

- Git
- GitHub
- Visual Studio Code
- npm
- Vercel

---

## 🏗️ Project Architecture

```text
User
  │
  ▼
React + Vite Frontend
  │
  │ HTTP Requests
  ▼
Node.js + Express Backend
  │
  ▼
Product Data / API
```

---

## 📁 Project Structure

```text
parkash-paints/
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── App.jsx
│   │   └── main.jsx
│   │
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── data/
│   │   └── products.js
│   ├── server.js
│   └── package.json
│
├── .gitignore
└── README.md
```

> The folder structure may vary slightly depending on the current version of the project.

---

## 🚀 Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/parkash-paints.git
```

Then:

```bash
cd parkash-paints
```

### 2. Install frontend dependencies

```bash
cd frontend
npm install
```

### 3. Start the frontend

```bash
npm run dev
```

The development server will normally be available at:

```text
http://localhost:5173
```

### 4. Start the backend

Open another terminal:

```bash
cd backend
npm install
```

Then:

```bash
node server.js
```

---

## 🔌 Backend API

The backend is responsible for providing product information to the frontend through REST APIs.

Example API operations:

```text
GET /api/products
```

```text
GET /api/products/:id
```

Product data can include information such as:

```javascript
{
  id: 1,
  name: "Interior Emulsion",
  category: "Interior",
  description: "High-quality interior wall coating",
  image: "/images/product.jpg"
}
```

---

## 🎯 Purpose of the Project

The main goal of Parkash Paints is to create a professional online presence for a paint and construction-products business.

The platform provides customers with an easy way to:

- Explore available products
- Browse products by category
- View product information
- Explore available colours
- Learn more about the company

---

## 📈 Future Improvements

- [ ] Product search
- [ ] Individual product detail pages
- [ ] Advanced colour search
- [ ] Product enquiry system
- [ ] WhatsApp integration
- [ ] Admin dashboard
- [ ] Database integration
- [ ] Online product management
- [ ] Customer authentication
- [ ] SEO improvements
- [ ] Analytics integration
- [ ] Product reviews

---

## 🚀 Deployment

The frontend is deployed using **Vercel**.

### Live Deployment

**https://parkash-paints.vercel.app/**

---

## 👨‍💻 Developer

Developed as a full-stack web development project using modern JavaScript technologies.

### Built With

**React • Vite • JavaScript • Node.js • Express**

---

## 📄 License

This project is developed for **Parkash Paint Industries**.

All brand names, logos, product information, images, and other proprietary assets belong to their respective owners.

---

⭐ **If you like this project, consider giving the repository a star!**
