# CI/CD Pipeline Using GitHub Actions

## Project Overview

This project demonstrates the implementation of a Continuous Integration and Continuous Deployment (CI/CD) pipeline using **GitHub Actions, Docker, and Docker Hub**.

A Node.js application is integrated with GitHub Actions to automatically build a Docker image and publish it to Docker Hub whenever new code is pushed to the `main` branch.

## Project Objectives

- Develop a simple Node.js web application.
- Push application source code to GitHub.
- Automate Docker image building using GitHub Actions.
- Automatically publish Docker images to Docker Hub.
- Test and run the published Docker image.

## Technologies Used

| Technology | Purpose |
|---|---|
| Node.js | Application development |
| Express.js | Web application framework |
| Git and GitHub | Source code management |
| GitHub Actions | CI/CD automation |
| Docker | Application containerization |
| Docker Hub | Docker image storage |

## Project Architecture

```text
Developer
    |
    v
Node.js Application
    |
    v
GitHub Repository
    |
    v
GitHub Actions Workflow
    |
    v
Build Docker Image
    |
    v
Push Image to Docker Hub
    |
    v
Pull and Run Docker Container
```

## Repository Links

- **GitHub Repository:** https://github.com/Gurumathapati/CI-CD-Node-App
- **Docker Hub Repository:** https://hub.docker.com/repository/docker/gurumathapati/cicd-node-app

## Project Structure

```text
CI-CD-Node-App/
│
├── .github/
│   └── workflows/
│       └── docker-publish.yml
│
├── server.js
├── package.json
├── package-lock.json
├── Dockerfile
├── .dockerignore
├── .gitignore
└── README.md
```

## Application Features

- Node.js web application using Express.js.
- Welcome page at the root endpoint.
- Health-check endpoint to verify application status.
- Docker container support.
- Automated Docker image build and publishing.

## Application Endpoints

| Endpoint | Description |
|---|---|
| `/` | Displays the application welcome page |
| `/health` | Returns application health status |

## Run the Application Locally

### 1. Clone the repository

```bash
git clone https://github.com/Gurumathapati/CI-CD-Node-App.git
```

### 2. Navigate to the project directory

```bash
cd CI-CD-Node-App
```

### 3. Install dependencies

```bash
npm install
```

### 4. Start the application

```bash
npm start
```

Open the application:

- http://localhost:3000
- http://localhost:3000/health

## Docker Implementation

### Build the Docker image

```bash
docker build -t cicd-node-app:1.0 .
```

### Run the Docker container locally

```bash
docker run -d -p 3000:3000 --name cicd-node-container cicd-node-app:1.0
```

### Verify the running container

```bash
docker ps
```

## Pull and Run the Docker Hub Image

### 1. Pull the image

```bash
docker pull gurumathapati/cicd-node-app:latest
```

### 2. Run the container

```bash
docker run -d -p 3001:3000 --name cicd-test gurumathapati/cicd-node-app:latest
```

### 3. Verify the application

Open:

- http://localhost:3001
- http://localhost:3001/health

## GitHub Actions CI/CD Pipeline

The project uses GitHub Actions to automate Docker image building and publishing.

The workflow file is located at:

```text
.github/workflows/docker-publish.yml
```

### Pipeline Execution Steps

1. Developer pushes source code to the GitHub `main` branch.
2. GitHub Actions automatically triggers the workflow.
3. The workflow checks out the source code.
4. Docker Buildx is configured.
5. GitHub Actions logs in to Docker Hub using repository secrets.
6. The Docker image is built.
7. The image is pushed to Docker Hub.

### Docker Hub Image Tags

The workflow publishes two tags:

```text
gurumathapati/cicd-node-app:latest
gurumathapati/cicd-node-app:<commit-sha>
```

### GitHub Repository Secrets

The following secrets are configured in GitHub:

| Secret Name | Description |
|---|---|
| `DOCKERHUB_USERNAME` | Docker Hub username |
| `DOCKERHUB_TOKEN` | Docker Hub access token |

**Security:** Credentials are stored as GitHub Actions repository secrets and are not included in the source code.

## How to Trigger the CI/CD Pipeline

Make changes to the application or project files and execute:

```bash
git add .
git commit -m "Update application"
git push origin main
```

GitHub Actions automatically starts the workflow and publishes the updated Docker image to Docker Hub.

## Expected Results

- Application source code is available on GitHub.
- GitHub Actions automatically builds the Docker image.
- Docker image is published to Docker Hub.
- Published image can be pulled and executed on another system with Docker installed.

## Conclusion

This project successfully demonstrates a basic CI/CD pipeline using GitHub Actions, Docker, and Docker Hub. It automates the process of building and publishing Docker images whenever changes are pushed to the GitHub repository.

The implementation provides practical experience with source code management, containerization, and CI/CD automation.

---

**Project:** CI/CD Pipeline Using GitHub Actions  
**Developer:** Gurumathapati  
**GitHub:** https://github.com/Gurumathapati/CI-CD-Node-App  
**Docker Hub:** https://hub.docker.com/repository/docker/gurumathapati/cicd-node-app
