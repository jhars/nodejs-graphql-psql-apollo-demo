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

## Explore the API
You can now visit http://localhost:4000/graphql and explore the API data graph.


## How to run GraphQL Queries on Postman
You can also explore the remote server with Postman.
![Postman-GraphQL](https://github.com/user-attachments/assets/c260680e-3d7e-456e-8379-fa67df4933f6)


