# Book Management System  

This is a **full-stack Book Management System** built with **React (frontend) and Node.js (backend)**. The backend is deployed on a **free hosting platform**, so the first request may take up to **50 seconds** due to a cold start delay, but subsequent requests will be instant.  

## 🚀 Tech Stack  
- **Frontend:** React, React Router, Axios, React-Toastify  
- **Backend:** Node.js, Express.js, MongoDB  
- **Package Manager:** Yarn  

---

## 📌 Installation & Setup  

### **1️⃣ Clone the Repository**  
```sh
git clone https://github.com/RatiyaJay/book-management/new/master
cd book-management

📂 Backend Setup
2️⃣ Configure Environment Variables
Create a .env file inside the backend directory and update the following variables according to your environment:
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
# Node Environment (development or production)
NODE_ENV=development
3️⃣ Install Dependencies
cd book-management-backend
yarn install
4️⃣ Start the Backend Server
yarn start
The backend will run on http://localhost:5000 by default.

🎨 Frontend Setup
5️⃣ Configure Environment Variables
Create a .env file inside the frontend directory and add the backend API URL:
REACT_APP_API_URL=http://localhost:5000

6️⃣ Install Dependencies
cd book-management-frontend
yarn install
7️⃣ Start the Frontend
yarn start
The frontend will be available at http://localhost:3000.

.

🛠️ API Endpoints

Method	Endpoint	        Description
POST	/api/user/register	Register a user
POST	/api/user/login	    Login a user
GET	  /api/books	         Get all books
POST	/api/books	        Add a new book

📜 License
This project is open-source and free to use.






