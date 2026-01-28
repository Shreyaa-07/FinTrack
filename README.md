# FinTrack - Personal Finance Tracker

FinTrack is a full-stack personal finance application designed to help users track their income and expenses efficiently. With a modern, responsive UI and visual data representation, managing your finances has never been easier.

##  Key Features

*   **Income & Expense Tracking**: Easily add, delete, and view your financial transactions.
*   **Visual Reports**: Dynamic charts using Chart.js to visualize your spending habits.
*   **Secure Authentication**: User registration and login protected with JWT and Bcrypt.
*   **Responsive Design**: Built with React and Styled Components for a seamless experience on any device.
*   **Dark/Light Mode**: Toggle between themes for better accessibility.

##  Tech Stack

### Frontend
*   **React**: UI Library
*   **Styled Components**: CSS-in-JS for styling
*   **Chart.js**: Data visualization
*   **Axios**: HTTP Client
*   **Context API**: State Management

### Backend
*   **Node.js & Express**: Server-side runtime and framework
*   **MongoDB & Mongoose**: NoSQL Database and ODM
*   **JWT (JSON Web Tokens)**: Authentication
*   **Bcryptjs**: Password hashing

##  Installation & Setup

Follow these steps to run the project locally.

### 1. Clone the repository
```bash
git clone https://github.com/Shreyaa-07/fintrack.git
cd fintrack
```

### 2. Backend Setup
Navigate to the backend folder and install dependencies:
```bash
cd backend
npm install
```

Create a `.env` file in the `backend` directory:
```env
PORT=5000
MONGO_URL=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret_key
```

Run the backend server:
```bash
npm start
# or for development with nodemon
npm run dev
```

### 3. Frontend Setup
Navigate to the frontend folder and install dependencies:
```bash
cd ../frontend
npm install
```

Run the frontend application:
```bash
npm start
```

The app should now be running on `http://localhost:3000`.

## Deployment

### Backend (Render)
The backend is deployed on Render.
1.  Create a Web Service on Render.
2.  Connect your GitHub repo.
3.  Set Build Command: `npm install`
4.  Set Start Command: `node app.js`
5.  Add Environment Variables (`MONGO_URL`, `JWT_SECRET`).

### Frontend (Vercel)
The frontend is deployed on Vercel.
1.  Import the `frontend` directory in Vercel.
2.  Set Environment Variable `REACT_APP_BASE_URL` to your Render backend URL (e.g., `https://your-app.onrender.com/api/v1/`).
3.  Deploy!
