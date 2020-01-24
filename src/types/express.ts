import express from "express";
import { LoginRepository } from "../repositories";

export interface App extends express.Application {
  locals: {
    repositories: {
      login: LoginRepository
    }
  }
}

export interface Request extends express.Request {
  app: App;
}
