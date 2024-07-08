Sure, here is the updated documentation with the revised section:

<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

# Instructions for Running the GraphQL API Project with NestJS Locally

## Introduction

This project is a GraphQL API developed using NestJS, implementing the Backend for Frontend (BFF) pattern. The BFF pattern is used to create a dedicated backend tailored for the needs of a specific frontend application, optimizing the interaction between the client and the server.

## Route GraphQL

```sh
http://localhost:3002/graphql
```

## Technologies Used

- **NestJS:** A progressive Node.js framework for building efficient and scalable server-side applications.
- **GraphQL:** A query language for your API, and a runtime for executing those queries by using a type system you define for your data.

## Dependencies

To run this project locally, ensure you have the following dependencies installed:

- **Node.js:** Install the latest LTS version from [Node.js official site](https://nodejs.org/).
- **npm:** Comes with Node.js, used to manage the project's dependencies.
- **Docker:** Download and install Docker from [Docker official site](https://www.docker.com/products/docker-desktop).
- **Docker Compose:** Usually comes with Docker installation. Verify by running `docker-compose --version`.
- **Git:** Download and install Git from [Git official site](https://git-scm.com/).

- [Documentation of this API in Postman](https://www.postman.com/tyrcode/workspace/backend-for-front-end-go-nest-js)

## Scripts

### Running the Project

To run the project, use the following command:

```sh
npm run start
```

### Build the Image of our App

This command is used to create the Docker image for our app based on the `Dockerfile`:

```sh
docker build -t api-graphql-bff-nestjs .
```

### Instructions for Testing the Project Locally

To test the project locally, follow the steps to set up the complete environment, which includes creating local Docker images for the two REST API services used in this project. You can download the projects from their respective repositories:

### Client Information Service

- **Repository:** [nest-api-hexagonal-architecture](https://github.com/johanVargas05/nest-api-hexagonal-architecture)

### Portfolio Information Service

- **Repository:** [golang-api-hexagonal-architecture](https://github.com/johanVargas05/golang-api-hexagonal-architecture)

Each repository includes an endpoint `/seed` to load test data and instructions for creating the local Docker image.

#### Steps to Create Local Images:

1. **Clone the Repositories:**

   ```sh
   git clone https://github.com/johanVargas05/nest-api-hexagonal-architecture
   git clone https://github.com/johanVargas05/golang-api-hexagonal-architecture
   ```

2. **Navigate to Each Project Directory and Build the Docker Image:**
   For the Client Information Service:

   ```sh
   cd nest-api-hexagonal-architecture
   docker build -t api-rest-of-client-info-with-nest .
   ```

   For the Portfolio Information Service:

   ```sh
   cd golang-api-hexagonal-architecture
   docker build -t api-rest-of-portfolios-with-golang .
   ```

3. **Build the Docker Image for the GraphQL BFF Project:**
   Navigate to the GraphQL BFF project directory and build its Docker image:

   ```sh
   cd path-to-your-graphql-bff-project
   docker build -t api-graphql-bff-nestjs .
   ```

4. **Run the Docker Compose for the GraphQL BFF Project:**
   Ensure that all images are available locally, then use the following command to start the application along with its dependencies:
   ```sh
   docker-compose -p api_graphql_bff up -d
   ```

## Glossary

**Backend for Frontend (BFF):**
A design pattern where a backend service is created specifically for a single frontend application. This pattern is useful for optimizing the communication between the frontend and backend, allowing for more efficient data fetching and processing tailored to the frontend's needs.

**GraphQL:**
A query language for APIs and a runtime for fulfilling those queries with your existing data. GraphQL provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need, and makes it easier to evolve APIs over time.

**NestJS:**
A framework for building efficient, scalable Node.js server-side applications. It uses progressive JavaScript, is built with and fully supports TypeScript, and combines elements of OOP (Object-Oriented Programming), FP (Functional Programming), and FRP (Functional Reactive Programming).

**Docker:**
A platform used to develop, ship, and run applications inside containers. Containers allow developers to package an application with all parts it needs, such as libraries and other dependencies, and ship it all out as one package.

**Docker Compose:**
A tool for defining and running multi-container Docker applications. You can use a `docker-compose.yml` file to configure your application's services and then use a single command to create and start all the services from your configuration.

This documentation provides a comprehensive overview of the GraphQL API project using NestJS, facilitating understanding, setup, and maintenance of the project.
