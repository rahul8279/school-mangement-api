# School API

A RESTful API for managing and querying schools, built with Node.js, Express, and MySQL.
## 🔗 Live 
<a href="http://school-mangement-api-production-e0a5.up.railway.app" target="_blank" rel="noopener noreferrer">
  Click here to live
</a>


## POSTMAN

<a href="https://web.postman.co/workspace/037761ce-d031-4924-8a55-a339a9861bb1/collection/42946758-a45d35fc-f63c-4724-83b3-2e35d5f2be77?action=share&source=copy-link&creator=42946758" target="_blank" rel="noopener noreferrer">
  Click here watch postman 
</a>


## Features

- Add new schools with name, address, latitude, and longitude
- List all schools sorted by proximity to a given location
- Input validation and error handling
- MySQL database integration

## Project Structure

```
src/
  server.js              # Main Express server
  config/
    db.js                # MySQL connection setup
  controller/
    school.controller.js # Business logic for school routes
  model/
    school.model.js      # Database queries for schools
  routes/
    schoolRoutes.js      # API route definitions
  utils/
    asyncHandler.js      # Async error handler
    calculateDistance.js # Utility for distance calculation
    errorhandler.js      # Custom error handler
.env                     # Environment variables
```

## Setup

1. **Clone the repository**

   ```
   git clone <your-repo-url>
   cd school-api
   ```

2. **Install dependencies**

   ```
   npm install
   ```

3. **Configure environment variables**

   Edit the `.env` file with your MySQL credentials:

   ```
   MYSQLPORT=3306
   MYSQLHOST=localhost
   MYSQLUSER=root
   MYSQLPASSWORD=yourpassword
   MYSQLDATABASE=school_db
   PORT=5000
   ```

4. **Start the server**

   ```
   npm start
   ```
   or
   ```
   node src/server.js
   ```

## API Endpoints

### Add a School

- **POST** `/api/schools/addSchool`
- **Body:**  
  ```json
  {
    "name": "School Name",
    "address": "School Address",
    "latitude": 28.6139,
    "longitude": 77.2090
  }
  ```

### List Schools by Proximity

- **GET** `/api/schools/listSchools?latitude=28.6&longitude=77.2`

## Technologies Used

- Node.js
- Express
- MySQL
- dotenv

