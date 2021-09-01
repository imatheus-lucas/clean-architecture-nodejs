import UserDTO from "../infra/dtos/UserDTO";
import IUserRepository from "../infra/interfaces/IUserRepository";
import User from "../infra/typeorm/entities/User";

//function genenrateUuid
function genenrateUuid() {
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  );
}

export default class FakeUserRepository implements IUserRepository {
  private users: User[] = [];

  public async findById(id: string): Promise<User | undefined> {
    const findUser = this.users.find((user) => user.id === id);

    return findUser;
  }

  public async findByEmail(email: string): Promise<User | undefined> {
    const findUser = this.users.find((user) => user.email === email);

    return findUser;
  }
  async findAll(): Promise<User[] | undefined> {
    return this.users;
  }

  public async create(userData: UserDTO): Promise<User> {
    const user = new User();

    Object.assign(user, { id: genenrateUuid() }, userData);

    this.users.push(user);

    return user;
  }
}
