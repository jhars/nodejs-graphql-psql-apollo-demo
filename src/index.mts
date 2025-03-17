import { ApolloServer } from '@apollo/server';
import { expressMiddleware } from '@apollo/server/express4';
import { ApolloServerPluginDrainHttpServer } from '@apollo/server/plugin/drainHttpServer'
import responseCachePlugin from '@apollo/server-plugin-response-cache';
import Keyv from "keyv";
import KeyvRedis from "@keyv/redis";
import { KeyvAdapter } from "@apollo/utils.keyvadapter";
import express from 'express';
import http from 'http';
import cors from 'cors';
import bodyParser from 'body-parser';

import 'dotenv/config'
import typeDefs from "./schema";
import resolvers from "./resolvers";
import db from "../database/models";

const app = express();
const httpServer = http.createServer(app);
const context = async () => ({ db });

const server = new ApolloServer({
  typeDefs: typeDefs,
  resolvers: resolvers,
  plugins: [
    ApolloServerPluginDrainHttpServer({ httpServer }),
    responseCachePlugin()
  ],
  cache: new KeyvAdapter(new Keyv(new KeyvRedis(process.env.REDIS_CONNECTION_URL))),
});
await server.start();

app.use(
  //@ts-ignore
  cors(),
  bodyParser.json(),
  expressMiddleware(server, { context }),
);

const PORT = process.env.PORT
//@ts-ignore 
await new Promise((resolve) => httpServer.listen({ port: process.env.PORT }, resolve));
console.log(`🚀 Server ready at on PORT: ${PORT}`);
