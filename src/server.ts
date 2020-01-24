import env from "./constants/env";
import middleware from './middleware';
import controllers from './controllers';
import applyMiddleware from "./utils/applyMiddleware";
import applyControllers from "./utils/applyControllers";
import app from "./app";
import errorHandlers from "./utils/errorHandlers";
import { LoginRepository } from "./repositories";

process.on("uncaughtException", e => {
  console.error('uncaughtException', e);
  process.exit(1);
});

process.on("unhandledRejection", e => {
  console.error('unhandledRejection', e);
  process.exit(1);
});

applyMiddleware(app, middleware);
applyControllers(app, controllers);
applyMiddleware(app, errorHandlers);

app.locals = {
  repositories: {
    login: new LoginRepository()
  }
};

app.listen(env.port, () => {
  console.log('started api');
});
