# GraphQL, Apollo, Sequelize, Redis, Typescript Demo

You can send GraphQL requests (via Postman GraphQL requests) to a Heroku test server the code in this repo at the following URL:

```
https://lax-api-04-15d23fe6df01.herokuapp.com/graphql
```

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

## Sample Queries & Mutations

You can run the following requests on an updated version of postman using the "GraphQL" Request type:

```
mutation Mutation($title: String) {
  addLeague(title: $title) {
    title
  }
}

Variables:
{
  "title": "Beta League"
}

```

```
mutation AddTeam($name: String, $leagueId: Int) {
  addTeam(name: $name, leagueId: $leagueId) {
    name
  }
}

Variables:
{
  "name": "Bananas",
  "leagueId": 1
}
```

```
query Leagues {
  leagues {
    title
    teams {
      name
    }
  }
}
```

```
query Teams {
  teams {
    name
    league {
      title
    }
  }
}
```

## How to run GraphQL Queries on Postman
![Postman-GraphQL](https://github.com/user-attachments/assets/c260680e-3d7e-456e-8379-fa67df4933f6)


