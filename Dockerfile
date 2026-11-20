
# Use Node.js 22 lightweight Alpine image
FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install production dependencies
RUN npm ci --omit=dev

# Copy application source code
COPY server.js ./

# Application port
EXPOSE 3000

# Start application
CMD ["npm", "start"]
