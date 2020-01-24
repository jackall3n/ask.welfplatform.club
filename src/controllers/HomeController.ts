import { Response } from 'express';
import { Request } from '../types/express';
import { GET, Controller } from "../decorators";

@Controller('/')
class HomeController {

  @GET('/')
  async home(request: Request, response: Response) {
    response.send(`
      <html lang="en">
        <body>
            <div>Hello.</div>
        </body>
      </html>
    `);
  }

  @GET('/logins')
  async logins(request: Request, response: Response) {
    const logins = await request.app.locals.repositories.login.getAll();
    response.send(logins.toJSON());
  }
}

export { HomeController };
