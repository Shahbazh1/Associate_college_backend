
# **Associate College – Backend**

Associate College Backend is a Node.js + Express REST API for managing students, attendance, exams, authentication, and college-related operations. It includes JWT authentication using cookies, secure password hashing, error logging, and a clean MVC folder structure for scalability.

---

## ⭐ **Features**

### **Authentication**

* Login using JWT tokens stored in HTTP-only cookies
* Secure password hashing with bcrypt
* Middleware-protected routes

### **Student Management**

* Add, update, delete, and fetch students
* Fetch students by roll number, class, or session
* Student status and profile management

### **Attendance Management**

* Submit attendance for students
* Prevent multiple attendance submissions for the same student on the same date
* Update attendance in a separate process
* Generate monthly & yearly attendance reports

### **Fine & Fee System**

* Absence-based fine calculation
* Monthly and exam-based fine
* Paid / Not Paid status updates

### **Exam & Test Reports**

* Weekly test data
* Monthly exam reports

### **Error Logging**

* Saves every error to database with:

  * route
  * method
  * body
  * headers
  * IP address
  * response time
  * error message

### **Ready for CI/CD**

* Jest test support
* GitHub Actions + Vercel integration
* Main branch → Production
* Dev branch → Development preview

---

## 🛠️ **Tech Stack**

* Node.js
* Express.js
* MySQL (Sequelize Optional)
* JWT Authentication
* bcrypt
* Jest
* GitHub Actions
* Vercel / Render

---

## 📁 **Project Structure**

```
associate-college-backend/
├── src/
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   ├── utils/
│   └── app.js
├── .env
├── package.json
└── README.md
```

---

## ⚙️ **Setup**

### 1. Install dependencies

```
npm install
```

### 2. Create `.env`

```
PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=yourpassword
DB_NAME=associate_college
JWT_SECRET=your_jwt_secret
```

### 3. Run project

#### Development

```
npm run dev
```

#### Production

```
npm start
```

---

## 🧪 **Running Tests**

```
npm test
```

---

## 📡 **API Endpoints**

### **Auth**

| Method | Endpoint         | Description                     |
| ------ | ---------------- | ------------------------------- |
| POST   | /api/auth/login  | Login and receive JWT in cookie |
| POST   | /api/auth/logout | Logout                          |

---

### **Students**

| Method | Endpoint              | Description                |
| ------ | --------------------- | -------------------------- |
| GET    | /api/students         | Get all students           |
| GET    | /api/students/:rollNo | Get student by roll number |
| POST   | /api/students         | Add student                |
| PUT    | /api/students/:rollNo | Update student             |
| DELETE | /api/students/:rollNo | Delete student             |

---

### **Attendance**

| Method | Endpoint                        | Description           |
| ------ | ------------------------------- | --------------------- |
| POST   | /api/attendance/submit          | Submit attendance     |
| PUT    | /api/attendance/update/:id      | Update attendance     |
| GET    | /api/attendance/student/:rollNo | Get attendance report |

---

## 🚀 **Deployment**

* Main branch → Production
* Dev branch → Preview
* Supports GitHub Actions + Vercel or Render

---

## 🤝 **Contributing**

1. Create a branch
2. Commit your changes
3. Create a pull request

---

## 📄 **License**

MIT License

---

If you want, I can also generate:

* `README` for frontend
* `.env.example`
* GitHub Actions CI file
* Swagger API documentation
  Just tell me!
