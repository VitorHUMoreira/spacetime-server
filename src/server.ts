import fastify from "fastify";
import cors from "@fastifyCors";
import { memoriesRoutes } from "./routes/memories";
import { fastifyCors } from "@fastify/cors";

const app = fastify();

app.register(cors, {
  origin: true,
});

app.register(memoriesRoutes);

app
  .listen({
    port: 3333,
  })
  .then(() => {
    console.log("⬆️  HTTP server running on http://localhost:3333");
  });
