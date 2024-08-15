# Healthcare Dashboard

This is my submission for coallition tech frontend test

## Description

This project is a web application designed with one page: Dashboard Page. It leverages a postman API containing patients records. The application is mobile-responsive, ensuring a seamless user experience across different devices.

## Table of Contents

- [Features](#features)
- [Technologies Used](#technologies-used)
- [Installation](#installation)
- [API Details](#api-details)
- [Testing](#testing)
- [Links](#links)

## Features

1. **Dashboard**: A central hub that displays the patients records.
2. **Patients Sidebar**: This section shows all the patients.
3. **Patient Profile**: This section shows detailed information of the user.
6. **Line Graph**: Line graph that shows the Blood pressure details of the user for 6 months.
7. **Mobile Responsive**: Ensures optimal viewing and interaction across various devices, including mobile phones and tablets.

## Technologies Used

- HTML5
- Shadcn
- TypeScript
- React.js 
- Postman API 
- Jest (for testing)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/Kehinde13/healthcare_dashboard
    cd lendSqr
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Start the development server:
    ```bash
    npm start
    ```



## API Details

The API contains 100 user records and can be accessed at `https://fedskillstest.coalitiontechnologies.workers.dev`. 


### Example User Data
```json
{
   age: 29,
    date_of_birth: "12/08/1995",
    emergency_contact: "(415) 325-5678",
    gender: "male",
    insurance_type: "kenny insurance",
    lab_results: [],
    name: "john",
    phone_number: "(415) 555-5678",
    profile_picture: "https://via.placeholder.com/150",
    diagnosis_history: [],
    diagnostic_list: [],
  }
  ```

# Testing
This project includes tests written with Jest to ensure the functionality and reliability of the application.

## Running Tests
To run the tests, use the following command:

```bash
npm test
```
## Test Coverage
The tests cover various aspects of the application, including:

- Component rendering
- API calls and data handling

# Links
- [Repository](https://github.com/Kehinde13/healthcare_dashboard)
- [live site](https://healthcare-dashboard-orcin.vercel.app/)




