import { getConnection, getRepository, Repository } from "typeorm";
import UserDTO from "../infra/dtos/UserDTO";
import IUserRepository from "../infra/interfaces/IUserRepository";
import User from "../infra/typeorm/entities/User";
export default class UserRepository implements IUserRepository {
  constructor(private ormRepository: Repository<User> = getRepository(User)) {}

  async findByEmail(email: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne({ where: { email } });
    return user;
  }
  async findAll(): Promise<User[]> {
    const user = await this.ormRepository.find();
    return user;
  }
  async findById(id: string): Promise<User | undefined> {
    const user = await this.ormRepository.findOne(id);
    return user;
  }
  async create(data: UserDTO): Promise<User> {
    const user = this.ormRepository.create(data);
    await this.ormRepository.save(user);
    return user;
  }
}
