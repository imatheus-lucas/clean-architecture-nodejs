import UserDTO from "../dtos/UserDTO";
import User from "../typeorm/entities/User";

export default interface IUserRepository {
  findById(id: string): Promise<User | undefined>;
  findAll(): Promise<User[] | undefined>;
  create(data: UserDTO): Promise<User>;
  findByEmail(email: string): Promise<User | undefined>;
}
