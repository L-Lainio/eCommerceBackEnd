# 🛒 eCommerce Back-End API
*A high-performance RESTful API for e-commerce management, built with Node.js, Express, and Sequelize ORM.*

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

---

## 📖 Overview
This application serves as the back-end engine for an e-commerce platform. It leverages **Object-Relational Mapping (ORM)** via Sequelize to interact with a PostgreSQL database, providing a scalable way to manage product categories, individual products, and associated tags.

---

## ✨ Features
- **Full CRUD Functionality:** Create, Read, Update, and Delete for Categories, Products, and Tags.
- **Relational Data:** Complex associations (One-to-Many and Many-to-Many).
- **Environment Security:** Sensitive data managed via `.env` variables.
- **Containerized:** Ready for deployment or local development with Docker.

---

## 🚀 Getting Started

### Prerequisites
- Docker & Docker Desktop (Recommended)
- **OR** Node.js and PostgreSQL installed locally.

### Option A: Docker (Fastest)
1. Clone the repository.
2. Run the following command:
   ```bash
   docker-compose up --build
   ```

### Option B: Node.js (Manual)
1. Install Node.js and PostgreSQL locally.
2. Run the following commands:
   ```bash
   npm install
   npm run seed
   npm start
   ```

---

## 🚀 Docker Setup Instructions

### Step 1: Install Docker
- Download and install Docker Desktop from [Docker's official website](https://www.docker.com/products/docker-desktop).
- After installation, launch Docker Desktop.

### Step 2: Install Docker Compose
- Docker Compose is included with Docker Desktop.
- You can verify the installation by running:
  ```bash
  docker-compose --version
  ```

### Step 3: Clone the Repository
- Clone the repository to your local machine:
  ```bash
  git clone https://github.com/yourusername/eCommerceBackEnd
  ```

### Step 4: Run the Application
- Run the following command in the repository directory:
  ```bash
  docker-compose up --build
  ```

---

## 🚀 Docker Usage Guide

### Start the Project Normally
To start your project with Docker:
```bash
docker-compose up --build
```
This will:
- Build the Node.js application image
- Start the PostgreSQL database
- Initialize and seed the database
- Start the application server on port 3001

### Run Tests with Docker
To run your tests in an isolated environment:
```bash
docker-compose -f docker-compose.test.yml up --build --exit-code-from app
```
This configuration:
- Uses a separate test database (ecommerce_test_db)
- Automatically runs seed scripts
- Executes your test suite
- Cleans up after completion

### Stop and Clean Up
To stop all services and remove containers:
```bash
docker-compose down
```

### Security Notes
- Database credentials in docker-compose files are generic placeholders (user/password)
- **Never hardcode personal MySQL or PostgreSQL passwords**
- Always rely on environment variables for sensitive credentials
- In production, use `.env` files and never commit them to version control

---

## Walkthrough Video
![](/assets/Zight%20Recording%202024-6-3%20at%209.11.13%20PM.mp4)
![](/assets/Zight%202024-6-3%20at%209.19.52%20PM.png)
![](/assets/Zight%202024-6-3%20at%209.19.31%20PM.png)

## Installation 💻
Ensure you are in the develop directory, type npm run seed then npm start

## Usage 🏆
A working backend of an e-commerce site

## Contributing 😃
Support from TA's Github users youtube tutorials

## Tests 🧪
Tested the GET, PUT, POST and DELETE routes numerous times
To run tests, run these commands:
```
npm test
```


## Description

This application allows the user to create a preset database and then connect to it via API calls and perform operations on the different entries.

There are tables for:

- Categories
- Products
- Tags

The user can perform various CRUD operations on these tables via API calls:

- GET routes to return all categories, all products, and all tags
- GET routes to return a single category, single product, and single tag
- POST routes to create a new category, new product, and new tag
- PUT routes to update a product tag id and update a category or tag name
- DELETE routes to delete a single category, single product, and single tag
