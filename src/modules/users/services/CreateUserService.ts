import UserDTO from "../infra/dtos/UserDTO";
import IUserRepository from "../infra/interfaces/IUserRepository";
import User from "../infra/typeorm/entities/User";
import bcrypt from "bcryptjs";
import HttpError from "@shared/errors/HttpError";
import { inject, injectable } from "tsyringe";

@injectable()
export default class CreateUserService {
  constructor(
    @inject("UserRepository")
    private userRepository: IUserRepository
  ) {}

  public async execute({ name, email, password }: UserDTO): Promise<User> {
    const checkUserExists = await this.userRepository.findByEmail(email);

    if (checkUserExists) {
      throw new HttpError("User already exists.");
    }

    const hashedPassword = await this.hashPassword(password);

    try {
      const user = await this.userRepository.create({
        name,
        email,
        password: hashedPassword,
      });

      return user;
    } catch (err) {
      throw new HttpError("error in create user" + err);
    }
  }

  private async hashPassword(password: string): Promise<string> {
    return await bcrypt.hash(password, 8);
  }
}
