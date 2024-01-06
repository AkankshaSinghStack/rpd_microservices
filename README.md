Railway Platform Dashboard
Overview
Railway Platform Dashboard is a project developed using ReactJS and NodeJS to provide a user-friendly interface for passengers and station masters to manage and view train information at a station.

Features
Use Case 1: Passenger View
Passengers can view a list of trains coming to the station, along with the platform and arrival time. The information is presented in a tabular manner.

To access passenger view, use the following route: /passenger

Use Case 2: Station Master Input and Edit
Station masters have the ability to input and edit information about trains, specifying the platform and arrival time.

To access station master functionality, use the following route: /station-master

Microservices Architecture
The backend is built on a microservices architecture with three main services:

User Services: Manages user-related functionalities.
Train Services: Handles train information, including platforms and arrival times.
API Gateway: Acts as a gateway for communication between the frontend and microservices.
Getting Started
Clone the repository:

bash
Copy code
git clone https://github.com/your-username/railway-platform-dashboard.git
Install dependencies for each microservice:

bash
Copy code
cd user-services
npm install

cd ../train-services
npm install

cd ../api-gateway
npm install
Run each microservice:

bash
Copy code
# In user-services directory
npm run dev

# In train-services directory
npm run dev

# In api-gateway directory
npm run dev
Start the frontend:

bash
Copy code
cd ../frontend
npm install
npm start
Open your web browser and navigate to http://localhost:3000.

Date Format
The arrival time is displayed in the following format: 2001-06-30T18:30:00.000Z.
