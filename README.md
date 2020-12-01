# NodeJS API Server w/ Express and PostgreSQL

This is just a base template for creating an NodeJS Express API server.

Assuming you have already installed NodeJS, Express, PG, Cors, and PostgreSQL all you need to do is open the database.js file and update the connection settings.

## Prerequisites

| Resource   | Description / URL                              | Command               |
| ---------- | ---------------------------------------------- | --------------------- |
| NodeJS     | [Download](https://nodejs.org/en/)             |                       |
| ExpressJS  | [Download](https://expressjs.com/)             | `npm install express` |
| CORS       | [Download](https://www.npmjs.com/package/cors) | `npm install cors`    |
| PostgreSQL | [Download](https://www.npmjs.com/package/pg)   | `npm install pg`      |

## npm init

## npm install express pg cors

## Setup

#### Envirnoment Variables

In the main project folder create a file called `.env`. This is where all environment variables will be defined locally. You'll need to copy and paste these environment variables into your `.env` file.

```
PORT=5000
PGHOST='localhost'
PGUSER='api'
PGPASSWORD='password'
PGDATABASE='perntodo'
PGPORT=5432
```

Note: If you do not define a port number it will automatically default to 3001. You can change this in `index.js`

```
const portNumber = process.env.PORT || 3001; //Gets the port number from an envrionment variable called PORT
```

#### Docker

```
docker build -f ./Dockerfile --build-arg PORT=8080 -t latest .
```

```
docker run latest -e PORT=8080 latest
```
