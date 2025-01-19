// src/adapters/http/ExpressApp.ts
import express from "express";
import { CreateUser } from "../../core/use-cases/CreateUser";
import { InMemoryUserRepository } from "../database/InMemoryUserRepository";

const app = express();
app.use(express.json());

const userRepository = new InMemoryUserRepository();
const createUser = new CreateUser(userRepository);

app.post("/users", async (req, res) => {
  const { name, email } = req.body;
  const user = await createUser.execute(name, email);
  res.status(201).json(user);
});

app.get("/users", async (req, res) => {
  const user = await userRepository.findAll();
  res.status(201).json(user);
});

export default app;
