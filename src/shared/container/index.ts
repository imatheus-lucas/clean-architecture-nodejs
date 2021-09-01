import IUserRepository from "@modules/users/infra/interfaces/IUserRepository";
import UserRepository from "@modules/users/repositories/UserRepository";
import { container } from "tsyringe";

container.registerSingleton<IUserRepository>("UserRepository", UserRepository);
