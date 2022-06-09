import { Request, Response } from "express";
import { container } from "tsyringe";

import { ProfileUserUsecase } from "./ProfileUserUsecase";

class ProfileUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { id } = request.user;

    const profileUserUsecase = container.resolve(ProfileUserUsecase);

    const user = await profileUserUsecase.execute(id);

    return response.json(user);
  }
}

export { ProfileUserController };
