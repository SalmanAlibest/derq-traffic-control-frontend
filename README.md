
# Derq Traffic Control Frontend

This is the **frontend** application for the **Derq Traffic Control System**, built using **React** and **Vite**. It provides a traffic analytics dashboard and connects with a backend API to fetch and display traffic data.
---
## Tech Stack
- React + Vite
- Axios
- Recharts
- Vitest
- Testing Library (React, JSDOM)
- Docker
---
## Project Setup
### 1. Clone the Repository
```bash
git clone https://github.com/your-username/derq-traffic-control-frontend.git
cd derq-traffic-control-frontend
```
#### 2. Install dependencies
```bash
npm install
```
### Run Locally
```bash
npm run dev
```
---
### Run Tests
```bash
npm run test
```
---
### Docker Setup
#### 1. Build Docker Image
```bash
docker build -t derq-traffic-control-frontend .
```
#### 2. Run Docker Container
```bash
docker run -p 5173:5173 derq-traffic-control-frontend
```