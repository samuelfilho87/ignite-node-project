import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { UsersRepository } from "@modules/accounts/infra/typeorm/repositories/UsersRepository";
import { AppError } from "@shared/errors/AppError";

interface IPayload {
  sub: string;
}

export async function ensureAdmin(
  request: Request,
  response: Response,
  next: NextFunction
) {
  console.log("ENTROU");
  const { id } = request.user;

  console.log(id);

  const usersRepository = new UsersRepository();

  const user = await usersRepository.findById(id);

  if (!user.is_admin) {
    throw new AppError("User isn't admin.");
  }

  return next();
}
