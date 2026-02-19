# Board App

A free classifieds board: give, find, help!

## 📦 Project Structure

- `backend/` — Node.js server (Express + MongoDB)
- `frontend/` — React + Vite client

## 🚀 How to Run the Project

### Backend

1. Go to the backend folder:
   ```bash
   cd backend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start MongoDB (for example, via Docker):
   ```bash
   docker run -d --name board-mongo -p 27017:27017 -e MONGO_INITDB_ROOT_USERNAME=admin -e MONGO_INITDB_ROOT_PASSWORD=pass99 mongo
   ```
4. Create a `.env` file based on `.env.example`:
   ```
   PORT=5001
   MONGODB_URI=mongodb://admin:pass99@localhost:27017/board-app?authSource=admin
   ```
5. Start the server:
   ```bash
   npm run dev
   ```
6. Check in your browser:  
   [http://localhost:5001/](http://localhost:5001/)

### Frontend

1. Go to the frontend folder:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend:
   ```bash
   npm run dev
   ```
4. Open the address shown by Vite in your browser (usually [http://localhost:5173/](http://localhost:5173/))

## 🛠️ Technologies

- Node.js, Express, MongoDB, Mongoose
- React, Vite, TypeScript, React Router

## 📚 Features

- View all ads
- Add a new ad
- View ad details
- (Planned) Registration, login, user profile

## 👨‍💻 Developer

- [github.com/Vitalii-uap](https://github.com/Vitalii-uap)
