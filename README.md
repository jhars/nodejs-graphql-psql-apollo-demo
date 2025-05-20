# F@nt@sy L@cr0sse API

### Tech Stack: GraphQL, Apollo, Sequelize, Redis, Typescript Demo

In order to run locally, first add the following `.env` file to your projet root:

```
PORT=4000
NODE_ENV="development"

DB_HOST="127.0.0.1"
DB_NAME="LaxDB99"
DB_USER="postgres"
DB_PASSWORD="postgres"
DB_DIALECT="postgres"
DB_PORT=5432

DATABASE_URL="Reserved for Production"

REDIS_CONNECTION_URL="redis://root:XfPH3f2$v8L4H$N@redis-18317.c246.us-east-1-4.ec2.redns.redis-cloud.com:18317"
```

Run `npm install`

Install Postgres locally. I prefer GUI installation found here: https://postgresapp.com/

Install sequelize-cli globally:
```
npm install -g sequelize-cli
```

Then create the database and run migrations:

```
sequelize db:create
```

```
sequelize db:migrate
```

Then run the following commands to run locally:
```
npm run watch
```

```
npm run dev
```

GraphQL Explorer Server should be running on: http://localhost:4000/graphql


## Checkout React Native Client Code Repository
Link to Repo: https://github.com/jhars/reactnative-graphql-demo


## Live Demo Client App
There is Web App Demo you are welcome explore here: https://laxapp--g3bqmk65vf.expo.app


## How to run GraphQL Queries on Postman
![Postman-GraphQL](https://github.com/user-attachments/assets/c260680e-3d7e-456e-8379-fa67df4933f6)


