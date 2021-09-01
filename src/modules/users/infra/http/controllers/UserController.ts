import CreateUserService from "@modules/users/services/CreateUserService";

import { Response, Request } from "express";
import { container } from "tsyringe";

export default new (class UserController {
  async create(request: Request, response: Response): Promise<Response> {
    const data = request.body;

    const createUserService = container.resolve(CreateUserService);
    const user = await createUserService.execute(data);

    return response.json(user);
  }
})();
