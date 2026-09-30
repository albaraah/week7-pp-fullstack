# Product Store

A full-stack inventory management app built as a pair-programming activity. It has an **Express + MongoDB** back-end API and a **React** front-end, with user authentication using JWT.

## Team

Built by pair programming, taking turns as driver and navigator on each iteration.

- Albaraae Hri
- Tara Martin

## Tech Stack

- **Back-end:** Node.js, Express, MongoDB, Mongoose, bcryptjs, jsonwebtoken
- **Front-end:** React, React Router, Vite

## Features

- Create, read, update and delete (CRUD) products
- User signup and login with hashed passwords
- JWT authentication, with the token stored in `localStorage`
- Protected routes: only logged-in users can add, edit or delete products
- Public routes: anyone can browse and view products
- Navbar and buttons change depending on whether the user is logged in
- Custom React hooks (`useField`, `useSignup`, `useLogin`) to reduce repeated code

## Project Structure

```
backend/     Express + MongoDB API (with route protection)
frontend/    React app (Vite)
```

## Getting Started

### 1. Back-end

```bash
cd backend
npm install
npm run dev
```

The API runs at `http://localhost:4000`.

### 2. Front-end

Open a second terminal:

```bash
cd frontend
npm install
npm run dev
```

The Vite proxy forwards any request starting with `/api` to the back-end, so the front-end just calls `/api/products`.

## API Endpoints

| Method | Endpoint | Description | Auth required |
|---|---|---|---|
| `POST` | `/api/users/signup` | Register a new user | No |
| `POST` | `/api/users/login` | Log in | No |
| `GET` | `/api/products` | Get all products (newest first) | No |
| `GET` | `/api/products/:productId` | Get one product | No |
| `POST` | `/api/products` | Create a product | **Yes** |
| `PUT` | `/api/products/:productId` | Update a product | **Yes** |
| `DELETE` | `/api/products/:productId` | Delete a product | **Yes** |

Protected routes need this header:

```
Authorization: Bearer <token>
```

## Product Shape

```json
{
  "productName": "Wireless Headphones",
  "category": "Electronics",
  "description": "High-quality wireless headphones with noise cancellation",
  "price": 149.99,
  "inventoryCount": 50,
  "supplier": {
    "name": "TechSupplies Inc.",
    "contactEmail": "sales@techsupplies.com",
    "contactPhone": "555-123-4567",
    "isVerified": true
  }
}
```

## Activity Iterations

| Iteration | What we built |
|---|---|
| 0 | Project setup |
| 1 | Create a product (`POST`) |
| 2 | Get all products (`GET`) |
| 3 | Delete a product (`DELETE`) / view a single product |
| 4 | Get a single product (`GET`) / delete from the UI |
| 5 | Update a product (`PUT`) / edit form |
| 6 | User signup and login |
| 7 | Protect routes with authentication |
| 8 | Refactor with custom hooks (front-end) |

> Note: iterations 3-4 differ slightly between the back-end and front-end labs. Edit this table to match what you actually completed today.

## Pair Programming Notes

- We switched roles between iterations: one person typed (driver) while the other reviewed and guided (navigator).
- We committed after each iteration using small, descriptive commit messages, for example `feat(products): implement POST /products to create a new product`.

## What We Learned

- Building REST endpoints with Express and Mongoose
- Validating IDs and returning correct HTTP status codes
- Hashing passwords and using JWTs for authentication
- Writing middleware to protect routes
- Controlled inputs, `useEffect` and React Router in React
- Extracting reusable logic into custom hooks
