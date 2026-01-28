# 🛒 eCommerce Back-End API
*A high-performance RESTful API for e-commerce management, built with Node.js, Express, and Sequelize ORM.*

![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?style=for-the-badge&logo=Sequelize&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)
![Jest](https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white)
![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)

---

## 📖 Overview
This application serves as the back-end engine for an e-commerce platform. It leverages **Object-Relational Mapping (ORM)** via Sequelize to interact with a PostgreSQL database, providing a scalable way to manage product categories, individual products, and associated tags.

---

## ✨ Features
- **Full CRUD Functionality:** Robust API endpoints for Categories, Products, and Tags.
- **Relational Data Modeling:** Implements Many-to-Many relationships via junction tables (ProductTags) and One-to-Many associations.
- **Environment Security:** Secured using `dotenv` and a `.dockerignore` strategy to protect sensitive credentials.
- **Containerized Architecture:** Fully Dockerized for seamless development-to-production parity.
- **Automated Testing Suite:** Integrated **Jest** and **Supertest** for high-confidence route verification.

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
