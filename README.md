# 🛒 Byte Bazzar - E-Commerce Backend

A scalable and secure RESTful API built with **Node.js**, **Express.js**, and **MongoDB** that powers the Byte Bazzar e-commerce platform. The backend handles user authentication, product management, shopping cart operations, and order processing.

## 🌐 Live API

**Base URL**

https://e-commerce-backend-98e5.onrender.com/api

---

# 🚀 Features

- User Registration
- User Login
- JWT Authentication
- Protected Routes
- User Profile
- Product Management
- Product Filtering
- Product Details
- Shopping Cart
- Update Cart
- Remove Cart Items
- Place Orders
- View User Orders
- Cart Count API
- MongoDB Integration
- RESTful API Architecture
- Environment Variable Support

---

# 🛠️ Tech Stack

### Backend

- Node.js
- Express.js
- MongoDB
- Mongoose
- JSON Web Token (JWT)
- dotenv
- CORS

---

# 📁 Project Structure

```
Backend
│
├── controllers
│   ├── AddProducts.js
│   ├── cartControll.js
│   ├── getProducts.js
│   ├── getUserData.js
│   ├── ordersController.js
│   ├── SelectedProductDetails.js
│   ├── specificProductfilter.js
│   └── userLoginCtrl.js
│
├── DB
│   └── dataBase.js
│
├── middlewares
│   └── verifyToken.js
│
├── models
│   ├── Cart.js
│   ├── Order.js
│   ├── Product.js
│   └── User.js
│
├── routes
│   ├── cartRoutes.js
│   ├── orderRoute.js
│   ├── productsRoute.js
│   └── userLoginRoute.js
│
├── .env
├── server.js
├── package.json
└── README.md
```

---

# 🔐 Authentication APIs

## Register User

**POST**

```
/api/registration
```

### Request

```json
{
  "name": "Pavan Kumar",
  "email": "pavan@gmail.com",
  "password": "123456"
}
```

---

## Login User

**POST**

```
/api/login
```

### Request

```json
{
  "email": "pavan@gmail.com",
  "password": "123456"
}
```

---

## Get User Details

**GET**

```
/api/user/:id
```

Authentication Required

---

# 📦 Product APIs

## Add Product

**POST**

```
/api/products/add
```

---

## Get All Products

**GET**

```
/api/products/get
```

---

## Filter Products

**GET**

```
/api/products
```

Example

```
/api/products?category=Electronics
```

---

## Get Product Details

**GET**

```
/api/products/:id
```

---

# 🛒 Cart APIs

## Add To Cart

**POST**

```
/api/cart/add
```

---

## Get Cart

**GET**

```
/api/cart/:userId
```

Authentication Required

---

## Update Cart

**PUT**

```
/api/cart/update
```

---

## Remove Item

**DELETE**

```
/api/cart/remove
```

---

# 📦 Order APIs

## Create Order

**POST**

```
/api/orders/create
```

---

## Get User Orders

**GET**

```
/api/orders/user/:userId
```

---

## Cart Count

**GET**

```
/api/orders/count/:userId
```

---

# 🔒 Authentication

JWT is used for securing protected APIs.

Example Header

```
Authorization: Bearer YOUR_JWT_TOKEN
```

---

# ⚙️ Installation

Clone the repository

```bash
git clone https://github.com/G-Pavan-Kumar1220/E-Commerce-Backend-.git
```

Navigate to the project

```bash
cd E-Commerce-Backend-
```

Install dependencies

```bash
npm install
```

Create a `.env` file

```env
PORT=4000

MONGO_URI=your_mongodb_connection_string

JWT_SECRET=your_secret_key
```

Run the server

```bash
npm run dev
```

or

```bash
node server.js
```

---

# 📦 Dependencies

- express
- mongoose
- jsonwebtoken
- bcryptjs
- cors
- dotenv
- nodemon

---

# 🔄 API Flow

```
Client
   │
   ▼
Express Server
   │
   ▼
Authentication Middleware
   │
   ▼
Controllers
   │
   ▼
MongoDB
```

---

# 🔒 Security Features

- JWT Authentication
- Protected Routes
- Password Hashing
- Environment Variables
- MongoDB Validation
- Error Handling
- CORS Enabled

---

# 📈 Future Enhancements

- Razorpay / Stripe Integration
- Payment Verification
- Wishlist API
- Product Reviews
- Product Ratings
- Admin Dashboard
- Inventory Management
- Order Tracking
- Image Upload (Cloudinary)
- Email Verification
- Forgot Password
- Refresh Token Authentication
- Rate Limiting
- API Documentation (Swagger)

---

# 🌍 Deployment

### Frontend

https://e-commerce-frontend-f8mu-fo0npojfi.vercel.app/

### Backend API

https://e-commerce-backend-98e5.onrender.com/api

---

# 👨‍💻 Developer

**Pavan Kumar**

GitHub

https://github.com/G-Pavan-Kumar1220

---

# ⭐ Support

If you found this project helpful, please consider giving it a ⭐ on GitHub.

---

# 📄 License

This project is developed for educational, learning, and portfolio purposes.
