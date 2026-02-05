# Leave Management System

A full-stack Leave Management System built using **React.js** for the frontend, **ASP.NET Core Web API** for the backend, and **SQL Server** as the database.  
The application allows employees to apply for leave and enables administrators to view and update leave request statuses.

---

## Tech Stack

- Frontend: React.js (Hooks, Axios, Bootstrap)
- Backend: ASP.NET Core Web API (.NET 6+)
- Database: SQL Server
- ORM: Entity Framework Core

---

## Features

- Apply for leave
- View all leave requests
- Update leave status (Pending / Approved / Rejected)
- RESTful API integration
- Simple and clean UI

---

## Project Structure

LeaveManagement
│
├── LeaveManagement.API (Backend - ASP.NET Core)
│
└── leave-management-ui (Frontend - React)


---

## Prerequisites

Ensure the following are installed on your system:

- Node.js (LTS version)
- .NET SDK 6 or later
- SQL Server (LocalDB / Express / Standard)
- Visual Studio or VS Code

---

## Backend Setup (ASP.NET Core)

### 1. Navigate to backend project

```bash
cd LeaveManagement.API
2. Update appsettings.json
{
  "ConnectionStrings": {
    "DefaultConnection": "Server=.;Database=LeaveDB;Trusted_Connection=True;TrustServerCertificate=True"
  },
  "AllowedHosts": "*"
}
Update the SQL Server name if required.

3. Run Database Migrations
dotnet ef migrations add InitialCreate
dotnet ef database update
This will create the LeaveDB database and LeaveRequests table.

4. Run Backend API
dotnet run
Backend will run at:

https://localhost:5001
Swagger UI:

https://localhost:5001/swagger
Frontend Setup (React)
1. Navigate to frontend project
cd leave-management-ui
2. Install dependencies
npm install
npm install axios bootstrap
3. Start React App
npm start
Frontend will run at:

http://localhost:3000
API Endpoints
Method	Endpoint	Description
POST	/api/leave	Apply for leave
GET	/api/leave	Get all leave requests
PUT	/api/leave/{id}	Update leave status
Short System Explanation
The system follows a client–server architecture where the React frontend communicates with the ASP.NET Core Web API using RESTful APIs.
The backend handles all business logic and database operations using Entity Framework Core.
APIs are organized under a single controller to manage leave-related operations.
SQL Server is used with a simple and normalized schema to store leave requests efficiently.
The design is lightweight, scalable, and easy to maintain.
With more time, JWT-based authentication and role-based authorization would be added to separate employee and admin access securely.

Future Enhancements
JWT Authentication & Authorization

Role-based access (Employee / Admin)

Leave balance tracking

Pagination and filtering

Email notifications

Author
Developed by Vishal Solanki

