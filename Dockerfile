FROM node:18-alpine

WORKDIR /app

# Backend
COPY backend ./backend
WORKDIR /app/backend
RUN npm install

# Frontend
WORKDIR /app
COPY frontend ./frontend

EXPOSE 10000

# Run a single Express server that serves API and static frontend
CMD ["node", "backend/server.js"]